var Test = function(){

};

Test.prototype = {

  parent: function(){
    var dummyCollection = [1];
    dummyCollection.forEach(function(item){
      this.child();
    }).bind(this);
  },

  child: function(){
    console.log("child called");
  }
};

test = new Test();
test.parent();
