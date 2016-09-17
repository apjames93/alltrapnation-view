(function(){
  angular
  .module('alltrapnation.albumCover.albumCover-service', [])
  .service('albumCoverService', albumCoverService);
  albumCoverService.$inject = ['$http', '$q', '$state'];
      function albumCoverService($http, $q, $state){

          return {
            getInfo: getInfo,
            getAlbumInfo: getAlbumInfo
          };

        function getInfo(){
          var deferred = $q.defer();
          $http({
            method: 'get',
           url: 'http://localhost:3000/api/artist'
         }).then(function successCallback(response) {
          deferred.resolve(response.data.user);
          }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
      }
        function getAlbumInfo(){
          var deferred = $q.defer();
          $http({
            method: 'get',
            url: 'http://localhost:3000/api/artist/album'
            }).then(function successCallback(response) {
             deferred.resolve(response.data.user);
            }, function errorCallback(err) {
             deferred.reject(err);
            });
          return deferred.promise;
        }


      }
})();
