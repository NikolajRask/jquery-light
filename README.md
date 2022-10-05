[![Build Status]
# JQuery Light :smiley:
JQuery-Light is my own alternative to JQuery, but in this version I have only included the most usefull features in my opinion.<br>
Feel free to pull the project and make any changes to the code that you desire.

## Get Started :hammer:
Download the jquery-light.js file to your own project<br>
``` { .shell }
git pull https://github.com/NikolajRask/jquery-light
```

Use git or download it manually<br><br>
Include a **jquery-light.js** script tag in your .html file<br>
```javascript showLineNumbers
<script src="jquery-light.js"></script>
```


## Functions :car:
### .add()
Adds a new element inside of the selector **.add(element)**<br>
```javascript showLineNumbers
$("p").add("div")
```

### .animate()
Animates the selector **.animate(css, options)**<br>
```javascript showLineNumbers
$("p").animate({
  width: "100px",
  height: "100px",
  marginTop: "200px"
}, {
  duration: 1,
  delay: 0,
  reverse: false
})
```

### .attr()
View or change a attribute for the selector **.attr(name, value)**<br>
```javascript showLineNumbers
const link = $("#link1").attr("href")

$("#link2").attr("href",link)
```

### .html()
Returns the html of the selector **.html()**<br>
```javascript showLineNumbers
$("p").html()
```

### .on()
Add an eventListener to a selector **.on(event, callback)**<br>
```javascript showLineNumbers
$("p").on("click", () => {
  console.log("Hello World")
})
```

### .show()
Makes the selector visible **.show()**<br>
```javascript showLineNumbers
$("p").show()
```

### .hide()
Makes the selector invisible **.hide()**<br>
```javascript showLineNumbers
$("p").hide()
```
