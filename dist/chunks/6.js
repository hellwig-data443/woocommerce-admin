(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[6],{576:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return b})),r.d(t,"h",(function(){return g})),r.d(t,"g",(function(){return v}));var a=r(33),n=r(44),o=r.n(n),i=r(2),c=r(29),s=r(34),u=r(35),l=r(577);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i="function"==typeof e?e(n):e,s=Object(c.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);var u={include:s.join(","),per_page:s.length};return o()({path:Object(a.addQueryArgs)(i,u)}).then((function(e){return e.map(t)}))}}var d=m(s.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),f=m(s.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=m(s.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),y=m(s.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),b=m(s.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function g(e){var t=e.attributes,r=e.name,a=Object(u.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var n=t.map((function(e){return e.option})).join(", ");return n?r+a+n:r}var v=m((function(e){var t=e.products;return t?s.NAMESPACE+"/products/".concat(t,"/variations"):s.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:g(e)}}))},577:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},578:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(20),i=r.n(o),c=r(15),s=r.n(c),u=r(22),l=r.n(u),m=r(23),d=r.n(m),f=r(10),p=r.n(f),y=r(0),b=r(3),g=r(181),v=r(126),h=r(25),O=r(2),j=r(1),_=r.n(j),R=r(74),w=r(34),k=r(42),C=r(574),S=r(575),D=r(29);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=p()(e);if(t){var n=p()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var T=function(e){l()(r,e);var t=P(r);function r(){return i()(this,r),t.apply(this,arguments)}return s()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(O.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),E({date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,i=Object(k.getIntervalForQuery)(t),c=Object(k.getCurrentDates)(t,o),s=c.primary,u=c.secondary;return r.data.intervals.map((function(e,r){var o=Object(k.getPreviousDate)(e.date_start,s.after,u.after,t.compare,i),c=a.data.intervals[r];return{date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:c&&c.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(O.get)(t,["data","totals",a.key],null),secondary:Object(O.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,i=n.filterParam,c=n.interactiveLegend,s=n.itemsLabel,u=n.legendPosition,l=n.path,m=n.query,d=n.selectedChart,f=n.showHeaderControls,p=n.primaryData,g=Object(k.getIntervalForQuery)(m),v=Object(k.getAllowedIntervalsForQuery)(m),h=Object(k.getDateFormatsForInterval)(g,p.data.intervals.length),O=o?Object(b.__)("No data for the current search","woocommerce-admin"):Object(b.__)("No data for the selected date range","woocommerce-admin"),j=this.context,_=j.formatAmount,C=j.getCurrencyConfig;return Object(y.createElement)(R.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:O,filterParam:i,interactiveLegend:c,interval:g,isRequesting:t,itemsLabel:s,legendPosition:u,legendTotals:a,mode:e,path:l,query:m,screenReaderFormat:h.screenReaderFormat,showHeaderControls:f,title:d.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(w.getTooltipValueFormat)(d.type,_),chartType:Object(k.getChartTypeForQuery)(m),valueType:d.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:C()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(y.createElement)(S.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(y.createElement)(S.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),i=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,i)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(y.Component);T.contextType=C.a,T.propTypes={filters:_.a.array,isRequesting:_.a.bool,itemsLabel:_.a.string,limitProperties:_.a.array,mode:_.a.string,path:_.a.string.isRequired,primaryData:_.a.object,query:_.a.object.isRequired,secondaryData:_.a.object,selectedChart:_.a.shape({key:_.a.string.isRequired,label:_.a.string.isRequired,order:_.a.oneOf(["asc","desc"]),orderby:_.a.string,type:_.a.oneOf(["average","number","currency"]).isRequired}).isRequired},T.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(g.a)(Object(h.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,i=t.limitProperties,c=t.query,s=t.advancedFilters,u=i||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var i=Object(D.flattenFilters)(o.filters),c=r[o.param]||o.defaultValue||"all";return Object(O.find)(i,{value:c})}return e(n,r,a)}(n,c),m=Object(O.get)(l,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(O.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(O.get)(e,["chartMode"])}return null}(l,c)||"time-comparison",f=e(w.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p={mode:d,filterParam:m,defaultDateRange:f};if(o)return p;var y=u.some((function(e){return c[e]&&c[e].length}));if(c.search&&!y)return E(E({},p),{},{emptySearchResults:!0});var b=r&&r.map((function(e){return e.key})),g=Object(w.getReportChartData)({endpoint:a,dataType:"primary",query:c,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:f,fields:b});if("item-comparison"===d)return E(E({},p),{},{primaryData:g});var v=Object(w.getReportChartData)({endpoint:a,dataType:"secondary",query:c,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:f,fields:b});return E(E({},p),{},{primaryData:g,secondaryData:v})})))(T)},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(2);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},580:function(e,t,r){"use strict";var a=r(20),n=r.n(a),o=r(15),i=r.n(o),c=r(22),s=r.n(c),u=r(23),l=r.n(u),m=r(10),d=r.n(m),f=r(0),p=r(3),y=r(181),b=r(25),g=r(1),v=r.n(g),h=r(29),O=r(74),j=r(199),_=r(34),R=r(42),w=r(50),k=r(575),C=r(574);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var D=function(e){s()(r,e);var t=S(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(j.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=n.primary?n.primary[e]:0,i=n.secondary?n.secondary[e]:0,c=a?0:o,s=a?0:i;return{delta:Object(j.calculateDelta)(c,s),prevValue:this.formatVal(s,t),value:this.formatVal(c,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,i=t.endpoint,c=t.report,s=t.defaultDateRange,u=o.isError,l=o.isRequesting;if(u)return Object(f.createElement)(k.a,{isError:!0});if(l)return Object(f.createElement)(O.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(R.getDateParamsFromQuery)(a,s).compare;return Object(f.createElement)(O.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,s=t.orderby,u=t.label,l=t.type,d={chart:r};s&&(d.orderby=s),o&&(d.order=o);var y=Object(h.getNewPath)(d),b=n.key===r,g=e.getValues(r,l),v=g.delta,j=g.prevValue,_=g.value;return Object(f.createElement)(O.SummaryNumber,{key:r,delta:v,href:y,label:u,prevLabel:"previous_period"===m?Object(p.__)("Previous Period:","woocommerce-admin"):Object(p.__)("Previous Year:","woocommerce-admin"),prevValue:j,selected:b,value:_,onLinkClickCallback:function(){a&&a(),Object(w.recordEvent)("analytics_chart_tab_click",{report:c||i,key:r})}})}))}))}}]),r}(f.Component);D.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},D.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},D.contextType=C.a,t.a=Object(y.a)(Object(b.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,i=t.filters,c=t.advancedFilters,s=n||[a],u=s.some((function(e){return o[e]&&o[e].length}));if(o.search&&!u)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(_.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(_.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:s,filters:i,advancedFilters:c,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(D)},591:function(e,t,r){"use strict";function a(e,t,r){return!!t&&(e&&t<=r==="instock")}r.d(t,"a",(function(){return a}))},609:function(e,t,r){"use strict";var a=r(20),n=r.n(a),o=r(15),i=r.n(o),c=r(13),s=r.n(c),u=r(22),l=r.n(u),m=r(23),d=r.n(m),f=r(10),p=r.n(f),y=r(0),b=r(3),g=r(181),v=r(76),h=r(25),O=r(2),j=r(29),_=r(74),R=r(199),w=r(35),k=r(34),C=r(610),S=r(591),D=r(583),q=r(574);r(649);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=p()(e);if(t){var n=p()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var P=Object(w.g)("manageStock","no"),T=Object(w.g)("stockStatuses",{}),A=function(e){l()(r,e);var t=E(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(s()(e)),e.getRowsContent=e.getRowsContent.bind(s()(e)),e.getSummary=e.getSummary.bind(s()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(b.__)("Product Title","woocommerce-admin"),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(b.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(b.__)("Items Sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(b.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(b.__)("Net Sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(b.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(b.__)("Category","woocommerce-admin"),key:"product_cat"},{label:Object(b.__)("Variations","woocommerce-admin"),key:"variations",isSortable:!0},"yes"===P?{label:Object(b.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===P?{label:Object(b.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.query,a=Object(j.getPersistedQuery)(r),n=this.context,o=n.render,i=n.formatDecimal,c=n.getCurrencyConfig,s=c();return Object(O.map)(t,(function(t){var n=t.product_id,c=t.items_sold,u=t.net_revenue,l=t.orders_count,m=t.extended_info||{},d=m.category_ids,f=m.low_stock_amount,p=m.manage_stock,g=m.sku,h=m.stock_status,O=m.stock_quantity,k=m.variations,D=void 0===k?[]:k,q=Object(v.decodeEntities)(m.name),E=Object(j.getNewPath)(a,"/analytics/orders",{filter:"advanced",product_includes:n}),A=Object(j.getNewPath)(a,"/analytics/products",{filter:"single_product",products:n}),N=e.props.categories,F=d&&d.map((function(e){return N.get(e)})).filter(Boolean)||[],x=Object(S.a)(h,O,f)?Object(y.createElement)(_.Link,{href:Object(w.f)("post.php?action=edit&post="+n),type:"wp-admin"},Object(b._x)("Low","Indication of a low quantity","woocommerce-admin")):T[h];return[{display:Object(y.createElement)(_.Link,{href:A,type:"wc-admin"},q),value:q},{display:g,value:g},{display:Object(R.formatValue)(s,"number",c),value:c},{display:o(u),value:i(u)},{display:Object(y.createElement)(_.Link,{href:E,type:"wc-admin"},l),value:l},{display:Object(y.createElement)("div",{className:"woocommerce-table__product-categories"},F[0]&&Object(y.createElement)(C.a,{category:F[0],categories:N}),F.length>1&&Object(y.createElement)(_.Tag,{label:Object(b.sprintf)(Object(b._x)("+%d more","categories","woocommerce-admin"),F.length-1),popoverContents:F.map((function(e){return Object(y.createElement)(C.a,{category:e,categories:N,key:e.id,query:r})}))})),value:F.map((function(e){return e.name})).join(", ")},{display:Object(R.formatValue)(s,"number",D.length),value:D.length},"yes"===P?{display:p?x:Object(b.__)("N/A","woocommerce-admin"),value:p?T[h]:null}:null,"yes"===P?{display:p?Object(R.formatValue)(s,"number",O):Object(b.__)("N/A","woocommerce-admin"),value:O}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.products_count,r=void 0===t?0:t,a=e.items_sold,n=void 0===a?0:a,o=e.net_revenue,i=void 0===o?0:o,c=e.orders_count,s=void 0===c?0:c,u=this.context,l=u.formatAmount,m=(0,u.getCurrencyConfig)();return[{label:Object(b._n)("product","products",r,"woocommerce-admin"),value:Object(R.formatValue)(m,"number",r)},{label:Object(b._n)("item sold","items sold",n,"woocommerce-admin"),value:Object(R.formatValue)(m,"number",n)},{label:Object(b.__)("net sales","woocommerce-admin"),value:l(i)},{label:Object(b._n)("orders","orders",s,"woocommerce-admin"),value:Object(R.formatValue)(m,"number",s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,a=e.filters,n=e.hideCompare,o=e.isRequesting,i=e.query,c={helpText:Object(b.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:Object(b.__)("Search by product name or SKU","woocommerce-admin")};return Object(y.createElement)(D.a,{compareBy:n?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:o,labels:c,query:i,searchBy:"products",baseSearchQuery:r,tableQuery:{orderby:i.orderby||"items_sold",order:i.order||"desc",extended_info:!0,segmentby:i.segmentby},title:Object(b.__)("Products","woocommerce-admin"),columnPrefsKey:"products_report_columns",filters:a,advancedFilters:t})}}]),r}(y.Component);A.contextType=q.a,t.a=Object(g.a)(Object(h.withSelect)((function(e,t){var r=t.query;if(t.isRequesting||r.search&&(!r.products||!r.products.length))return{};var a=e(k.ITEMS_STORE_NAME),n=a.getItems,o=a.getItemsError,i=a.isResolving,c={per_page:-1};return{categories:n("categories",c),isError:Boolean(o("categories",c)),isRequesting:i("getItems",["categories",c])}})))(A)},610:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(20),n=r.n(a),o=r(15),i=r.n(o),c=r(22),s=r.n(c),u=r(23),l=r.n(u),m=r(10),d=r.n(m),f=r(0),p=r(2),y=r(618),b=r(74),g=r(29);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var h=function(e){s()(r,e);var t=v(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"getCategoryAncestorIds",value:function(e,t){for(var r=[],a=e.parent;a;)r.unshift(a),a=t.get(a).parent;return r}},{key:"getCategoryAncestors",value:function(e,t){var r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get(Object(p.first)(r)).name+" › ":2===r.length?t.get(Object(p.first)(r)).name+" › "+t.get(Object(p.last)(r)).name+" › ":t.get(Object(p.first)(r)).name+" … "+t.get(Object(p.last)(r)).name+" › "}},{key:"render",value:function(){var e=this.props,t=e.categories,r=e.category,a=e.query,n=Object(g.getPersistedQuery)(a);return r?Object(f.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(r,t),Object(f.createElement)(b.Link,{href:Object(g.getNewPath)(n,"/analytics/categories",{filter:"single_category",categories:r.id}),type:"wc-admin"},r.name)):Object(f.createElement)(y.a,null)}}]),r}(f.Component)},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(0);function n(){return Object(a.createElement)("span",{className:"components-spinner"})}},649:function(e,t,r){}}]);