const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  
  const jsonString = JSON.stringify(person);
  console.log(jsonString); // Output: {"name":"John Doe","age":30,"city":"New York"}

  
  // Array
  const numbers = [1, 2, 3, 4, 5];
const jsonString1 = JSON.stringify(numbers);
console.log(jsonString1); // Output: [1,2,3,4,5]

// Nested Object 

const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  };
  const person2 = {
    name: 'Jane Smith',
    age: 25,
    address: address
  };
  const jsonString3 = JSON.stringify(person2, null, 2); // Indented for readability
  console.log(jsonString3);
  // Output:
  // {
  //   "name": "Jane Smith",
  //   "age": 25,
  //   "address": {
  //     "street": "123 Main St",
  //     "city": "Anytown",
  //     "state": "CA"
  //   }
  // }
  

  // Date
  const dateObj = new Date();
const jsonString4 = JSON.stringify(dateObj);
console.log(jsonString4); // Output: "2024-07-29T10:37:04.123Z" (example format)

// Replacer


  
  const jsonString5 = JSON.stringify(person, ['name', 'age']);
  console.log(jsonString5); // Output: {"name":"John Doe","age":30}


  // Handling function undefined and symbol
  const obj = {
    name: 'Alice',
    greet: function() { console.log('Hello'); },
    undefinedValue: undefined,
    symbolKey: Symbol('mySymbol')
  };
  
  const jsonString6 = JSON.stringify(obj);
  console.log(jsonString6); // Output: {"name":"Alice"} (function,undefined and symbol omitted)
  
  
