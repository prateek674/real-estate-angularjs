const myApp = angular.module('listingApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'AddListingController as vm'
    }).when('/rentals', {
        templateUrl: 'views/listing.html',
        controller: 'ListingController as vm'
    }).when('/sale', {
        templateUrl: 'views/listing.html',
        controller: 'SaleController as vm'
    }).otherwise({template: '<h1>404</h1>'});
}])