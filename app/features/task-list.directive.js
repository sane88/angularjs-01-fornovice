(function(){
  "use strinct";
  angular.module("feature")
          .directive("taskList", taskList);

  function taskList(){
    return{
      templateUrl: "templates/table.html"
    }
  };
})()
