(function(){
  angular
    .module('alltrapnation.edit.edit-directive', [])
    .directive('edit', edit);

    function edit(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/editInfo.html',
        scope: {
          artist: '='
        },
        controller: editInfoController,
        controllerAs: 'editInfoController'
      };
      return directive;
}

  editInfoController.$inject = ['editService', '$scope'];

  function editInfoController(editService, $scope) {

    _init = function() {
    };


    _init();
  }
})();
