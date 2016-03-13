
        var app = angular.module('myapp', []);
var nameapp = app.controller('namecntrl', function ($scope, $http) {
    $scope.products = [];
   
    $http.get('../Data/Products.txt').success(function (data) {
        $scope.products = data;
        $scope.func = function (id) {
            $scope.cart = [];
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].Id == id) {
                    $scope.cart.push($scope.products[i]);
                    console.log($scope.cart);
                }
            }
        }
    })          
});

