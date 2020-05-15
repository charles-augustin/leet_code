class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(ele) {
        let node = new ListNode(ele);

        let current;

        if(this.head == null) {
            this.head = node;
        }

        else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            
            current.next = node;

        }
    }

    print() {
        let node = this.head;
        let listval="";
        while(node) {
            listval += node.val + ",";
            node = node.next;
        }

        console.log("The Linked list val is " + listval.substr(0, listval.length-1));
    }

    middleOfList() {
        let slow_ListNode = this.head;
        let fast_ListNode = this.head;

        while(fast_ListNode!=null && fast_ListNode.next != null) {
            slow_ListNode = slow_ListNode.next;
            fast_ListNode = fast_ListNode.next.next;
        }

        console.log("The middle element in the linked list is " + slow_ListNode.val);
        
    }


    //remove an element
    remove(ele) {
        let current = this.head;

        let sentinel = new ListNode(0);
        sentinel.next = this.head;
        let prev = sentinel;
        while(current) {
            if(current.val == parseInt(ele)){
                if(prev == null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
            }
            else
            prev = current;
            current = current.next
        }
        return sentinel.next;
    }

    //removeDuplicates from sorted list

    removeDuplicates() {
        let current = this.head;

        while(current && current.next!=null) {
            if(current.val === current.next.val) {
                current.next = current.next.next;
            }
            else {
                current =current.next;
            }
        }
    }

    //remove duplicates from unsorted list

    removeDuplicatesUnsorted() {
        let ptr1 = null, ptr2 = null;

        ptr1= this.head;

        while(ptr1.next !=null && ptr1) {
            ptr2= ptr1;
            while(ptr2.next) {
                if(ptr2.next.val == ptr1.val){
                    ptr2.next = ptr2.next.next;
                }
                else
                    ptr2 =ptr2.next;
            }
            ptr1= ptr1.next;
        }
    }

    // palindrome or not

    checkPalindromeUsingArrays() {
        //first method using arrays

        let current = this.head;
        let arr = [];

        while(current) {
            arr.push(current.val)
            current = current.next;
        }

        let front = 0, back = arr.length-1;

        while(front < back) {
            if(arr[front] !== arr[back]) {
                return false;
            }

            front++;
            back--;
        }
        return true;
    }

    checkPalindromeInplace() {

        
        if(this.head == null) 
            return true;
        let firstHalfEnd = this.endOfFirstHalf(this.head);
        let secondHalf = this.reverseList(firstHalfEnd.next);

        let p1 = this.head, p2 = secondHalf;
        while(p2) {
            if(p1.val != p2.val){
                return false;
            }
            p2 = p2.next;
            p1 = p1.next;
        }

        //to restore the list
        firstHalfEnd.next = this.reverseList(secondHalf);
        return true;

    }

    endOfFirstHalf(head) {
        let slowP = head, fastP = head;
        while(fastP.next && fastP.next.next) {
            fastP = fastP.next.next;
            slowP = slowP.next;
        }
        return slowP;
    }

    reverseList(head) {
        let current = head, prev = null;
        
        while(current) {
            let tempNext = current.next;
            current.next = prev;
            prev = current;
            current = tempNext;
        }

        return prev;
    }

    mergeSort(head) {
        let current = head;

        if(current == null || current.next == null) 
            return current;

        let middle = this.endOfFirstHalf(current);
        let middleNext = middle.next;

        middle.next = null;

        let left = this.mergeSort(current);
        let right = this.mergeSort(middleNext);

        let res = this.sortedMerge(left, right);

        return res;
    }

    sortedMerge(a,b) {
        let result = null;
        //base case
        if(a == null) 
            return b;
        if(b == null)
            return a;

        if(a.val <= b.val) {
            result = a;
            result.next = this.sortedMerge(a.next, b);
        }
        else {
            result = b;
            result.next = this.sortedMerge(a, b.next);
        }

        return result;
    }

    
}

let list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(30);
list.add(20);
list.add(10);

// list.middleOfList();

// console.log(list.remove(30));

// list.removeDuplicates();

// list.removeDuplicatesUnsorted();

// list.print();



list.print();

// console.log(list.checkPalindromeUsingArrays());

// console.log(list.checkPalindromeInplace());


// console.log(list.remove(30));

console.log(list.mergeSort(list.head));

list.print();







