1. The value of `i` gets printed and it is the length of `prices`, because that is the stopping condition of the loop and `var i` has function-level scope which makes it keep its value even outside of the loop.
2. The value of `discounted` in the last loop gets printed because it has function-level scope.
3. The value of `finalPrice` in the last loop gets printed because it has function-level scope.
4. It returns the array with elements `[ 50, 100, 150 ]`. They are the prices from the original `prices` array after 50% discount.

5. Error message `ReferenceError: i is not defined`, because `let i` only has block-level scope, and it is undefined outside of its block.
6. `ReferenceError: discountedPrice is not defined`, the same reason as above.
7. The value of `finalPrice` in the last loop gets printed, because it is defined outside of the loop block which it makes it keep its changes after the loop.
8. It returns the array with elements `[ 50, 100, 150 ]`. They are the prices from the original `prices` array after 50% discount.


9. Error message `TypeError: Assignment to constant variable.` at line 7. Reassigning `discountedPrice` is not allowed because it is a `const` variable.
10. The same as above.
11. The same as above.
12. The same as above. The program stops at the second loop when trying to reassign a `const` variable.
13.   A. `student.name`   
    B. `student['Grad Year']`  
    C. `student.greeting()`  
    D. `student['Favorite Teacher'].name`  
    E. `student.courseLoad[0]`
14. A. `'32'`2 is converted to a string because`'3'` is a string and `+` is treated as a string concatenation.  
    B. `1`  3 is converted to a number and `-` is subtraction.  
    C. `3`  `null` is converted to the number 0.  
    D. `'3null'`  `null` is converted to a string to perform string concatenation.  
    E. `4`  `true` is converted to a number .  
    F. `0`  Both `false` and `null` are 0 after they are converted to a number.  
    G. `'3undefined'`  `undefined` converted to string.  
    H. `NaN`  `undefined` is `NaN` after it's converted to a number.
15. A. `true`  `'2'` is converted to a number and it's greater than 1.  
    B. `false`  This is a comparison between strings and `'2'` is greater than `'1'`.  
    C. `true`  `'2'` converted to a number.  
    D. `false` Strict equality check and they are different types.  
    E. `false` `true` converted to a number is 1.  
    F. `true`  `Boolean(2)` is `true`.
16. When using `==` to compare different types, both values are converted to numbers. When using `===`, types are not converted so the comparison between variables of different types returns `false` immediately.
17. `How are you?` is printed. `2==true` is false because `true` is 1 converted to a number. `2` itself is true, so the second condition is satisfied. The 3rd condition is skipped because of `else`.

19\. The result is the array `[6, 8, 10]`.  
```javascript
// First loop
newArr.push(doSomething(num[0], function(x)));
newArr.push(doSomething(1, function(x)));
newArr.push(function(1+2));
newArr.push(3*2);
newArr.push(6);

// Second loop
newArr.push(doSomething(num[1], function(x)));
newArr.push(doSomething(2, function(x)));
newArr.push(function(2+2));
newArr.push(4*2);
newArr.push(8);

// Third loop
newArr.push(doSomething(num[2], function(x)));
newArr.push(doSomething(3, function(x)));
newArr.push(function(3+2));
newArr.push(5*2);
newArr.push(10);
```
21\. The output is
```
1
4
3
2
```
   

​                 