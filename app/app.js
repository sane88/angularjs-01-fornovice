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
            });
      // controller
    function Todo($scope, model, todoService) {
        $scope.todo = model;
        $scope.addNewItem = todoService.addNewItem;
        $scope.incompleteCount = todoService.incompleteCount;
        $scope.warningLevel = todoService.warningLevel;
    }

    // factory
    function todoService() {
      function addNewItem(items, newItem){
        if(newItem && newItem.action){
          items.push({
            action: newItem.action,
            done: false
          });
          newItem.action = "";
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

        return {
            incompleteCount,
            warningLevel,
            addNewItem
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
})();
