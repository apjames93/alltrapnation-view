(function(){
  angular
    .module('alltrapnation')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location','albumecoverService',  '$state'];

    function homeController($scope, $location, albumecoverService, $state){

      _init = function() {
        _getdata();
      };

      _getdata = function(){
        $scope.artistInfo= albumecoverService.info();
        console.log($scope.artistInfo);
      };
    

      $scope.$state = $state;
      _init();
    }
})();
