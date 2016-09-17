(function(){
  angular
    .module('alltrapnation')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location','albumCoverService',  '$state', 'artistInfoService'];

    function homeController($scope, $location, albumCoverService, $state, artistInfoService){
      $scope.artistData = {};

      _init = function() {
        _getdata();
      };

      _getdata = function(){
        albumCoverService.getInfo()
        .then(function(data){
          $scope.artistInfo = data;
        });
      };



      // $scope.artistLookUp = function(id) {
      //   artistInfoService.getArtistInfo(id)
      //   .then(function(data){
      //     console.log("lucas", data.user);
      //     $scope.artistData.album = data.user;
      //
      //   });
      // };

      // $scope.artistData = $scope.artistLookUp();

      // $scope.$state = $state;


      _init();
    }
})();
