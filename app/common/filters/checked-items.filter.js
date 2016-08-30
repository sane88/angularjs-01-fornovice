(function(){
  angular.module("filter", [])
          .filter("checkedItems", checkedItems);

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
})()
