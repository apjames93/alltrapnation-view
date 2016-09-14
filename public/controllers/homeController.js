(function(){
  angular
    .module('alltrapnation')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location','albumCoverService',  '$state'];

    function homeController($scope, $location, albumCoverService, $state){

      _init = function() {
        _getdata();
      };

      _getdata = function(){
        albumCoverService.getInfo()
        .then(function(data){
          console.log(data);
          $scope.artistInfo = data;
        });
      };

      $scope.artistLookUp = function(id, artist, img ){


      };

      $scope.testname = function(name){
        // console.log(name);
        $scope.slideName = name;
        return $scope.slideName;
      };

      $scope.slideInfo = function(artistName, songName, albumName){
        $scope.artistName = artistName;
        $scope.songName = songName;
        $scope.albumName = albumName;

      };


      $scope.$state = $state;
      _init();
    }
})();
