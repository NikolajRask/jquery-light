function $(selector) {
    const self = {
        element: document.querySelector(selector),
        html: () => {self.element; return self},
        on: (event, callback) => {self.element.addEventListener(event, callback)},
        hide: () => {self.element.style.display = "none"; return self},
        show: () => {self.element.style.display = "block"; return self},
        toggleVisibility: () => {if (self.element.style.display == "none") {self.show()} else {self.hide()}; return self},
        attr: (name, value) => {if (value == null) {self.element.getAttribute(name)} else {self.element.setAttribute(name, value)}; return self},
        ready: (callback) => {self.on("DOMContentLoaded",callback)},
        css: (styles, complete=()=>{}) => {
            for (const key in styles) {
                self.element.style[key] = styles[key];
            }
            complete(styles);
        },
        animate: (targets, options = {duration: 1, delay: 0, reverse: true}) => {
            var e = ""
            if (options.reverse == true) {
                e = " ease-in-out"
            }
            self.element.style.transition = "all " + options.duration + "s" + e
            self.css(targets)
            setTimeout(() => {self.element.style.transition = ""},options.duration*1000)
        },
        is: (type) => {if (self.element.nodeName == type.toUpperCase()) {return true} else {return false}},
        clear: () => {self.element.innerHTML = ""; return self},
        delete: () => {self.element.remove()},
        insert: (text) => {self.element.innerHTML = self.element.innerHTML + text},
        put: (text) => {self.element.innerHTML = text; return self},
        add: (element) => {
            const x = document.createElement(element);self.element.appendChild(x);return $(x.nodeName)
        },
        children: () => {return self.element.children;},
        click: () => {self.element.click(); return self}, 
        load: (url, complete) => {fetch(url).then(function (response) {return response.text()}).then(function (data) {self.element.innerHTML = data;complete(data)})}
    }
    return self;
}
