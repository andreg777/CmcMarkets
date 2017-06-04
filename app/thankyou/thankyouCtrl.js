cmcMarkets.controller('thankyouCtrl', function ($scope,thankyou) {
    $scope.done = thankyou.done.bind(thankyou);
});