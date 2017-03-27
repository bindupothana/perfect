var app=angular.module('perfectApp',[]);
app.controller('perfectCtrl',function($scope){
	$scope.perfect=function(num){
		var sum=0;
		for(var i = 1; i < num; i++)
        {
            if(num % i == 0)
            {
                sum = sum + i;
            }
        }
 
   if (sum == num)
    $scope.result="is a Perfect Number"
       else
     $scope.result=" is Non Perfect Number"
 
   return 0;
	
	}
});