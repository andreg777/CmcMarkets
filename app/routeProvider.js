cmcMarkets.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/purchase', {
            templateUrl: 'app/purchase/purchase.html',
            controller: 'purchaseCtrl'
        })
        .when('/checkout', {
            templateUrl: 'app/checkout/checkout.html',
            controller: 'checkoutCtrl'
        })
        .when('/summary', {
            templateUrl: 'app/summary/summary.html',
            controller: 'summaryCtrl'
        })
        .otherwise({
            redirectTo: '/purchase'
        });
});
