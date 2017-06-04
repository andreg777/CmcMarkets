cmcMarkets.controller('summaryCtrl', function ($scope,summary) {
    $scope.viewModel = summary.getViewModel();
});