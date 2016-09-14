(function(){
  angular
    .module('alltrapnation.albumCover.albumCover-directive', [])
    .directive('albumCover', albumCover);

    function albumCover(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/albumcover.html',
        scope: {},
        controller: homeController,
        controllerAs: 'homeController'
      };
      return directive;
}

  albumCoverController.$inject = ['albumCoverService', '$scope'];

  function albumCoverController(albumCoverService, $scope) {

    _init = function() {
    };

    _init();
  }
})();
