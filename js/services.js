/**
 * Created by Raja on 12/11/2015.
 */

angular.module('movieApp.services',[])
.factory('Movie', function($resource){
    return $resource("http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id",{id:'@_id'}, {
        update:{
            method:'PUT'
        }
    });
})