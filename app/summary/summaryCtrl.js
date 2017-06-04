cmcMarkets.controller('summaryCtrl', function ($scope,summary) {
    $scope.viewModel = summary.getViewModel();
    $scope.purchase = summary.purchase.bind(summary)
    $scope.back = summary.back.bind(summary);
    $scope.total = summary.total.bind(summary);
});