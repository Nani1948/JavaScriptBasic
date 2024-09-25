console.log('Find Occurrences');
const arr = [10, 1, 8, 2, 2, 2, 2, 4, 4, 4, 3, 3, 10, 1, 7, 7, 7, 1];

const occurrences = {};

// Count occurrences of each element
for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
        occurrences[arr[i]]++;
    } else {
        occurrences[arr[i]] = 1;
    }
}

// Print the counts
for (const [element, count] of Object.entries(occurrences)) {
    console.log(`Element: '${element}', Count: '${count}'`);
}
/**    Object for Counting: An object called occurrences is used to keep track of the count for each unique element.
    Counting Logic:
        If the element already exists in the object, increment its count.
        If it doesn’t exist, initialize its count to 1.
    Printing the Results: After counting, we use Object.entries() to iterate over the entries of the occurrences object and print each element with its count.

