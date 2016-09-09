(function(){
  angular
    .module('alltrapnation.sidenav.sidenav-directive', [])
    .directive('sideNav', sideNav);

    function sideNav(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        scope: {},
      };
      return directive;
    }
})();
