'use strict';


// Declare app level module which depends on filters, and services
angular.module('bandStock', ['bandStock.filters', 'bandStock.services', 'bandStock.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/bands', {templateUrl: 'partials/bands.html', controller: BandCtrl});
    $routeProvider.when('/bands/:bandId', {templateUrl: 'partials/band-detail.html', controller: BandDetailCtrl});
    $routeProvider.when('/account', {templateUrl: 'partials/account.html', controller: AccountCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
