1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


<!-- 1st Question: Answer -->
`getElementById` = "getElementById" gives us a single element which matched with Unique ID.

`getElementsByClassName` = "getElementsByClassName" gives us all the Elements with same className in HTMLCollection.

`querySelector` = "querySelector" gives us only the 1st element even if there are multiple same elements with CSS Selector(We have to use id(#) or class(.) before className or ID).

`querySelectorAll` = "querySelectorAll" gives us all the matched elements in a NodeList(We have to use id(#) or class(.) before className or ID )



<!-- 2nd Question: Answer -->
To create a new element and Insert into the DOM....
    <!-- 1. get the Container where I want to append -->
    const container = document.getElementById('container);
    <!-- 2. create element -->
    const element = document.createElement('div');
    <!-- 3. insert some innerText/innerHTML to the element-->
    element.innerText = "A new Element added to the DOM";
    <!-- 4. append element as a container's child -->
    container.appendChild(element);



<!-- 3rd Question: Answer -->
Event Bubbling: Event Bubbling has 3 phases.
                1. Capture Phase
                2. Target Phase
                3. Bubbling Phase
    Explanation: When we clicked on a button, Event will go through "Capturing" parent to child element one by one, and get the "Target Phase" element. Then again it will go through "Bubbling" child element to parent element.
    If I clicked a "Button" which is inside a div, then button is a child element of the div and the "div" itself a parent element. So, when I clicked the "Button", 1st it will show the button event and then also it will show its parents one also.



<!-- 4th Question: Answer -->
Event Delegation: Instead of put multiple event listener to the child elements, We can use the main Parent for the event so that we can see where event.target clicked with the help of "Event Bubbling". 
Useful: 1. We can use it for Dynamic changes to the document
        2. Code Efficiency- cause we don't need to use every child for the event
        3. Reduce costing and data size.
        4. For big data, don't need to use loop. So, no extra loading time required and many more.



<!-- 5th Question: Answer -->
`preventDefault()`: preventDefault() used for "form" section, whenever we submit the required form it will   automatically reload for its own behave. To stop auto reload we use this "preventDefault()".

`stopPropagation()`: stopPropagation() stop the event Bubbling which are going to the parent from child element. If we don't want to use bubbling & delegate in a specific element after a event trigger, then we will use stopPropagation().