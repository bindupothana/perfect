var app=angular.module('perfectApp',[]);
app.controller('perfectCtrl',function($scope){
	$scope.perfect=function(num){
		var i;
		var sum;
		 while (i < num) {
      if (num % i == 0) {
         sum = sum + i;
      }
      i++;
   }
 
   if (sum == num)
    $scope.result="is a Perfect Number"
       else
     $scope.result=" is Non Perfect Number"
 
   return 0;
	
	}
});