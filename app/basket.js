cmcMarkets.factory('basket', function () {

    var service = {
        store: [],
        deliveryOption: null,

        addToBasket: function(item){
            service.store.push(item);
        },
        removeFromBasket: function(item){
            service.store.remove(item);
        },
        total: function(){
            var total = 0;
            service.store.forEach(function(item){total += item.price;});

            if(service.deliveryOption != null){
                total += service.deliveryOption.price;
            }
            return total;
        },
        clear: function(){
            service.store.length = 0;
            service.deliveryOption = null;
        }
    };

    return service;
});