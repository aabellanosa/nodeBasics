var events = require("events");
var util = require("util");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var christian = new Person("Christian");
var angel = new Person("Angel");
var marianne = new Person("Marianne");
var people = [christian, angel, marianne];

people.forEach(function (person) {
  person.on("speak", function (msg) {
    console.log(person.name + " said:" + msg);
  });
});

angel.emit("speak", "hello folks");
