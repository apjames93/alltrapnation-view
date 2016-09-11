(function(){
  angular
  .module('alltrapnation.albumecover.albumecover-service', [])
  .service('albumecoverService', albumecoverService);
  albumecoverService.$inject = ['$http', '$q', '$state'];
  function albumecoverService($http, $q, $state){

      return {
        info: info
      };

      function info(){
        var deferred = $q.defer();
          var info = [{
            artist: 'Kat Kennedy',
            song: 'Song Name 1',
            img : './img/Channels-Flare-ftKatKennedy-Art.png'
          },
          {
            artist: 'Jordan Comolli',
            song: 'Song Name 2',
            img : './img/JordanComolli-Contrast.png'
          },
          {
            artist: 'James Meyers',
            song: 'Song Name 3',
            img : './img/JamesMeyers-Damage.png'
          },
          {
            artist: 'TakeOff',
            song: 'Song Name 6',
            img : './img/Meric-TakeOff.png'
          },
          {
            artist: 'JAEGER Meric',
            song: 'Song Name 7',
            img : './img/JAEGER-Meric-AfterDawn.png'
          },
          {
            artist: 'MickeyValen',
            song: 'Song Name 8',
            img : './img/MickeyValen-MeetMe-feat.Noe.png'
          }];
          return info;
        }
      }
  })();
