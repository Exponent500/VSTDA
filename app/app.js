//create Angular module
var myApp = angular.module('VerySimpleToDoApp', []); 

//create Angular controller and inject scope/http into it
myApp.controller('MainController', ['$scope', function($scope){ 

  //initializes sorting of table at page load so that new items added are placed below the last item added
  $scope.sortType = '';
  $scope.sortSubType = '';

  // initializes the state of the todolist sorting filters
  $scope.sortByHighestPriorityNotSelected = true;
  $scope.sortByLowestPriorityNotSelected = true;
  $scope.sortAlphabeticallyNotSelected = true;
 
  $scope.todoList = [];

  //sets initial value shown for Priority Select menu
  $scope.priority = '1';

  //creates a new todo list item and adds it to the todoList array
  $scope.addTodo = function(){

    var todoListItem = {
      priority: $scope.priority,
      description: $scope.description
    };

    //pushes new todoListItem to todoList array
    $scope.todoList.push(todoListItem);
  };

  //sorts list by highest priority, then alphabetically
  $scope.orderByHighestPriority = function(){
    $scope.sortType = "priority";
    $scope.sortSubType = "description";
    $scope.sortByLowestPriorityNotSelected = true;
    $scope.sortByHighestPriorityNotSelected = false;
    $scope.sortAlphabeticallyNotSelected = true;
  };

  //sorts list by lowest priority, then alphabetically
  $scope.orderByLowestPriority = function(){
    $scope.sortType = "-priority";
    $scope.sortSubType ="description";
    $scope.sortByLowestPriorityNotSelected = false;
    $scope.sortByHighestPriorityNotSelected = true;
    $scope.sortAlphabeticallyNotSelected = true;
  };

  //sorts list alphabetically, then by highestpriority
  $scope.orderAlphabetically = function(){
    $scope.sortType = "description";
    $scope.sortSubType = "priority";
    $scope.sortByLowestPriorityNotSelected = true;
    $scope.sortByHighestPriorityNotSelected = true;
    $scope.sortAlphabeticallyNotSelected = false;
  };

}]);


