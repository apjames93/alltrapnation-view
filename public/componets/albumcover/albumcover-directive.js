(function(){
  angular
    .module('alltrapnation.albumCover.albumCover-directive', [])
    .directive('albumCover', albumCover);

    function albumCover(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/albumcover.html',
        scope: {},
        controller: albumCoverController,
        controllerAs: 'albumCoverController'
      };
      return directive;
}

  albumCoverController.$inject = ['albumCoverService', '$scope'];

  function albumCoverController(albumCoverService, $scope) {

    _init = function() {
      _getdata();
    };


    _getdata = function(){
      albumCoverService.getAlbumInfo()
      .then(function(data){
        $scope.albumInfo = data;
      });

    };

    _init();
  }
})();
