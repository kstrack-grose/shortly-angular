angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function (isValid) {
    $scope.link.shortLink = '/api/links/' + $scope.link.code;
    if (isValid) {
      Links.addLink($scope.link)
      .then(function(resp) {
        $location.path('/links');
        return resp;
      })
      .catch(function(err) {
        console.log(14, err);
      })      
    } else {
      console.log('Error: input for shorten form invalid');
    }
    $scope.link = '';
  };
});
