'use strict';

/* Controllers */

function BandCtrl($scope, $http) {
    $scope.bands = [
        {
            name:'band1',
            snippet:'Unemro Ucho'
        },
        {
            name:'band2',
            snippet:'so rox0r'
        }
    ]

}

BandCtrl.$inject = ['$scope', '$http'];


function AccountCtrl() {
}
AccountCtrl.$inject = [];
