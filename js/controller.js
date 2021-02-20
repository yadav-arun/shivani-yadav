var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $timeout,$http) {
$scope.tickInterval = 1000 //ms
var tick = function() {
var a = new Date(1995 , 09 , 01);
var b = Date.now() // get the current time
var diff = ((b - a.getTime())/1000).toFixed();
$scope.abc = diff;
$timeout(tick, $scope.tickInterval); // reset the timer
}
$timeout(tick, $scope.tickInterval);
$scope.a = [];
$scope.b = [];
$scope.c = [];
var index = 0;
for (var i = 0; i < 28; i++) {
  var rand_numb = Math.floor(Math.random() * 38) + 2;
      if (index <= 9) {
        $scope.a.push(rand_numb);
      }
      else if (index > 9 && index <=18) {
        $scope.b.push(rand_numb);
      }
      else {
        $scope.c.push(rand_numb);
      }
      index++;


  }
$scope.rand_1 = Math.floor(Math.random() * 38) + 2;
$scope.tota = [];
$scope.totb = [];
$scope.totc = [];
for (var i = 0; i < 87; i++) {
        $scope.tota.push(i+1);
        $scope.totb.push(i+87);
        $scope.totc.push(i+174);
  }
});
