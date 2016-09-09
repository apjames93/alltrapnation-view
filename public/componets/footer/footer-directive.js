(function(){
  angular
    .module('alltrapnation.footer.footer-directive', [])
    .directive('portalFooter', portalFooter);

    function portalFooter(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/portalFooter.html',
        scope: {},
      };
      return directive;
    }
})();
