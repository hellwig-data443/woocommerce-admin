<?php

namespace Automattic\WooCommerce\Admin\Schedulers;

/**
 * Class MailchimpScheduler
 *
 * @package Automattic\WooCommerce\Admin\Schedulers
 */
class MailchimpScheduler {

	const SUBSCRIBE_ENDPOINT     = 'https://woocommerce.com/wp-json/wccom/v1/subscribe';
	const SUBSCRIBE_ENDPOINT_DEV = 'http://woocommerce.test/wp-json/wccom/v1/subscribe';

	const SUBSCRIBED_OPTION_NAME = 'woocommerce_onboarding_subscribed_to_mailchimp';

	const LOGGER_CONTEXT = 'mailchimp_scheduler';

	/**
	 * The logger instance.
	 *
	 * @var \WC_Logger_Interface|null
	 */
	private $logger;

	/**
	 * MailchimpScheduler constructor.
	 *
	 * @param \WC_Logger_Interface|null $logger Logger instance.
	 */
	public function __construct( \WC_Logger_Interface $logger = null ) {
		if ( null === $logger ) {
			$logger = wc_get_logger();
		}
		$this->logger = $logger;
	}

	/**
	 * Attempt to subscribe store_email to MailChimp.
	 */
	public function run() {
		// Abort if we've already subscribed to MailChimp.
		if ( 'yes' === get_option( self::SUBSCRIBED_OPTION_NAME ) ) {
			return;
		}

		$profile_data = get_option( 'woocommerce_onboarding_profile' );

		// Abort if store_email doesn't exist.
		if ( ! isset( $profile_data['store_email'] ) ) {
			return;
		}

		if ( 'development' === constant( 'WP_ENVIRONMENT_TYPE' ) ) {
			$subscribe_endpoint = self::SUBSCRIBE_ENDPOINT_DEV;
		} else {
			$subscribe_endpoint = self::SUBSCRIBE_ENDPOINT;
		}

		$response = wp_remote_post(
			$subscribe_endpoint,
			array(
				'method' => 'POST',
				'body'   => array(
					'email' => $profile_data['store_email'],
				),
			)
		);

		if ( is_wp_error( $response ) || ! isset( $response['body'] ) ) {
			$this->logger->error( "Error getting a response from {$subscribe_endpoint}.", self::LOGGER_CONTEXT );
		} else {
			$body = json_decode( $response['body'] );
			if ( isset( $body->success ) && true === $body->success ) {
				update_option( self::SUBSCRIBED_OPTION_NAME, 'yes' );
			} else {
				$this->logger->error(
					// phpcs:ignore
					"Incorrect response from {$subscribe_endpoint}: " . print_r( $body, true ),
					self::LOGGER_CONTEXT
				);
			}
		}
	}
}