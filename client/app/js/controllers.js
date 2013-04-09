'use strict';

/* Controllers */

function BandCtrl($scope, Band) {
    $scope.bands = Band.query();
}

function BandDetailCtrl($scope, Band, $routeParams) {
    $scope.bandId = $routeParams.bandId;

    $scope.band = Band.get({bandId: $routeParams.bandId}, function(band) {
        $scope.band = band;
        $scope.count = 0;
    });

    $scope.addToCount = function(){
        $scope.count++;
    }
}

//$inject is unnecessary unless minifying
//BandCtrl.$inject = ['$scope', 'Band', '$routeParams'];


function AccountCtrl() {
}
//AccountCtrl.$inject = [];
