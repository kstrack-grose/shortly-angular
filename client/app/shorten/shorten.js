angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function () {
    Links.addLink($scope.link)
      .then(function (token) {
        // $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
        console.log(11, token);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
