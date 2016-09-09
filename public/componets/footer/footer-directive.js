(function(){
  angular
    .module('alltrapnation.footer.footer-directive', [])
    .directive('copyRight', copyRight);

    function copyRight(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/copyRight.html',
        scope: {},
      };
      return directive;
    }
})();
