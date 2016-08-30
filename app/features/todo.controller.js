(function(){
  "use strinct";
  angular.module("feature")
          .controller("Todo", Todo);

          // controller
          function Todo($scope, model, todoService) {
            $scope.todo = model;
            $scope.addNewItem = todoService.addNewItem;
            $scope.incompleteCount = todoService.incompleteCount;
            $scope.warningLevel = todoService.warningLevel;
            $scope.removeItem =todoService.removeItem;
            $scope.removeAllCompleted = todoService.removeAllCompleted;
            $scope.sortBy = todoService.sortBy($scope);
          }
})()
