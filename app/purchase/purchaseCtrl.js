cmcMarkets.controller('purchaseCtrl', function ($scope,purchase) {
    $scope.viewModel = purchase.getViewModel();
});