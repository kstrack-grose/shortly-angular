angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, $http, Links) {
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

  $scope.redirect = function (url) {
    var code = '/api/links/' + url;
    console.log(22, code);
    // $location.path(code);
    return $http({
      method: 'OPTIONS',
      url: code,
      data: url
    })
    .then(function(res) {
      console.log(27, code, res);
      return $http({
        method: 'GET',
        url: code,
        data: url
      })
      .then(function(res) {
        console.log(35, res);
      })
      .catch(function(err) {
        console.log(38, err);
      });
    })
    .catch(function(err) {
      console.log(42, err);
    });
  };

});
