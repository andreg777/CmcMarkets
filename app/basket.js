cmcMarkets.factory('basket', function () {

    var service = {
        store: [],
        deliveryOption: null,

        addToBasket: function(item){
            service.store.push(item);
        },
        removeFromBasket: function(item){
            var index = service.store.indexOf(item);
            if(index == -1){
                return;
            }
            service.store.splice(index,1);
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