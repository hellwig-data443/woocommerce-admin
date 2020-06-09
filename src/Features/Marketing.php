<?php
/**
 * WooCommerce Marketing.
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use Automattic\WooCommerce\Admin\Marketing\InstalledExtensions;
use Automattic\WooCommerce\Admin\Loader;

/**
 * Contains backend logic for the Marketing feature.
 */
class Marketing {
	/**
	 * Name of recommended plugins transient.
	 *
	 * @var string
	 */
	const RECOMMENDED_PLUGINS_TRANSIENT = 'wc_marketing_recommended_plugins';

	/**
	 * Name of knowledge base post transient.
	 *
	 * @var string
	 */
	const KNOWLEDGE_BASE_TRANSIENT = 'wc_marketing_knowledge_base';

	/**
	 * Class instance.
	 *
	 * @var Marketing instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_parent_menu_item' ), 9 );
		add_action( 'admin_menu', array( $this, 'register_pages' ) );
		add_action( 'admin_head', array( $this, 'modify_menu_structure' ) );

		if ( ! is_admin() ) {
			return;
		}

		add_filter( 'woocommerce_admin_preload_options', array( $this, 'preload_options' ) );
		add_filter( 'woocommerce_shared_settings', array( $this, 'component_settings' ), 30 );
		add_action( 'admin_enqueue_scripts', array( $this, 'maybe_add_marketing_coupon_script' ) );
	}

	/**
	 * Maybe add our wc-admin coupon scripts if viewing coupon pages
	 */
	public function maybe_add_marketing_coupon_script() {

		$rtl = is_rtl() ? '-rtl' : '';

		wp_enqueue_style(
			'wc-admin-marketing-coupons',
			Loader::get_url( "marketing-coupons/style{$rtl}", 'css' ),
			array(),
			Loader::get_file_version( 'css' )
		);

		wp_enqueue_script(
			'wc-admin-marketing-coupons',
			Loader::get_url( 'wp-admin-scripts/marketing-coupons', 'js' ),
			array( 'wp-i18n', 'wp-data', 'wp-element', 'moment', 'wp-api-fetch', WC_ADMIN_APP ),
			Loader::get_file_version( 'js' ),
			true
		);
	}

	/**
	 * Add main marketing menu item.
	 *
	 * Uses priority of 9 so other items can easily be added at the default priority (10).
	 */
	public function add_parent_menu_item() {
		add_menu_page(
			__( 'Marketing', 'woocommerce-admin' ),
			__( 'Marketing', 'woocommerce-admin' ),
			'manage_woocommerce',
			'woocommerce-marketing',
			null,
			'dashicons-megaphone',
			58
		);
	}

	/**
	 * Registers report pages.
	 */
	public function register_pages() {
		$marketing_pages = array(
			array(
				'id'       => 'woocommerce-marketing',
				'title'    => __( 'Marketing', 'woocommerce-admin' ),
				'path'     => '/marketing/overview',
				'icon'     => 'dashicons-megaphone',
				'position' => 58, // After WooCommerce & Product menu items.
			),
			array(
				'id'    => 'woocommerce-marketing-overview',
				'title' => __( 'Overview', 'woocommerce-admin' ),
				'parent' => 'woocommerce-marketing',
				'path'  => '/marketing',
			),
		);

		$marketing_pages = apply_filters( 'woocommerce_marketing_menu_items', $marketing_pages );

		foreach ( $marketing_pages as $marketing_page ) {
			if ( ! is_null( $marketing_page ) ) {
				$marketing_page['parent'] = 'woocommerce-marketing';
				wc_admin_register_page( $marketing_page );
			}
		}
	}

	/**
	 * Modify the Marketing menu structure
	 */
	public function modify_menu_structure() {
		global $submenu;

		$marketing_submenu_key = 'woocommerce-marketing';
		$overview_key          = null;

		// User does not have capabilites to see the submenu.
		if ( ! current_user_can( 'manage_woocommerce' ) || empty( $submenu[ $marketing_submenu_key ] ) ) {
			return;
		}

		foreach ( $submenu[ $marketing_submenu_key ] as $submenu_key => $submenu_item ) {
			if ( 'wc-admin&path=/marketing' === $submenu_item[2] ) {
				$overview_key = $submenu_key;
			}
		}

		// Remove PHP powered top level page.
		unset( $submenu[ $marketing_submenu_key ][0] );

		// Move overview menu item to top.
		if ( null !== $overview_key ) {
			$menu = $submenu[ $marketing_submenu_key ][ $overview_key ];
			unset( $submenu[ $marketing_submenu_key ][ $overview_key ] );
			array_unshift( $submenu[ $marketing_submenu_key ], $menu );
		}
	}

	/**
	 * Preload options to prime state of the application.
	 *
	 * @param array $options Array of options to preload.
	 * @return array
	 */
	public function preload_options( $options ) {
		$options[] = 'woocommerce_marketing_overview_welcome_hidden';

		return $options;
	}

	/**
	 * Add settings for marketing feature.
	 *
	 * @param array $settings Component settings.
	 * @return array
	 */
	public function component_settings( $settings ) {
		// Bail early if not on a wc-admin powered page.
		if ( ! Loader::is_admin_page() ) {
			return $settings;
		}

		$settings['marketing']['installedExtensions'] = InstalledExtensions::get_data();

		return $settings;
	}

	/**
	 * Load recommended plugins from WooCommerce.com
	 *
	 * @return array
	 */
	public function get_recommended_plugins() {
		$plugins = get_transient( self::RECOMMENDED_PLUGINS_TRANSIENT );

		if ( false === $plugins ) {
			$request = wp_remote_get( 'https://woocommerce.com/wp-json/wccom/marketing-tab/1.0/recommendations.json' );
			$plugins = [];

			if ( ! is_wp_error( $request ) && 200 === $request['response']['code'] ) {
				$plugins = json_decode( $request['body'], true );
			}

			set_transient(
				self::RECOMMENDED_PLUGINS_TRANSIENT,
				$plugins,
				// Expire transient in 15 minutes if remote get failed.
				// Cache an empty result to avoid repeated failed requests.
				empty( $plugins ) ? 900 : 3 * DAY_IN_SECONDS
			);
		}

		return array_values( $plugins );
	}

	/**
	 * Load knowledge base posts from WooCommerce.com
	 *
	 * @param string $category Category of posts to retrieve.
	 * @return array
	 */
	public function get_knowledge_base_posts( $category ) {

		$kb_transient = self::KNOWLEDGE_BASE_TRANSIENT;

		$categories = array(
			'marketing' => 1744,
			'coupons'   => 25202,
		);

		// Default to marketing category (if no category set on the kb component).
		if ( ! empty( $category ) && array_key_exists( $category, $categories ) ) {
			$category_id  = $categories[ $category ];
			$kb_transient = $kb_transient . '_' . strtolower( $category );
		} else {
			$category_id = $categories['marketing'];
		}

		$posts = get_transient( $kb_transient );

		if ( false === $posts ) {
			$request_url = add_query_arg(
				array(
					'categories' => $category_id,
					'page'       => 1,
					'per_page'   => 8,
					'_embed'     => 1,
				),
				'https://woocommerce.com/wp-json/wp/v2/posts'
			);

			$request = wp_remote_get( $request_url );
			$posts   = [];

			if ( ! is_wp_error( $request ) && 200 === $request['response']['code'] ) {
				$raw_posts = json_decode( $request['body'], true );

				foreach ( $raw_posts as $raw_post ) {
					$post = [
						'title'         => html_entity_decode( $raw_post['title']['rendered'] ),
						'date'          => $raw_post['date_gmt'],
						'link'          => $raw_post['link'],
						'author_name'   => isset( $raw_post['author_name'] ) ? html_entity_decode( $raw_post['author_name'] ) : '',
						'author_avatar' => isset( $raw_post['author_avatar_url'] ) ? $raw_post['author_avatar_url'] : '',
					];

					$featured_media = $raw_post['_embedded']['wp:featuredmedia'];

					if ( count( $featured_media ) > 0 ) {
						$image         = current( $featured_media );
						$post['image'] = add_query_arg(
							array(
								'resize' => '650,340',
								'crop'   => 1,
							),
							$image['source_url']
						);
					}

					$posts[] = $post;
				}
			}

			set_transient(
				$kb_transient,
				$posts,
				// Expire transient in 15 minutes if remote get failed.
				empty( $posts ) ? 900 : DAY_IN_SECONDS
			);
		}

		return $posts;
	}

}
