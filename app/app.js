(function(){
    "use strinct";
    angular.module("app", [])
            .controller("Todo", Todo)
            .factory("todoService", todoService)
            .filter("checkedItems", checkedItems)
            .run(runApp)
            .directive("taskList", taskList)
            .value("model",{
              user: "Vitaliy",
              userPhoto: "images/VZ.jpg",
            })
            .directive("newTaskForm", newTaskForm);
      // controller
    function Todo($scope, model, todoService) {
        $scope.todo = model;
        $scope.addNewItem = todoService.addNewItem;
        $scope.incompleteCount = todoService.incompleteCount;
        $scope.warningLevel = todoService.warningLevel;
        $scope.removeItem =todoService.removeItem;
    }

    // factory
    function todoService() {
      let idCounter = 0;
      function addNewItem(items, newItem){
        if(newItem && newItem.action && newItem.responsible && newItem.deadline && newItem.estimated){
          items.push({
            id: idCounter++,
            action: newItem.action,
            responsible: newItem.responsible,
            deadline: newItem.deadline,
            estimated: newItem.estimated,
            done: false
          });
          newItem.action = "";
          newItem.responsible = "";
          newItem.estimated = undefined;
          newItem.deadline = undefined;
        }
      };
        function incompleteCount (items) {
            let count = 0;

            angular.forEach(items, (item) => {
              if (!item.done) count++;
            });
          return count;
        };

        function warningLevel(items){
          return incompleteCount(items) < 3 ? "label-success" : "label-warning"
        };

        function removeItem(items, id){
          var indexToRemove;
          for(var key in items){
            if(items[key].id === id){
              indexToRemove = key;
            }
          }
          if(indexToRemove){
            items.splice(indexToRemove, 1);
          }
        };

        return {
            incompleteCount,
            warningLevel,
            addNewItem,
            removeItem
          };
      }

      // filter
      function checkedItems(){
        return function(items, showComplete){
          let resArr = [];

          angular.forEach(items, (item) => {
            if(!item.done || showComplete){
              resArr.push(item);
            }
          });
          return resArr;
        }
      };

      //run
      function runApp($http, model){
        $http
            .get("todo.json")
            .then((response) =>{
              model.items = response.data;
            })
      };

      function taskList(){
        return{
          templateUrl: "table.html"
        }
      };

      function newTaskForm(){
        return {
          restrict: 'E',
          templateUrl: 'new-task-form.html'
        };
      };
})();
