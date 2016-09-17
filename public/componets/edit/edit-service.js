(function(){
  angular
    .module('alltrapnation.edit.edit-service', [])
    .service('editService', editService);
    editService.$inject = ['$http', '$q', 'loginService', '$state'];

    function editService($http, $q, loginService, $state){

      return {
        editInfo: editInfo,
        deleteInfo: deleteInfo,
        addInfo: addInfo
      };

      function getEverything(){
        var defferred = $q.defer();
        $http({
          method: 'get',
          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          url: 'http://localhost:3000/api/edit'
        })
      }
      function editInfo(artistName, albumName, albumImg, songName, albumId, artistId, songId){
        var deferred = $q.defer();
        $http({
          method: 'put',
          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          params: {
            artistName: artistName,
            albumName:albumName,
            songName: songName,
            albumImg: albumImg,
            albumId: albumId,
            artistId: artistId,
            songId: songId
          },
          url: 'http://localhost:3000/api/artist/'
        }).then(function successCallback(response) {

          deferred.resolve(response);
          $state.go($state.$current, null, { reload: true });
        }, function errorCallback(err) {

          deferred.reject(err);
        });
          return deferred.promise;
      }

      function deleteInfo(albumId, artistId, songId){
        var deferred = $q.defer();
        $http({
          method: 'delete',
          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          params: {
            albumId: albumId,
            artistId: artistId,
            songId: songId
          },
          url: 'http://localhost:3000/api/artist/'
        }).then(function successCallback(response) {

          deferred.resolve(response);
          $state.go($state.$current, null, { reload: true });
        }, function errorCallback(err) {

          deferred.reject(err);
        });
          return deferred.promise;
      }
      function addInfo(artistName, albumName, albumImg, songName){
        var deferred = $q.defer();
        $http({
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          params: {
          artistName: artistName,
          albumName: albumName,
           albumImg:albumImg,
           songName: songName
          },
          url: 'http://localhost:3000/api/artist/'
        }).then(function successCallback(response) {

          deferred.resolve(response);
          $state.go($state.$current, null, { reload: true });
        }, function errorCallback(err) {

          deferred.reject(err);
        });
          return deferred.promise;
      }

    }
})();
