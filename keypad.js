// var pry = require("pryjs");


var Keypad = function(stepsString){
  this.stepsString = stepsString;
  this.steps = [];
  this.breakDownStepsString();
  this.keyRouting = new Map();
  this.key1 = new Map();
  this.key2 = new Map();
  this.key3 = new Map();
  this.key4 = new Map();
  this.key5 = new Map();
  this.key6 = new Map();
  this.key7 = new Map();
  this.key8 = new Map();
  this.key9 = new Map();
  this.setupkeyRouting();
};

Keypad.prototype = {

  breakDownStepsString: function(){
    this.steps = this.stepsString.split("\n");
  },

  setupkeyRouting: function(){
    this.key1.set("D", "4");
    this.key1.set("R", "2");

    this.key2.set("D", "5");
    this.key2.set("L", "1");
    this.key2.set("R", "3");

    this.key3.set("D", "6");
    this.key3.set("L", "2");

    this.key4.set("U", "1");
    this.key4.set("D", "7");
    this.key4.set("R", "5");

    this.key5.set("U", "2");
    this.key5.set("D", "8");
    this.key5.set("L", "4");
    this.key5.set("R", "6");

    this.key6.set("U", "3");
    this.key6.set("D", "9");
    this.key6.set("L", "5");

    this.key7.set("U", "4");
    this.key7.set("R", "8");

    this.key8.set("U", "5");
    this.key8.set("L", "7");
    this.key8.set("R", "9");

    this.key9.set("U", "6");
    this.key9.set("L", "8");

    this.keyRouting.set("1", this.key1);
    this.keyRouting.set("2", this.key2);
    this.keyRouting.set("3", this.key3);
    this.keyRouting.set("4", this.key4);
    this.keyRouting.set("5", this.key5);
    this.keyRouting.set("6", this.key6);
    this.keyRouting.set("7", this.key7);
    this.keyRouting.set("8", this.key8);
    this.keyRouting.set("9", this.key9);
    
  }

};

module.exports = Keypad;
