const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arg) {
      return 4*arg;
    },

    map: function(array,callBack) {
      let result=[];
        for(let i=0;i<array.length;i++){
          array[i]=callback(array[i]);
          result.push(array[i]);
        }
        return result;
      

    },
/*
    reduce: function() {

    },

    functions: function() {

    },


  }*/
})()

fi.libraryMethod()
