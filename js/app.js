var app=angular.module('bailey', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider
        .otherwise('/');
    
    $stateProvider
        .state('home', {
           url: '/',
           controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'js/about/aboutTmpl.html',
            //controller: 'aboutCtrl'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'js/services/servicesTmpl.html',
            //controller: 'servicesCtrl'
        })
        .state('projects', {
            url: '/projects',
            tempalteUrl: 'js/projects/projectsTmpl.html',
            //controller: 'projectsCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'js/contact/contactsTmpl.html',
            //controller: 'contactsCtrl'
        });
    
    
    
});