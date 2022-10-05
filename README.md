[![Build Status]
# JQuery Light :smiley:
>Version 1.0
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


## Selector Functions :car:
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

### .toggleVisibility()
Toggles the visibility of the selector **.toggleVisibility()**<br>
```javascript showLineNumbers
$("p").toggleVisibility()
```

### .css()
Changes the css of the selector **.css(styles)**<br>
```javascript showLineNumbers
$("p").css({
  width: "100px",
  height: "100px",
  marginTop: "200px"
})
```

### .is()
Check the type of the selector  **.is(type)**<br>
```javascript showLineNumbers
if ($("#title").is("h1") === true) {
  console.log("The title is a h1 element")
}
```

### .clear()
Clears all content of the selector **.clear()**<br>
```javascript showLineNumbers
$("p").clear()
```


### .delete()
Deletes the selector **.delete()**<br>
```javascript showLineNumbers
$("p").delete()
```


### .insert()
Insert texts into the innerHTMl of the selector **.insert(text)**<br>
```javascript showLineNumbers
$("p").insert("Hello ")
$("p").insert("World")
```

### .put()
Puts texts into the innerHTMl of the selector **.put(text)**<br>
```javascript showLineNumbers
$("p").put("Hello World")
```

### .add()
Adds element inside of the selector **.add(element)**<br>
```javascript showLineNumbers
$("p").add("div")
```

### .children()
Returns a list of children of the selector **.children()**<br>
```javascript showLineNumbers
$("p").children()
```

### .click()
Clicks the selector **.click()**<br>
```javascript showLineNumbers
$("p").click()
```

### .load()
Load fecthed text from third parties into the selector **.load(url, complete)**<br>
```javascript showLineNumbers
$("p").load("stats.txt", (data) => {
  console.log("Loaded data done")
})
```

More functionality will be added in the future ▶️



