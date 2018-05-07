myApp.controller('SaleController', ['$http', function ($http) {
    console.log('SaleController loaded');
    const self = this;

    $http.get('/listing/sale').then((response) => {
        self.listingData = response.data;
    }).catch((error) => {
        alert('something went wrong');
    })
}]);