(function(){
    "use strinct";
    angular.module("app", [])
            .controller("Todo", Todo)
            .value("model",{
              user: "Vitaliy",
              userPhoto: "images/VZ.jpg",
              items: [
                    { "action": "Estimate...", "done": false},
                    { "action": "Create...", "done": false},
                    { "action": "Edit...", "done": true},
                    { "action": "Delete...", "done": false},
                ],
            });
    function Todo($scope, model) {
        $scope.todo = model;
        console.log($scope.todo);
    }
})();
