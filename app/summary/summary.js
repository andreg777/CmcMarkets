cmcMarkets.factory('summary', function (basket,$location,$window) {

    var service = {
        viewModel: {},
        getViewModel: function(){
            service.viewModel.items = basket.store;
            service.viewModel.deliveryOption = basket.deliveryOption;
            service.refreshBasketItems();
            
            return service.viewModel;
        },
        refreshBasketItems: function(){
            service.viewModel.total = basket.total();
            service.viewModel.hasItems = service.viewModel.items.length >= 1;
        },
        purchase: function(){
            $location.path("/thankyou")
        },
        remove: function(item){
            basket.removeFromBasket(item);
            service.refreshBasketItems();
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