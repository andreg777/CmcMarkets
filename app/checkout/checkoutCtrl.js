cmcMarkets.controller('checkoutCtrl', function ($scope,checkout) {
    $scope.viewModel = checkout.getViewModel();
    $scope.checkout = checkout.checkout.bind(checkout);
});