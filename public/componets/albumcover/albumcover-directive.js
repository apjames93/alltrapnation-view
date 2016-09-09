(function(){
  angular
    .module('alltrapnation.albumecover.albumecover-directive', [])
    .directive('albumecover', albumecover);

    function albumecover(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/albumcover.html',
        scope: {
          data : '='
        },
        controller: albumecoverController,
        controllerAs: 'albumecoverController'
      };
      return directive;
}

  albumecoverController.$inject = ['albumecoverService'];

  function albumecoverController(albumecoverService) {
  }
})();
