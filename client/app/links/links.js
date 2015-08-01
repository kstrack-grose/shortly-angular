angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };
  $scope.getLinks = function () {
    Links.data().then(function(result) {
      console.log("this is line 10 " , result);
      $scope.data.links = result.data;
      console.log(12, $scope.data.links);
    }).catch(function(err) {
      console.log(12, err);
    });
  };

  $scope.getLinks();
});
