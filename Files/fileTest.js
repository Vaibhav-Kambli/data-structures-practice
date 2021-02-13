const fs = require("fs");

/** Count file length and count of unique words */
fs.readFile("words.txt", function (err, data) {
	if (err) throw err;

	let fileData = data.toString().split(" ");
	console.log("Original length:", fileData.length);

	let uniqueWords = new Set(fileData);
	console.log("Unique word count:", uniqueWords.size);

	console.log("Unique words:", uniqueWords)
});
