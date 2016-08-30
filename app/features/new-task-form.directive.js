(function(){
  "use strinct";
  angular.module("feature")
          .directive("newTaskForm", newTaskForm);

          function newTaskForm(){
            return {
              restrict: 'E',
              templateUrl: 'templates/new-task-form.html'
            };
          };
})()
