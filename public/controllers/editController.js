(function(){
  angular
    .module('alltrapnation')
    .controller('editController', editController);

    editController.$inject= ['$scope', '$location','albumCoverService',  '$state', 'editService'];

    function editController($scope, $location, albumCoverService, $state, editService){
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

      $scope.edit= function(artistName, albumName, albumImg, songName, albumId, artistId, songId){
        console.log(artistName, albumName, albumImg, songName, albumId, artistId, songId);
        editService.editInfo(artistName, albumName, albumImg, songName, albumId, artistId, songId);
      };

      $scope.deleteInfo = function(albumId, artistId, songId){
        console.log(albumId, artistId, songId);
        editService.deleteInfo(albumId, artistId, songId);
      };

      $scope.addInfo = function(artistName, albumName, albumImg, songName){
        console.log(artistName, albumName, albumImg, songName);
        editService.addInfo(artistName, albumName, albumImg, songName);
      };

      $scope.$state = $state;
      _init();
    }
})();
