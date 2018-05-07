myApp.controller('ListingController', ['$http', function($http) {
    console.log('ListingController loaded');
    const self = this;

    $http.get('/listing/all').then((response) => {
        self.listingData = response.data;
    }).catch((error) => {
        alert('something went wrong');
    })
}]);