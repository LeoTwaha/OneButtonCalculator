const btn = document.getElementById("button");
const pointerb = document.getElementById("pointer");
const cursorb = document.getElementById("select");
const pointer = pointerb.parentNode.removeChild(pointerb);
const cursor = cursorb.parentNode.removeChild(cursorb);
const first = document.getElementById("firstMenu");
const body = document.body;
const sec = document.getElementById("secMenu");
const display = document.getElementById("display");
const result = document.getElementById("result");
const firstMenu = first.parentNode.removeChild(first);
const secMenu = sec.parentNode.removeChild(sec);


let firstMenuF = document.getElementById("firstMenuF");
const secMenuF = document.getElementById("secMenuF");

let firstNum = 0;
let firstNumDec = 0;
let sectNum = 0;
let secNumDec = 0;
let phase = 0;
let i = 0;
let loop = 0;
function nextSelection() {
    
    cursor.style.animation = "none";
    pointer.style.animation = "none";

    cursor.offsetHeight; 
    pointer.offsetHeight; 
    if(phase != 5 && phase != 8){
    cursor.style.animation = "selection 5s step-end 0s infinite";
    pointer.style.animation = "numSelect 5s linear 0s infinite";
} else if(phase === 5){
    cursor.style.animation = "operSelection 2.5s step-end 0s infinite";
    pointer.style.animation = "operSelect 2.5s linear 0s infinite";
}  else {
    cursor.remove();
            pointer.remove();
}
}

btn.addEventListener("click", () => {
    console.log("Button clicked at phase:", phase);
    
    switch (phase) {
        case 0:
            body.appendChild(firstMenu);
            firstMenuF = document.getElementById("firstMenuF");
            firstMenuF.appendChild(btn); // Append the button inside the form
            console.log("Button parent after appending:", btn.parentElement);

            // Add submit listener
            firstMenuF.addEventListener("submit", handleFirstMenuSubmit);
            console.log("Submit listener added to form");

            btn.setAttribute("type", "submit");
            btn.innerText = "Enter";
            phase++;
            console.log("Phase being incremented after firstbuttonpress");
            break;
        case 2:
        
        break;
        case 3:
        cursor.style.animationPlayState = "paused";
        pointer.style.animationPlayState = "paused";
        const computedStyle = window.getComputedStyle(cursor);
        const transform = computedStyle.transform;
        const values = transform.match(/matrix\((.+)\)/)[1].split(", ").map(Number);
    const e = values[4]; // Translate X
    const f = values[5]; 
       console.log("i: " + i);
       if (i >= firstNum) {
        if (firstNumDec > 0) {
            display.innerText += ".";
            i = 0;
            phase++;
            nextSelection(); // Only called when decimal digits are present
        } else {
            phase += 2; // Skip the decimal phase if no decimal digits
            i = 0;
            nextSelection(); // Proceed directly to the next phase
        }
        break;
    }
    
       if(f === 0 && e == 0){
        display.innerText  += "0";
        i++;
        } else if(f === -55 && e == 6){
            display.innerText  += "1";
            i++;
        } else if(f === -110 && e == 20){
            display.innerText  += "4";
            i++;
        } else if(f === -165 && e == 30){
            display.innerText  += "7";
            i++;
        } else if(f === -165 && e == 110){
            display.innerText  += "8";
            i++;
        } else if(f === -165 && e == 190){
            display.innerText  += "9";
            i++;
        } else if(f === -110 && e == 105){
            display.innerText  += "5";
            i++;
        } else if(f === -110 && e == 195){
            display.innerText  += "6";
            i++;
        } else if(f === -55 && e == 201){
            display.innerText  += "3";
            i++;
        }  else if(f === -55 && e == 101){
            display.innerText  += "2";
            i++;
        } 
        if (i >= firstNum) {
            if (firstNumDec > 0) {
                display.innerText += ".";
                i = 0;
                phase++;
                nextSelection(); // Only called when decimal digits are present
            } else {
                phase += 2; // Skip the decimal phase if no decimal digits
                i = 0;
                nextSelection(); // Proceed directly to the next phase
            }
            break;
        }
        
        nextSelection();
        break;
        case 4:
        cursor.style.animationPlayState = "paused";
        pointer.style.animationPlayState = "paused";
        const computedStyle2 = window.getComputedStyle(cursor);
    const transform2 = computedStyle2.transform;
        
       const  values2 = transform2.match(/matrix\((.+)\)/)[1].split(", ").map(Number);
        const e2 = values2[4]; // Translate X
        const f2 = values2[5]; 
        if(i >= firstNumDec){
            phase++;
            nextSelection();
            i = 0;
            break;
        }
        if(f2 === 0 && e2 == 0){
        display.innerText  += "0";
        i++;
        } else if(f2 === -55 && e2 == 6){
            display.innerText  += "1";
            i++;
        } else if(f2 === -110 && e2 == 20){
            display.innerText  += "4";
            i++;
        } else if(f2 === -165 && e2 == 30){
            display.innerText  += "7";
            i++;
        } else if(f2 === -165 && e2 == 110){
            display.innerText  += "8";
            i++;
        } else if(f2 === -165 && e2 == 190){
            display.innerText  += "9";
            i++;
        } else if(f2 === -110 && e2 == 105){
            display.innerText  += "5";
            i++;
        } else if(f2 === -110 && e2 == 195){
            display.innerText  += "6";
            i++;
        } else if(f2 === -55 && e2 == 201){
            display.innerText  += "3";
            i++;
        }  else if(f2 === -55 && e2 == 101){
            display.innerText  += "2";
            i++;
        } 
        if(i >= firstNumDec){
            phase++;
            nextSelection();
            i = 0;
            break;
        }
        nextSelection();
        break;
       case 5:
        cursor.style.animationPlayState = "paused";
        pointer.style.animationPlayState = "paused";
        const computedStyle3 = window.getComputedStyle(cursor);
    const transform3 = computedStyle3.transform;
        
       const  values3 = transform3.match(/matrix\((.+)\)/)[1].split(", ").map(Number);
        const e3 = values3[4]; // Translate X
        const f3 = values3[5];
        if(f3 === -1 && e3 === 298){
            display.innerText  += "+";  
            phase++;
        }
        else if(f3 === -56 && e3 === 287){
            display.innerText  += "-";  
            phase++;
        }
        else if(f3 === -112 && e3 === 275){
            display.innerText  += "/";  
            phase++;
        }
        else if(f3 === -168 && e3 === 264){
            display.innerText  += "*";  
            phase++;
        }
        nextSelection();
        break;
        case 6:
        cursor.style.animationPlayState = "paused";
        pointer.style.animationPlayState = "paused";
        const computedStyle4 = window.getComputedStyle(cursor);
        const transform4 = computedStyle4.transform;
        const values4 = transform4.match(/matrix\((.+)\)/)[1].split(", ").map(Number);
    const e4 = values4[4]; // Translate X
    const f4 = values4[5]; 
       console.log("i: " + i);
       if (i >= secNum) {
        if (secNumDec > 0) {
            display.innerText += ".";
            i = 0;
            phase++;
            nextSelection(); // Only called when decimal digits are present
        } else {
            phase += 2; // Skip the decimal phase if no decimal digits
            i = 0;
            nextSelection(); 
            console.log("ans: " + eval(display.innerText));
            result.innerText = eval(display.innerText);
            if(result.innerText === "Infinity"){
                result.innerText = "undefined";
            }
            btn.innerText = "↻";
        }
        break;
    }
    
       if(f4 === 0 && e4 == 0){
        display.innerText  += "0";
        i++;
        } else if(f4 === -55 && e4 == 6){
            display.innerText  += "1";
            i++;
        } else if(f4 === -110 && e4 == 20){
            display.innerText  += "4";
            i++;
        } else if(f4 === -165 && e4 == 30){
            display.innerText  += "7";
            i++;
        } else if(f4 === -165 && e4 == 110){
            display.innerText  += "8";
            i++;
        } else if(f4 === -165 && e4 == 190){
            display.innerText  += "9";
            i++;
        } else if(f4 === -110 && e4 == 105){
            display.innerText  += "5";
            i++;
        } else if(f4 === -110 && e4 == 195){
            display.innerText  += "6";
            i++;
        } else if(f4 === -55 && e4 == 201){
            display.innerText  += "3";
            i++;
        }  else if(f4 === -55 && e4 == 101){
            display.innerText  += "2";
            i++;
        } 
        if (i >= secNum) {
            if (secNumDec > 0) {
                display.innerText += ".";
                i = 0;
                phase++;
                nextSelection(); // Only called when decimal digits are present
            } else {
                phase += 2; // Skip the decimal phase if no decimal digits
                i = 0;
                nextSelection(); // Proceed directly to the next phase
                console.log("ans: " + eval(display.innerText));
            result.innerText = eval(display.innerText);
            if(result.innerText === "Infinity"){
                result.innerText = "undefined";
            }
            btn.innerText = "↻";
            }
            break;
        }
        
        nextSelection();
        break;
        case 7:
            // Updated case 7 logic
            btn.innerText = "Enter";
            cursor.style.animationPlayState = "paused";
            pointer.style.animationPlayState = "paused";

            const computedStyle7 = window.getComputedStyle(cursor);
            const transform7 = computedStyle7.transform;
            const values7 = transform7.match(/matrix\((.+)\)/)[1].split(", ").map(Number);
            const e7 = values7[4]; // Translate X
            const f7 = values7[5];

            console.log("Phase 7 - i:", i, "secNumDec:", secNumDec);

            if (i >= secNumDec) {
                phase++;
                i = 0;
                console.log("ans: " + eval(display.innerText));
                result.innerText = eval(display.innerText);
                if(result.innerText === "Infinity"){
                    result.innerText = "undefined";
                }
            btn.innerText = "↻";
                nextSelection();
                break;
            }

            if (f7 === 0 && e7 === 0) {
                display.innerText += "0";
                i++;
            } else if (f7 === -55 && e7 === 6) {
                display.innerText += "1";
                i++;
            }  else if(f7 === -110 && e7 == 20){
                display.innerText  += "4";
                i++;
            } else if(f7 === -165 && e7 == 30){
                display.innerText  += "7";
                i++;
            } else if(f7 === -165 && e7 == 110){
                display.innerText  += "8";
                i++;
            } else if(f7 === -165 && e7 == 190){
                display.innerText  += "9";
                i++;
            } else if(f7 === -110 && e7 == 105){
                display.innerText  += "5";
                i++;
            } else if(f7 === -110 && e7 == 195){
                display.innerText  += "6";
                i++;
            } else if(f7 === -55 && e7 == 201){
                display.innerText  += "3";
                i++;
            }  else if(f7 === -55 && e7 == 101){
                display.innerText  += "2";
                i++;
            }

            if (i >= secNumDec) {
                phase++;
                i = 0;
                console.log("ans: " + eval(display.innerText));
                result.innerText = eval(display.innerText);
                if(result.innerText === "Infinity"){
                    result.innerText = "undefined";
                }
            btn.innerText = "↻";
                nextSelection();
                
            }
            break;

        case 8:
            location.reload();
            break;
    }
});

function handleFirstMenuSubmit(event) {
    event.preventDefault(); // Prevent form default submission behavior
    console.log("Submit event triggered!");

    // Dynamically fetch the input elements
    const firstNumI = document.getElementById("firstNum");
    const firstNumDecI = document.getElementById("firstNumDecDigs");

     firstNum = firstNumI.value;
     firstNumDec = firstNumDecI.value;

    console.log("First Num:", firstNum, "First Num Decimal:", firstNumDec);

    // Transition to second menu
    body.appendChild(secMenu); // Append the second menu to the body

    // Re-fetch secMenuF after appending secMenu
    const secMenuF = document.getElementById("secMenuF"); // Dynamically re-reference
    console.log("secMenuF re-fetched:", secMenuF);
    phase++;
    console.log("Phase being incremented after form1");
    secMenuF.appendChild(btn); // Move the button to the second form
    body.removeChild(firstMenu); // Remove the first menu
    secMenuF.addEventListener("submit", handleSecondMenuSubmit);
    
}
const handleSecondMenuSubmit = (event) => {
    event.preventDefault(); // Prevent form default submission behavior
    console.log("Submit event triggered!");

    // Dynamically fetch the input elements
    const secNumI = document.getElementById("secNum");
    const secNumDecI = document.getElementById("secNumDecDigs");

    // Validation for empty fields
    if (!secNumI.value || !secNumDecI.value) {
        alert("Please fill in the blanks");
        document.getElementById("secMenuF").reset(); // Reset the form if invalid
        return; // Exit if validation fails
    } else {
        // If validation passes, continue to process the input
        secNum = secNumI.value;
        secNumDec = secNumDecI.value;

        console.log("secNum:", secNum, "Sec Num Decimal:", secNumDec);
        console.log("First Num:", firstNum, "First Num Decimal:", firstNumDec);

        // Update phase and proceed to the next step
        console.log("Phase being incremented after form2");
        console.log("Phase incremented to:", phase);

        btn.setAttribute("type", "button");
        btn.innerText = "Select";
        body.appendChild(pointer);
        body.appendChild(cursor);
        phase++;
        // Move the button to the next form and remove the current menu
        body.appendChild(btn);
        body.removeChild(secMenu);
    }
};



