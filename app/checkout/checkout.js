cmcMarkets.factory('checkout', function (basket,$location) {

    var service = {
        viewModel: {

        },
        getViewModel: function(){
             service.viewModel = {
                items: function(){ return basket.store; },
                deliveryOption: basket.deliveryOption,
                deliveryOptions:[{
                    type:  'Mail',
                    price: '$5.00'},
                    {type: 'Bicycle',
                    price: '$15.00'},
                    {type: 'Pidgeon',
                    price: '$20.00'},
                    {type: 'Drone',
                    price: '$25.00'},                    
                ]                
            };

            return service.viewModel;
        },

        checkout: function(){
            basket.deliveryOption = service.viewModel.deliveryOption;
            $location.path('/summary');
        }
    };

    return service;
});