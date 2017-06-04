cmcMarkets.factory('thankyou', function (basket,$location) {

    var service = {     
        done: function(){
            basket.clear();
            $location.path('/purchase');
        }   
    };

    return service;
});