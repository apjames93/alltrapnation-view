(function(){
  angular
    .module('alltrapnation.rightportal.rightportal-directive', [])
    .directive('rightPortal', rightPortal);

    function rightPortal(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/rightportal.html',
        scope: {},
      };
      return directive;
    }
})();
