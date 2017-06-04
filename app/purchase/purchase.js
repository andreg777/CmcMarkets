cmcMarkets.factory('purchase', function (data,basket) {

    var service = {
        getViewModel: function(){
            return {
                items: data.items,
                basketItems: function(){ return basket.store; }
            };
        },
        purchase: function(item){
            basket.addToBasket(item);
        }
    };

    return service;
});