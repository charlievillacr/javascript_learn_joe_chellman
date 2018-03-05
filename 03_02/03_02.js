var animal = {
    'genus' : 'bird',
    'species' : 'raven',
    'callType' : 'squawky',
    'quote' : 'Nevermore',
    'maxOffspring' : 5,
    'noisy' : true,
    'deadly' : false
};

animal.quote;

animal."quote"; // this does not work

animal["quote"];

animal.color = "black";

animal;

animal["where it lives"] = "in a tree";
animal.whereItLives = "in a tree";
animal.whereItLives;
animal['whereItLives'];

delete animal.color;
animal;

var emptyObject = {};
emptyObject.isItReallyEmpty = false;
emptyObject;

animal;


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object