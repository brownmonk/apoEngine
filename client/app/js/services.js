'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('bandStock.services', ['ngResource']).
    factory('Band', function($resource){
        return $resource('data/bands/:bandId.json', {}, {
            query: {method:'GET', params:{bandId:'allBands'}, isArray:true}
        });
    });
