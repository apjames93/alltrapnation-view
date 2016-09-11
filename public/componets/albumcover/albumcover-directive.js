(function(){
  angular
    .module('alltrapnation.albumecover.albumecover-directive', [])
    .directive('albumecover', albumecover);

    function albumecover(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/albumcover.html',
        scope: {
          album: '='
        },
        controller: albumecoverController,
        controllerAs: 'albumecoverController'
      };
      return directive;
}

  albumecoverController.$inject = ['albumecoverService', '$scope'];

  function albumecoverController(albumecoverService, $scope) {
    _init = function() {
      _getdata();
    };

    _getdata = function(){
      // $scope.artistInfo= albumecoverService.info();
      // console.log($scope.artistInfo);
    };


    _init();
  }
})();
