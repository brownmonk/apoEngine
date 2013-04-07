'use strict';


// Declare app level module which depends on filters, and services
angular.module('bandStock', ['bandStock.filters', 'bandStock.services', 'bandStock.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/band', {templateUrl: 'partials/band.html', controller: BandCtrl});
    $routeProvider.when('/account', {templateUrl: 'partials/account.html', controller: AccountCtrl});
    $routeProvider.otherwise({redirectTo: '/band'});
  }]);
