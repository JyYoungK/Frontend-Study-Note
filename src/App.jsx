import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  var string = "Welcome to this Javascript Guide!";
  var splitWord = string.split(" ");
  var q1Answer = [];
  for (let i = 0; i < splitWord.length; i++) {
    var reversedString = splitWord[i].split("").reverse().join("");
    q1Answer.push(reversedString + " ");
  }

  var q2Answer = "";
  for (let i = string.length; i >= 0; i--) {
    q2Answer += string.charAt(i);
  }

  var arrayList1 = ["abc", "def"];
  var q3Answer1;
  if (Object.prototype.toString.call(arrayList1) === "[object Array]") {
    q3Answer1 = "true";
  } else {
    q3Answer1 = "false";
  }
  var arrayList2 = "abc";
  var q3Answer2;

  if (Array.isArray(arrayList2)) {
    q3Answer2 = "true";
  } else {
    q3Answer2 = "false";
  }

  var q4Answer1;
  var q4Number = 0;
  if (typeof q4Number === "number") {
    q4Answer1 = "true";
  } else {
    q4Answer1 = "false";
  }

  var q4Answer2;
  if (q4Number % 1 === 0) {
    q4Answer2 = "true";
  } else {
    q4Answer2 = "false";
  }

  var q5Answer1 = [];
  var q5Array1 = [1, 2, 3, 4, 5];
  var q5Number1 = 3;
  var q5Number2 = 2;
  for (let i = 0; i < q5Number1; i++) {
    q5Answer1.push(q5Array1[i]);
  }
  for (let i = 0; i < q5Number2; i++) {
    q5Array1.pop(i);
  }

  var q6Answer = [1, 2, 3, 4, 5];

  q6Answer += "," + q6Answer;

  var q6Answer2 = ["1", "2", "3", "4", "5"];

  function duplicate(arr) {
    return q6Answer2.concat(arr);
  }

  function createBase(baseNumber) {
    return function (N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    };
  }

  var addSix = createBase(6);

  function fizzbuzz(int) {
    let result = "";
    for (let i = 1; i < int; i++) {
      let word = "";
      if (i % 3 == 0) {
        word += "Fizz";
      }
      if (i % 5 == 0) {
        word += "Buzz";
      }
      result += word || i;
      result += " ";
    }
    return result;
  }

  function anagram(word1, word2) {
    if (
      word1.toLowerCase().split("").sort().join("") ==
      word2.toLowerCase().split("").sort().join("")
    ) {
      return "true";
    } else {
      return "false";
    }
  }

  function counter() {
    var sum = 0;
    return {
      add: function (int) {
        sum += int;
      },
      retrieve: function () {
        return sum;
      },
    };
  }

  var if2 = counter();

  function secondLargest(arr) {
    let largest = 0;
    let secondL = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= largest) {
        secondL = largest;
        largest = arr[i];
      } else if (arr[i] >= secondL) {
        secondL = arr[i];
      }
    }
    return secondL;
  }

  let secondLargest2 = [29, 3, 15, 1, 40, 29, 33, 41, 82, 92, 12, 24, 87]
    .sort()
    .reverse()[1];

  const user = new Object();

  return (
    <div className="App">
      <div className="underline">Q1: Reverse each word in setence </div>
      {string}
      <div>{q1Answer}</div>
      <div className="mt-5 underline">
        Q2: Reverse each word using For Loop{" "}
      </div>
      {string}
      <div>{q2Answer}</div>
      <div className="mt-5 underline">
        Q3: How to check if it's an array or not?
      </div>
      <div>["abc", "def"]: {q3Answer1}</div>
      <div>"abc": {q3Answer2}</div>
      <div className="mt-5 underline">
        Q4: How to check if number is an integer?
      </div>
      <div>1: {q4Answer1}</div>
      <div>2: {q4Answer2}</div>
      <div className="mt-5 underline">Q5: Implement enqueue and dequeue</div>
      <div>([1,2,3,4,5], 3): {q5Answer1}</div>
      <div>([1,2,3,4,5], 2): {q5Array1}</div>
      <div className="mt-5 underline">Q6: Duplicate this</div>
      <div>[1,2,3,4,5] into [1,2,3,4,5,1,2,3,4,5]</div>
      <div> {q6Answer}</div>
      <div> {duplicate(["a", "b", "c", "d", "e"])}</div>
      <div className="mt-5 underline">Q7: Interesting function</div>
      <div> addSix(10): {addSix(10)}</div>
      <div> addSix(3): {addSix(3)}</div>
      <div className="mt-5 underline">Q8: Fizzbuzz function: fizzbuzz(20)</div>
      <div> {fizzbuzz(20)}</div>
      <div className="mt-5 underline">Q9: Anagram</div>
      <div> Mary, Army {anagram("Mary", "Army")}</div>
      <div> Rice, Race {anagram("Rice", "Race")}</div>
      <div className="mt-5 underline">Q10: Interesting function2</div>
      <div> if2.add(5) {if2.add(5)}</div>
      <div> if2.add(9) {if2.add(9)}</div>
      <div> if2.retrive() = {if2.retrieve()}</div>
      <div> </div>
      <div className="mt-5 underline">
        Q11: How to import all named exports from a js file?
      </div>
      <div> import * as importAll from ""</div>
      <div className="mt-5 underline">Q12: Difference between == and ===?</div>
      <div> 1 == "1" returns true</div>
      <div> 1 === "1" returns false</div>
      <div className="mt-5 underline">Q13: try, catch, finally</div>
      <div>try : code to run </div>
      <div>catch(err) : code to handle errors </div>
      <div>finally : code to run regardless of try / catch result</div>
      <div className="mt-5 underline">Q14: How to create Array</div>
      <div>let myArray = newArray("value1", "value2", "value3") </div>
      <div className="mt-5 underline">
        Q15: How do you check if a value is an array
      </div>
      <div> myArray.includes("1") </div>
      <div className="mt-5 underline">Q16: When would you use Await/Async</div>
      <div>
        For fetching API because it's asynchronous compared to other function.
        That function will not block the execution of othe code while its
        executing, and it allows ohter code to continue to run while it waits
        for task to complete. It's use for tasks that take a long time to
        complete such as network requests or database queries.{" "}
      </div>
      <div className="mt-5 underline">Q17: How to create a new object?</div>
      <div> const user = {JSON.stringify({ name: "Jane Doe", age: 25 })}</div>
      <div>or</div>
      <div>
        const user = newObject(); user.name = "Jane Doe"; user.age = 25;
      </div>
      <div className="mt-5 underline">Q18: Difference between let and var?</div>
      <div>Var: Can be used globally and Let: Can only be used in block.</div>
      <div className="mt-5 underline">Q19: What is memoization?</div>
      <div>
        Memoization is a technique to store results of expensive function calls
        and then return cached results when the same inputs occur again.
      </div>
      <div className="mt-5 underline">Q20: Find the second largest number</div>
      <div>[29, 3, 15, 1, 40, 29, 33, 41, 82, 92, 12, 24, 87]</div>
      <div>
        Second Largest Number using for loop is:{" "}
        {secondLargest([29, 3, 15, 1, 40, 29, 33, 41, 82, 92, 12, 24, 87])}
      </div>
      <div>Second Largest Number using sort is: {secondLargest2}</div>
      {parseInt("3")}
    </div>
  );
}

export default App;
