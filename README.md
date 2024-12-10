# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Runtime Analysis:
The runtime complexity of the implemented algorithm is O(n! x n), where n is the length of the array. O(n!) because the algorithm generates all possible permutations of the array, and for
an array length n there would be n! permuations. O(n) because for each permutation the algorithm needs to check if the array is sorted which requires checking each element lineary.

Best case input: The best case occurs when the array is already sorted, resulting in an immediate return without needing further permutations. However, the function still checks all 
permutations, making the best case runtime still O(n! x n) due to the recursive generation of permutations.

Worst case input: The worst case also occurs when no permutations lead to a sorted array until the very last permutation. Which also results in O(n! x n) complexity because the 
algorithm still generates all n! permutations.

Random Permutation Generation: If we generate permutations randomly without memory, the expected complexity could reduce, but it would still depend on the likelihood of producing a 
sorted permutation early, with an average case closer to O(n!), since we cannot guarantee an optimal path. Meaning there is no guarantee that the first random permutation will be 
sorted, and the worst case would still involve all n! permutations being checked. However, without memory of previous permuations it is more likely to O(infinty) as there is no guarantee
of generating the correct permuation. 


Sources:
Lecture Notes
ChatGPT for permutation because could not wrap head around (did rewrite a lot of it, but influenced by chatGpt quite a bit), specifically lines 26 - 31
https://www.geeksforgeeks.org/javascript-program-to-find-lexicographically-next-permutation/

# Plagarism Statement
All exercises must contain the following statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
