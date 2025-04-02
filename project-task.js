/*
Objective:
Students will write a recursive function to reverse a string.
This exercise reinforces the concepts of base cases, recursive cases,
and how recursion works with the call stack.



Instructions:
Write a function named reverseString that takes a string as input.



The function should:
  Return the string itself if it contains only one character (base case).
  
  Use recursion to reverse the string by concatenating the last character of the string with the result of
  the recursive call on the remaining part of the string (recursive case).
  
  Test the function with various string inputs to verify its correctness.
*/



// Example Input and Output:
reverseString("hello"); // Outputs: "olleh"
reverseString("recursion"); // Outputs: "noisrucer"
reverseString("a"); // Outputs: "a"
reverseString(""); // Outputs: ""
