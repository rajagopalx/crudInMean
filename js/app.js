/**
 * Created by Raja on 12/11/2015.
 */
var movieApp=angular.module('movieApp',['ui.router', 'ngResource', 'movieApp.controllers','movieApp.services']);
movieApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/movies');
    $stateProvider
        .state('movies', {
            url:"/movies",
            templateUrl:"views/movies.html",
            controller:"movieListController"
        })
        .state('viewMovie', {
            url:"/movies/:id/view",
            templateUrl:"views/view-movie.html",
            controller:"movieViewController"
        })
        .state('editMovie', {
            url:"/movies/:id/edit",
            templateUrl:"views/edit-movie.html",
            controller:"movieEditController"
        })
        .state('newMovie', {
            url:"/movies/new",
            templateUrl:"views/new-movie.html",
            controller:"movieCreateController"
        })
});