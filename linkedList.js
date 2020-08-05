// Given head which is a reference node to a singly-linked list.
//  The value of each node in the linked list is either 0 or 1.
//   The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.


class Node {
    constructor() {
        this.val = val;
        this.next = nul;
    }
}
var getDecimalValue = function (head) {

    var arr = []
    while (head !== null) {
        var temp = head.val
        head = head.next
        arr.push(temp)
    }
    var number = ''
    for (var i = 0; i < arr.length; i++) {
        number += arr[i]
    }
    console.log(number)
    var sum = 0
    for (var j = 0; j < number.length; j++) {
        sum = (sum * 2) + Number(number[j])
    }
    return sum;
};

