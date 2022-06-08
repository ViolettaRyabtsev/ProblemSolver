// 937. Reorder Data in Log Files

var reorderLogFiles = function (logs) {
  let arrLetter = [];
  let arrDig = [];
  for (let i = 0; i < logs.length; i++) {
    let sent = logs[i].split(" ");

    let word = Number(sent[1]);
    console.log(word);
    if (isNaN(word)) {
      arrLetter.push(sent.join(" "));
    }

    if (word <= 9) {
      arrDig.push(sent.join(" "));
    }
  }
  return arrLetter.concat(arrDig);
};

//   Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
