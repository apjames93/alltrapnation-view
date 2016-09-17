(function(){
  angular
    .module('alltrapnation.artistInfo.artistInfo-service', [])
    .service('artistInfoService', artistInfoService);
    artistInfoService.$inject = ['$http', '$q', '$state'];

    function artistInfoService($http, $q,  $state){

      return {
        getArtistInfo: getArtistInfo
      };

      function getArtistInfo(id){
        var deferred = $q.defer();
        $http({
          method: 'get',
         url: 'http://localhost:3000/api/artist/' + id
       }).then(function successCallback(response) {
         console.log('********',response.data);
         deferred.resolve(response.data);
        }, function errorCallback(err) {
        deferred.reject(err);
      });
        return deferred.promise;
    }

    }
})();
