
(function(){
  angular
    .module('alltrapnation',[
     'ui.router'
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
        });
      });
})();
