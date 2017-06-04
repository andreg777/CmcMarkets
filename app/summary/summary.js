cmcMarkets.factory('summary', function (basket,$location) {

    var service = {
        viewModel: {},
        getViewModel: function(){
            service.viewModel.items = basket.store;
            service.viewModel.deliveryOption = basket.deliveryOption;
            service.viewModel.total = service.total.bind(service);
            return service.viewModel;
        },
        total: function(){
            //todo calc
            return "$50.00";
        },
        purchase: function(){
            $location.path("/thankyou")
        }
    };

    return service;
});