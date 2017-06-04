cmcMarkets.factory('summary', function (basket,$location,$window) {

    var service = {
        viewModel: {},
        getViewModel: function(){
            service.viewModel.items = basket.store;
            service.viewModel.deliveryOption = basket.deliveryOption;
            service.viewModel.total = basket.total();
            return service.viewModel;
        },

        purchase: function(){
            $location.path("/thankyou")
        },

        back: function(){
            $window.history.back();
        },
        total: function(){
            return basket.total();
        }
    };

    return service;
});