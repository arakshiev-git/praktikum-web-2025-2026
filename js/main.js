import {
  findMaxValueInArray,
  findMinValueInArray,
  findAverageValueInArray
} from "./utils.js";

const arr1 = [12, 17, 527, -15, 10, 2];

console.log("Max:", findMaxValueInArray(arr1));
console.log("Min:", findMinValueInArray(arr1));
console.log("Average:", findAverageValueInArray(arr1));

const person = {
  firstName: "Alexander",
  lastName: "Rakshiev",
  age: 37
};

const personAddress = {
  city: "Plovdiv",
  street: "Veliko Tarnovo",
  postalCode: "4000"
};

const mergedPerson = { ...person, ...personAddress };
console.log("Merged person:", mergedPerson);


async function loadPostsAndLogTitlesForUser3() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error(`Posts request failed: ${res.status}`);

    const posts = await res.json();

    const titlesForUser3 = posts
      .filter(p => p.userId === 3)
      .map(p => p.title);

    console.log("Titles for posts with userId=3:", titlesForUser3);
  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

loadPostsAndLogTitlesForUser3();


async function loadUsersAndLogSortedNames() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(`Users request failed: ${res.status}`);

    const users = await res.json();

    const sortedNames = users
      .map(u => u.name)
      .sort((a, b) => a.localeCompare(b));

    console.log("Sorted user names:", sortedNames);
  } catch (err) {
    console.error("Error loading users:", err);
  }
}

loadUsersAndLogSortedNames();
