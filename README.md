# This is the code that will be used in my website to simulate a command prompt or shell
---

The input command at the text box is stored as var inputCommand .
The place where the data will be displayed is stored in var contentDisplayArea . 

Data can be added to display by 

```javascript

contentDisplayArea.innerHTML += data;

```

To add new custom commands, 
    1. scroll to the bottom of the javascript file 
    2. add in a new function at the back of the array
    3. add new case to switch statement at eventlistener of focus and keycode == 13 (ENTER)

---

You can see this  in work at my [https://codepen.io/cExplr/pen/jxeJwN](https://codepen.io/cExplr/pen/jxeJwN)

and you can see a how it was used in the bigger project without images of logo and background at [https://codepen.io/cExplr/pen/pVQBXW](https://codepen.io/cExplr/pen/pVQBXW)

---
