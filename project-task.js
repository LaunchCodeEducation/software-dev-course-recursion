/*
===========================================
🔁 Recursive String Reversal
===========================================

🎯 Objective:
Students will write a recursive function to reverse a string.

This exercise reinforces:
- Base cases
- Recursive cases
- How recursion works with the call stack

---
🧭 Instructions:

Write a function named `reverseString` that takes a string as input.

The function should:

✅ Return the string itself if it contains only one character (base case).

✅ Use recursion to reverse the string by:
   - Taking the **last character** of the string
   - Concatenating it with the **result of a recursive call** on the remaining part of the string

✅ Test the function with various inputs to ensure correctness.
*/

// ============================================
// 🚧 Your Function Goes Below
// ============================================

// function reverseString(str) {
//   // TODO: Handle base case
//   // TODO: Handle recursive case
// }

// ============================================
// 🧪 Example Test Cases
// ============================================

reverseString("hello");      // Expected Output: "olleh"
reverseString("recursion");  // Expected Output: "noisrucer"
reverseString("a");          // Expected Output: "a"
reverseString("");           // Expected Output: ""

// ✅ Tip: You can use console.log() to print each result for testing
// console.log(reverseString("hello"));
