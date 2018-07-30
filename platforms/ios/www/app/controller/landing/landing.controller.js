(function() {
    'use strict';
  
    angular
      .module('app.controllers')
      .controller('landingController', landingController);
  
    /** @ngInject */
    function landingController($scope,$rootScope,$ionicSideMenuDelegate,fireBaseData,$state,){
        $scope.instaBazaar = {};
        initialize();
        function initialize() {
            $scope.instaBazaar.title = "This is sample page";
        }
    }
})();
