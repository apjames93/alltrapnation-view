(function(){
  angular
    .module('alltrapnation.artistInfo.artistInfo-directive', [])
    .directive('artistDirective', artistDirective);

    function artistDirective(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/artist-Info-directive.html',
        // scope: {},
        controller: artistInfoController,
        controllerAs: 'artistInfoController'

      };
      return directive;
}

  artistInfoController.$inject = ['artistInfoService', '$scope', '$stateParams'];

  function artistInfoController(artistInfoService, $scope, $stateParams) {

    _init = function() {
      _artistLookUp($stateParams.id);
    };

          _artistLookUp = function(id) {
            artistInfoService.getArtistInfo(id)
            .then(function(data){
              console.log("lucas", data.user);
              $scope.artistData = data.user;
            });
          };

    _init();
  }
})();
