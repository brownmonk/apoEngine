'use strict';

/* Controllers */

function BandCtrl($scope, $http) {
    $http.get('data/bands.json').success(function(data) {
        $scope.bands = data;
    });
}

function BandDetailCtrl($scope, $http, $routeParams) {
    $scope.bandId = $routeParams.bandId;

    $http.get('data/bands/'+$routeParams.bandId+'.json').success(function(data) {
       $scope.band = data;
    });
}

BandCtrl.$inject = ['$scope', '$http', '$routeParams'];


function AccountCtrl() {
}
AccountCtrl.$inject = [];
