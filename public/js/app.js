
(function(){
  angular
    .module('alltrapnation',[
     'ui.router',
    //  'slickCarousel',
      'ui.bootstrap',
     'alltrapnation.login',
     'alltrapnation.sidenav',
     'alltrapnation.rightportal',
     'alltrapnation.mobileNav',
     'alltrapnation.topName',
     'alltrapnation.footer',
     'alltrapnation.albumCover',
     'alltrapnation.edit',
     'alltrapnation.artistInfo'
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
        .state('artistInfo', {
          url: '/artistInfo/:id',
          templateUrl: '/templates/artistInfo.html',
          // controller: 'homeController'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/templates/about.html'
        })
        .state('admin' , {
          url: '/admin',
          templateUrl: 'templates/admin.html'
        })
         .state('edit' , {
              url: '/edit',
              templateUrl: 'templates/edit.html',
              controller: 'editController'

          });
      });
})();
