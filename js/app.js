var app=angular.module('bailey', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
   
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'js/about/aboutTempl.html',
            controller: 'aboutCtrl'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'js/services/servicesTemp.html',
            controller: 'servicesCtrl'
        })
        .state('projects', {
            url: '/projects',
            tempalteUrl: 'js/projects/projectsTempl.html',
            controller: 'projectsCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'js/contact/contactTempl.html',
            controller: 'contactCtrl'
        });
    
    $urlRouterProvider
        .otherwise('/');
    
});