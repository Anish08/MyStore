var app = angular.module('myapp', []);
var nameapp = app.controller('namecntrl', function ($scope, $http) {
    $scope.product = [];
    $scope.cart = [];
    $http.get('../Data/Products.txt').success(function (data) {
        $scope.products = data;
        Console.log($scope.products);
    })
});
