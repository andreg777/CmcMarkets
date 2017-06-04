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