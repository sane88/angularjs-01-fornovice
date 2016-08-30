(function(){
  "use strict";
  angular.module("service", [])
          .factory("todoService", todoService);

  function todoService() {

    function addNewItem(items, newItem){
      if(newItem && newItem.action && newItem.responsible && newItem.deadline && newItem.estimated){
        items.push({

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

      function removeItem(items, item){
          items.splice(items.indexOf(item), 1);
      };

      function removeAllCompleted(items){
        var filtered = items.filter(item => !item.done);
        items.splice(0, items.length);
        filtered.forEach(item => items.push(item));
      };

      function sortBy($scope){
        return function(propName){
          $scope.reverse = ($scope.propName === propName) ? !$scope.reverse : false;
          $scope.propName = propName;
        }
      }
      return {
          incompleteCount,
          warningLevel,
          addNewItem,
          removeItem,
          removeAllCompleted,
          sortBy
        };
    }
})()
