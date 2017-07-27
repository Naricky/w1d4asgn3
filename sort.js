var array = [10, 2, 5, 1, 9];
array.sort(function(a,b){
  return a - b
});

// Q to myself: how does it go through all the combination of "a-b?" Sort, then go through a-b?

console.log(array)

//Advanced sorting

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function (a,b) {
  var idA = a.id
  var idB = b.id
  if ( idA < idB) {
    return -1;
  }
  if ( idA > idB) {
    return 1;
  }

  return 0;

});

// sort by value

students.sort(function (a, b) {
  return a.age - b.age;
});

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(students)