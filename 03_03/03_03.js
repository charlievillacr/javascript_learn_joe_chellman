var animal = {
    'genus' : 'bird',
    'species' : 'raven',
    'callType' : 'squawky',
    'quote' : 'Nevermore',
    'maxOffspring' : 5,
    'noisy' : true,
    'deadly' : false
};
animal;

var animal2 = animal;
animal2;

animal2.genus = 'bear';
animal2;
animal;

var animal2 = {
    'genus' : 'bird',
    'species' : 'raven',
    'callType' : 'squawky',
    'quote' : 'Nevermore',
    'maxOffspring' : 5,
    'noisy' : true,
    'deadly' : false
};

animal2.genus = 'bear';
animal2;
animal;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object