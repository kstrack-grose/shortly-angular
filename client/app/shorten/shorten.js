angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function () {
    console.log($scope.link.url);
    Links.addLink($scope.link)
    .then(function(resp) {
      console.log('12, then after addlink');
      return resp;
    })
    .catch(function(err) {
      console.log(14, err);
    })

    $scope.link = '';
  };
});
