
cmcMarkets.controller('purchaseCtrl', function ($scope,purchase) {
    $scope.viewModel = purchase.getViewModel();
    $scope.purchase = purchase.purchase.bind(purchase);
});