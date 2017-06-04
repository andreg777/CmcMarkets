cmcMarkets.factory('basket', function () {

    var service = {
        store: [],
        deliveryOption: null,

        
        addToBasket: function(item){
            service.store.push(item);
        },
        removeFromBasket: function(item){
            service.store.remove(item);
        }
    };

    return service;
});