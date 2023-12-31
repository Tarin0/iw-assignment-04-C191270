// Import NPM Package
var _ = require('underscore');

// Call appropriate function from the NPM package to solve the assignment
var languages = ["Java", "Javascript", "Typescript"];


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
var containsJava = _.contains(languages, "Java");


// First Answer 
console.log("It contains 'Java':", containsJava);



/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
var containsCpp = _.contains(languages, "C++");

// Second Answer
console.log("It contains 'C++':", containsCpp);