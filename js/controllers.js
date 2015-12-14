/**
 * Created by Raja on 12/11/2015.
 */

angular.module('movieApp.controllers', [])

    .controller('movieListController', function ($scope,$state,Movie) {
            $scope.movies=Movie.query()
            $scope.deleteMovie=function(movie){
                movie.$delete(function(){
                    window.location.href='';
                });
            }

    })

    .controller('movieViewController', function ($scope,$stateParams,Movie) {
        $scope.movie=Movie.get({id:$stateParams.id});
    })

    .controller('movieEditController', function ($scope,$stateParams,Movie, $state) {
        $scope.movie=Movie.get({id:$stateParams.id});
        $scope.updateMovie=function(){
            $scope.movie.$update(function(){
                $state.go('movies')
            });
        }
    })

    .controller('movieCreateController', function ($scope,$state,Movie) {

        $scope.movie=new Movie();
        $scope.addMovie= function(){
            $scope.movie.$save(function(){
                    $state.go('movies');
            });
        }
    });
