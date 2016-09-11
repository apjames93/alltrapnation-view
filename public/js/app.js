
(function(){
  angular
    .module('alltrapnation',[
     'ui.router',
     'ui.bootstrap',
     'alltrapnation.sidenav',
     'alltrapnation.rightportal',
     'alltrapnation.mobileNav',
     'alltrapnation.topName',
     'alltrapnation.footer',
     'alltrapnation.albumecover'
   ])

   .run([
       "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
         $rootScope.$state = $state;
         return $rootScope.$stateParams = $stateParams;
       }
     ])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: '/templates/home.html',
          controller: 'homeController'
        })
        .state('Releases', {
          url: '/Releases',
          templateUrl: '/templates/art.html',
          controller: 'homeController'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/templates/about.html'
        });
      });
})();
