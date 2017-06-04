cmcMarkets.controller('summaryCtrl', function ($scope,summary) {
    $scope.viewModel = summary.getViewModel();
    $scope.purchase = summary.purchase.bind(summary)
});