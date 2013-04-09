'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('BandStock', function() {

    describe('BandDetailCtrl', function(){
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/bands/1.json').respond({name:'band 1'});

            $routeParams.phoneId = '1';
            scope = $rootScope.$new();
            ctrl = $controller(BandDetailCtrl, {$scope: scope});
        }));


        it('should fetch band detail', function() {
            expect(scope.band).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phone).toEqual({name:'phone 1'});
        });
    });
});
/*
    describe('view1', function() {

        beforeEach(function() {
          browser().navigateTo('#/view1');
        });


        it('should render view1 when user navigates to /view1', function() {
          expect(element('[ng-view] p:first').text()).
            toMatch(/partial for view 1/);
        });

      });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
  */



