ARRAY : ---------------------
           
push() → Adds item to end and returns new length.
pop() → Removes last item and returns it.
shift() → Removes first item and returns it.
unshift() → Adds item at start and returns new length.
some() → Returns true if any item matches.
every() → Returns true if all items match.
includes() → Checks if value exists.
indexOf() → Returns index of value.
slice() → Copies part of array without mutation.
splice() → Adds/removes items with mutation.
sort() → Sorts array in place.
reverse() → Reverses array in place.
concat() → Merges arrays into new one.
flat() → Flattens nested arrays.
join() → Converts array into string.

------------------------------------------------------------------------------------------------------

1️⃣ map()
Transforms each item.
const nums = [1,2,3];
const square = nums.map(n => n * n);
console.log(square); // [1,4,9]

“map returns a new array after transforming every element.”

2️⃣ filter()
Filters items by condition.
const nums = [1,2,3,4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2,4]

“filter returns only elements that satisfy a condition.”

3️⃣ reduce()
Reduces array into one value.
const nums = [1,2,3,4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

“reduce accumulates values into a single result.”

4️⃣ forEach()
Executes function for each element.
[1,2,3].forEach(n => console.log(n));

“forEach is used for side effects, it returns nothing.”


5️⃣ find()
Find first match.
const users = [{id:1},{id:2}];
const user = users.find(u => u.id === 2);
console.log(user); // {id:2}

“find returns the first matching element.”


6️⃣ some()
Checks any match.
const nums = [1,3,5];
console.log(nums.some(n => n % 2 === 0)); // false

“some returns true if any element matches.”


7️⃣ every()
Checks all match.
const nums = [2,4,6];
console.log(nums.every(n => n % 2 === 0)); // true

👉 Interview line:
“every returns true if all elements match.”

--------------------------------------------------------------------------------------------------------------------------

OBJECT FUNCTIONS -----
           
✅ Object.keys()
Returns an array of object keys.

const user = { name: "Akash", age: 28 };
Object.keys(user);  // ["name", "age"]
👉 Use when you need all property names.

           
✅ Object.values()
Returns array of values.
Object.values(user); // ["Akash", 28]
👉 Use when you need all values.

           
✅ Object.entries()
Returns array of [key, value] pairs.
Object.entries(user); // [["name","Akash"],["age",28]]
👉 Best for looping objects.

           
✅ Object.fromEntries()
Converts entries back into object.
const arr = [["a",1],["b",2]];
Object.fromEntries(arr); // {a:1, b:2}
👉 Reverse of entries.

           
✅ Object.assign()
Copies properties into target object.
const a = {x:1};
const b = {y:2};
Object.assign(a,b); // a = {x:1, y:2}
👉 Mutates first argument.


           
✅ Spread Operator {...obj}
const newUser = {...user, city:"Delhi"};
👉 Safer clone than assign.

          
✅ Object.freeze()
Prevents modification.
Object.freeze(user);
user.age = 30; // ignored
👉 Makes object read-only.

           
✅ Object.seal()
Prevents add/remove, allows update.
Object.seal(user);
user.age = 29; // allowed
user.city = "Noida"; // not allowed


✅ hasOwnProperty()
Checks key exists.
user.hasOwnProperty("name"); // true
👉 Safer than in.

           
✅ in operator
"name" in user; // true
👉 Checks prototype also.

           
✅ delete
Removes property.
delete user.age;
👉 Mutates object.

           
✅ Object.create()
Creates object with prototype.
const person = Object.create(user);
👉 Used in inheritance.

           
✅ Object Loop Patterns (Interview Useful)
Loop using entries
Object.entries(user).forEach(([k,v]) => {
  console.log(k,v);
});


✅ Transform Object  
const prices = { a:10, b:20 };

const updated = Object.fromEntries(
  Object.entries(prices).map(([k,v]) => [k, v * 2])
);
