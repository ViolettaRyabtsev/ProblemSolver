
// Given the heads of two singly linked-lists headA and headB, 
// return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


var getIntersectionNode = function(headA, headB) {

    let getLength=function(linkedList){
        let count=0;
        while(linkedList){
            count++
            linkedList=linkedList.next 
        }
        return count
    }
 
     let lengthA=getLength(headA)
     let lengthB=getLength(headB)
     let defernceLength=0
     
      if(lengthA>=lengthB){
        defernceLength=lengthA-lengthB 
        } else{
        defernceLength=lengthB-lengthA  
      }
       while(defernceLength>0){
         defernceLength--
     }
       while(headA!==headB) {
         headA=headA.next
         headB=headB.next
         return headA.next 
             } 
     
         return null
     
 };