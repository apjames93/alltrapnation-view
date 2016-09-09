(function(){
  angular
  .module('alltrapnation.albumecover.albumecover-service', [])
  .service('albumecoverService', albumecoverService);
  albumecoverService.$inject = [];
  function albumecoverService(){

      return {
        data: data
      };

      function data(){
        console.log('hit');
      }


    }
})();
