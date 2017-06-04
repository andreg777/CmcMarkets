cmcMarkets.controller('checkoutCtrl', function ($scope,checkout) {
    $scope.viewModel = checkout.getViewModel();
    $scope.checkout = checkout.checkout.bind(checkout);
    $scope.back = checkout.back.bind(checkout);
});