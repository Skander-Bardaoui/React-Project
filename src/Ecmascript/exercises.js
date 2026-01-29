// Import the Search function from fonction.js
import { Search } from './fonction.js';

// Exercise 1: findLongestWord

const findLongestWord = (words) => {
  // Destructure the array
  const [...wordArray] = words;
  
  // Map each word to an object with 'mot' and 'longueur' properties
  const wordObjects = wordArray.map(word => ({
    mot: word,
    longueur: word.length
  }));
  
  // Use reduce to find the object with the longest length
  const longest = wordObjects.reduce((acc, current) => {
    return current.longueur > acc.longueur ? current : acc;
  });
  
  return longest;
};

// Test Exercise 1
console.log("=== Exercise 1: findLongestWord ===");
const words = ["chat", "elephant", "chien", "hippopotame"];
console.log(findLongestWord(words));
// Expected output: {mot: "hippopotame", longueur: 11}


// Exercise 2: Count Occurrences

const countOccurrences = (arrayOfArrays) => {
  // Flatten the array of arrays into a single array
  const flatArray = arrayOfArrays.flat();
  // Use reduce to count occurrences
  const result = flatArray.reduce((acc, current) => {
    // If the element exists, increment its count, otherwise set it to 1
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  
  return result;
};

// Test Exercise 2
console.log("\n=== Exercise 2: Count Occurrences ===");
const input2 = [["a", "b", "c"], ["c", "d", "f"], ["d", "f", "g"]];
console.log(countOccurrences(input2));
// Expected output: {a: 1, b: 1, c: 2, d: 2, f: 2, g: 1}


// Exercise 3: Calculate Student Grades

const calculateTotalGrades = (grades) => {
  // Step 1: Add 15 points bonus to grades < 50
  const gradesWithBonus = grades.map(grade => {
    return grade < 50 ? grade + 15 : grade;
  });
  
  // Step 2: Filter grades > 50
  const passingGrades = gradesWithBonus.filter(grade => grade > 50);
  
  // Step 3: Calculate total using reduce
  const total = passingGrades.reduce((acc, grade) => acc + grade, 0);
  
  return total;
};

// Test Exercise 3
console.log("\n=== Exercise 3: Calculate Student Grades ===");
const grades = [30, 55, 42, 78, 65, 48, 89];
console.log("Original grades:", grades);
console.log("Total after bonus and filter:", calculateTotalGrades(grades));
// Grades after bonus: [45, 55, 57, 78, 65, 63, 89]
// After filter (>50): [55, 57, 78, 65, 63, 89]
// Total: 407


// Exercise 4: Array with IDs

// Global variable to store the last ID used
let currentId = 1;

// Create initial array of objects
let Tab = [
  { name: "Ahmed", age: 20 },
  { name: "Sara", age: 22 },
  { name: "Mohamed", age: 25 }
];

// Function to add ID to each object
const addIdToObjects = (array) => {
  array.forEach(obj => {
    if (!obj.id) {
      obj.id = currentId++;
    }
  });
};

// Add IDs to existing objects
addIdToObjects(Tab);

// Function to add new entry with push
const addEntryPush = (name, age) => {
  Tab.push({
    id: currentId++,
    name: name,
    age: age
  });
};

// Function to add new entry with unshift (adds at the beginning)
const addEntryUnshift = (name, age) => {
  Tab.unshift({
    id: currentId++,
    name: name,
    age: age
  });
};

// Add new entries
addEntryPush("Fatma", 21);
addEntryPush("Ali", 23);
addEntryUnshift("Leila", 19);

// Test Exercise 4
console.log("\n=== Exercise 4: Array with IDs ===");
console.log("Complete Tab array:");
console.log(Tab);

// Test the Search function
console.log("\n=== Testing Search Function ===");
console.log("Search for ID 3:", Search(3, Tab));
console.log("Search for ID 5:", Search(5, Tab));
console.log("Search for ID 99 (not found):", Search(99, Tab));


// ============================================
// Export all functions for use in other files
// ============================================
export {
  findLongestWord,
  countOccurrences,
  calculateTotalGrades,
  Tab,
  addEntryPush,
  addEntryUnshift
};