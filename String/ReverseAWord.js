class ReverseAWord{
  constructor(inputString) {
    this.str = inputString;  // Initialize with the input string
}

// Method to reverse each word in the string
reverseWords() {
    let words = this.str.split(' ');
    let reversedWords = [];

    // Iterate through each word and reverse it using two-pointer technique
    for (let i = 0; i < words.length; i++) {
        reversedWords.push(this.reverseWord(words[i]));
    }

    return reversedWords.join(' ');
}

// Helper method to reverse a single word using two-pointer technique
reverseWord(word) {
    let charArray = word.split('');
    let start = 0;
    let end = charArray.length - 1;

    while (start < end) {
        // Swap characters
        let temp = charArray[start];
        charArray[start] = charArray[end];
        charArray[end] = temp;
        start++;
        end--;
    }

    return charArray.join('');  // Return the reversed word
}
}

// Create an instance of the class
const reverser = new ReverseAWord("I am good boy");

// Call the method to reverse each word and print the result
console.log(reverser.reverseWords());