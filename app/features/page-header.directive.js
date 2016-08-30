(function(){
  "use strinct";
  angular.module("feature")
          .directive("pageHeader", pageHeader);

          function pageHeader(){
            return {
              restrict: 'E',
              templateUrl: 'templates/page-header.html'
            };
          };
})()
