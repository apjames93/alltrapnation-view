
(function(){
  angular
    .module('alltrapnation',[
     'ui.router',
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
          templateUrl: '/templates/home.html'
          // controller: 'homeController'
        })
        .state('art', {
          url: '/art',
          templateUrl: '/templates/art.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/templates/about.html'
        });
      });
})();
