function save(fn, el, elVar) { //               -         ?? IS THIS EVEN PRACTICAL ??           -
    elVar = fn(elVar); //                       performs function on a variable tied to an element
    el.textContent = elVar //                   updates element text content with elVar
    return elVar; //                            returns new elVar (needed?)
}

// BASED ON
// let saveEl = document.getElementById('save-el')  
// let countEl = document.getElementById('count-el')

// function increment() {
//     count += 1;                               //adds to count each action (button push, etc)
//     countEl.textContent = countEl            //updates count text
// }

// function save() {
//     let countStr = count + " - "             // running ledger of count after each save()
//     saveEl.textContent += countStr           // updates ledger
//     countEl.textContent = 0                  // resets count element
//     count = 0                                // resets js count variable
// }