# Linked Lists

- ***push(val) :*** Appends a new node with value ***val*** to the tail. Returns undefined.
- ***unshift(val) :*** Add a new node with value ***val*** to the head. Returns undefined.
- ***pop() :*** Remove & return tail value. Throws error if list is empty.
- ***shift() :*** Remove & return head value. Throws error if list is empty.
- ***getAt(idx) :*** Retrieve value at index position ***idx***. Throws error if index is invalid.
- ***setAt(idx, val) :*** Set value of node at index position ***idx*** to ***val***. Throws error if index is invalid.
- ***insertAt(idx, val) :*** Insert a new node at position ***idx*** with value ***val***. Throws error if index is invalid. Returns undefined.
- ***removeAt(idx) :*** Remove & return value at position ***idx***. Throws error if index is invalid.
- ***Average Of List :***  Given a linked list containing numbers, return the average of those numbers.
---

**Data Structure**

Think about the data structure you’d want to use to store the items.

While it’s tempting to use something like a Linked List, the runtime to find an item by index in a linked list is ***O(n)***.

You can use a standard array to store the items, but you’ll need to think about how to keep track of the head and handle rotations.

---


## TODO
### Further Study
- Doubly Linked Lists
- Reverse In Place
- Sort Sorted Linked Lists
- Pivot Around Value
- Circular Arrays
