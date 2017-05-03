function TaskControllerFN($scope,Task,$state,$stateParams){
  //$state $stateparas to get in parametre in the url
  
    $scope.Tasks=Task.query();
    $scope.Task=new Task();
    $scope.selectIndex=null;

  $scope.selectTask=function(Task,index){
        console.log(Task);
        $scope.Task=Task;
        $scope.selectIndex=index;
	
    }
  $scope.save=function(){
        if($scope.selectIndex!=null){
            $scope.Task.$update($scope.Task.id);
        }else{
            $scope.Tasks.push($scope.Task);
            $scope.Task.$save();
        }
    }
	$scope.delete=function(){
        $scope.Tasks.splice($scope.TaskIndex,1);
        $scope.Task.$remove(function(){
            $scope.Task=new Task();
        });
    }
  $scope.reset=function(){
        $scope.Task=new Task();
  }
    
    
  $scope.get=function(){
  $scope.Task=Task.get({id:$scope.Task.id}, function(Task) {
  $scope.Task.name=$scope.Task.name;
 
 });
 }
    
 $scope.edit1 = function (id) {

 $state.go('user3',{ id: id }); //avec recuperation de 'id'
          
          console.log($scope.Task)
          console.log($scope.Task.id);
       
}
$scope.TaskById= Task.get({id:$stateParams.id});

$scope.edit = function () {
        $scope.Task=angular.copy($scope.TaskById); 
        $scope.Task.$update($scope.Task.id);     
}
$scope.detail1 = function (id) {
      $state.go('user5',{ id: id });
          
          console.log($scope.Task)
          console.log($scope.Task.id);
}
  
   }

angular
    .module("starter")
    .controller("TaskController",TaskControllerFN)