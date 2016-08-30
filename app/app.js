(function(){
    "use strinct";
    angular.module("app", ["common", "feature"])
            .run(runApp)
            .value("model",{
              user: "Vitaliy",
              userPhoto: "images/VZ.jpg",
            });
      //run
      function runApp($http, model){
        $http
            .get("data/todo.json")
            .then((response) =>{
              model.items = response.data;
            })
      };


})();
