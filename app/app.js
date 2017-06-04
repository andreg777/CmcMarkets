var cmcMarkets = angular.module('cmcMarkets', ['ngRoute', 'ngAnimate', 'ngMaterial']);

cmcMarkets.config(function ($mdThemingProvider, $mdIconProvider, $mdDateLocaleProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink')
        .warnPalette('red');
    
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('YYYY-MM-DD');
    };
});

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
