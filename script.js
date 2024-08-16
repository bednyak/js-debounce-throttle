const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");


const updateDebounceText = debounce(text => {
    debounceText.textContent = text
})

const updateThrottleText = throttle(text => {
    throttleText.textContent = text
})

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})


function debounce(cb, delay = 1000) {
    let timeout;
    
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            return cb(...args)
        }, delay);
    }
}


function throttle(cb, delay = 1000) {
    let shouldWait = false
    let lastText = null

    return (...args) => {
        if (shouldWait) {
            lastText = args
            return
        }      
        
        cb(...args)
        shouldWait = true

        setTimeout(() => {
            if (lastText) {
                cb(lastText)
                lastText = null
            }
            shouldWait = false
        }, delay)
    }
}


function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);

(function myFunction(a, b) {
    return a * b;
})()
