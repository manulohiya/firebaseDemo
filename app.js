// Add Firebase as a dependancy
angular.module('firebaseApp', ['ngRoute', 'firebase'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'MainCtrl'
                
               
            })
            .otherwise({
                redirectTo: '/'
            })

}])

// Controller 
.controller('MainCtrl', function($scope, $firebaseArray){

    var ref = new Firebase("https://sizzling-heat-1765.firebaseio.com/messages");
   
   // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };

})



;