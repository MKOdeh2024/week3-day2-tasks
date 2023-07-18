# Question 1 : B
## justification :
The variables a, b, and c are declared inside the if block, but you're trying to access them outside of that block.\
However, **let** and **const** variables have block scope, which means they are only accessible within the block they are defined in.
On the other hand, var variables have function scope, allowing them to be accessed anywhere within the enclosing function.


# Question 2 : C
## justification :
The variables a, b, and c are accessed before they are declared.
Additionally, b and c are block-scoped variables, so they are not accessible outside the if block.

# Question 3 : C
## justification :
- The first console.log([a, b, c]) statement outputs [ 36, 100, 45 ] because it prints the initial values of a, b, and c declared in the outermost scope.
- Inside the if block, a new block scope is created. The var a, let b, and const c declarations within the if block shadow the outer variables with the same names.
- The second console.log([a, b, c]) statement outputs [ 1, 2, 3 ] because it prints the values of the variables a, b, and c declared within the if block.
- After the if block, the variables a, b, and c revert to their previous values declared in the outer scope. Therefore, the third console.log([a, b, c]) statement outputs [ 1, 100, 45 ].
