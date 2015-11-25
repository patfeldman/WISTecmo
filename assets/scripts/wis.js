(function () {
    'use strict';

    var mainApp = angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate', 'ngTouch'])
            .config(config)
            .run(run);


    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function config($stateProvider, $urlRouterProvider, $httpProvider){
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        delete $httpProvider.defaults.headers.common["authorization"];

        $stateProvider
            .state('schedule', {
                url: '/schedule',
                title: 'WIS Weekly Schedule',
                desc: 'This is a schedule of all games for this week.',
                views: {
                    '': {
                        templateUrl: 'app/components/schedule/schedule.view.html',
                        controller: 'ScheduleController',
                        controllerAs: 'vm'
                    }                    
                }
            })
            .state('scores', {
                url: '/scores',
                title: 'WIS Scoreboard',
                desc: 'Updated scores',
                views: {
                    '': {
                        templateUrl: 'app/components/scores/scores.view.html',
                        controller: 'SearchController',
                        controllerAs: 'vm'
                    }
                    ,
                    'topMenu@search': {
                        templateUrl: 'app/components/menus/menu_main/menu_main_top.view.html',
                        controller: 'MenuMainTopController',
                        controllerAs: 'vm'
                    }
                    ,
                    'bottomMenu@search': {
                        templateUrl: 'app/components/menus/menu_main/menu_main_bottom.view.html',
                        controller: 'MenuMainBottomController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('teams', {
                url: '/teams',
                title: 'All Teams',
                desc: 'All Teams',
                views: {
                    '': {
                        templateUrl: 'app/components/teams/teams.view.html',
                        controller: 'TeamsController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('team', {
                url: '/team/:teamId',
                title: 'Team Profile',
                desc: 'Team Profile',
                views: {
                    '': {
                        templateUrl: 'app/components/team/team.view.html',
                        controller: 'TeamController',
                        controllerAs: 'vm'
                    }
                }
            })
			.state('user', {
				url: '/user',
				title: 'User Authentication',
				desc: 'Enter your user name below to get started.',
				views: {
					'': {
						templateUrl: 'app/components/user/user.view.html',
						controller: 'UserController',
						controllerAs: 'vm'
					}
				}
			})
        //.state('login', {
            //    url: '/login',
            //    title: 'Login',
            //    backState:'main',
            //    views: {
            //        '': {
            //            controller: 'LoginController',
            //            templateUrl: 'app/components/login/login.view.html',
            //            controllerAs: 'vm'
            //        },
            //        'topMenu@login':{
            //            templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
            //            controller:'Menu1Controller',
            //            controllerAs: 'vm'
            //        }

            //    }
            //})
        $urlRouterProvider.otherwise('/teams');
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', '$state'];
    function run($rootScope, $location, $cookieStore, $http, $state) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }


        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            // redirect to login page if not logged in and trying to access a restricted page
            //var restrictedPage = $.inArray(toState.name, ['login', 'register', 'summary', ]) === -1;
            //var loginSkipPage = $.inArray(toState.name, ['summary']) != -1;
            //var loggedIn = $rootScope.globals.currentUser;
            //if (restrictedPage && !loggedIn) {
            //    e.preventDefault();
            //    $state.transitionTo('summary');
            //} else if(loginSkipPage && loggedIn){
            //    e.preventDefault();
            //    $state.transitionTo('home');
            //}
        });
    }
})();