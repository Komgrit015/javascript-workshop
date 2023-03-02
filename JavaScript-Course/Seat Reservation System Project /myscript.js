

// const rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];


// // section left 

// let html = "";
// let counter = 1;

// rows.forEach(function (row) {
    
//     html += `<div class="label">${row}</div>`;

//     for (let i = 0; i < 3; i++) {
//         html += `<div id="${row + counter}">${counter}</div>`;
//         counter++;
//     }

//     counter = counter + 12;
// });

// document.getElementById('left').innerHTML = html;


// // section right 

// html = "";
// counter = 1;

// rows.forEach(function (row) {

//     counter = counter + 12;

//     for (let i = 0; i < 3; i++) {
//         html += `<div id="${row + counter}">${counter}</div>`;
//         counter++;
//     }

//     html += `<div class="label">${row}</div>`;

// });

// document.getElementById('right').innerHTML = html;


// // section middle 

// html = "";
// counter = 1;

// rows.forEach(function (row) {

//     counter = counter + 3;

//     for (let i = 0; i < 9; i++) {
//         html += `<div id="${row + counter}">${counter}</div>`;
//         counter++;
//     }

//     counter = counter + 3;
    
// });

// document.getElementById('middle').innerHTML = html;

function makeRows(sectionLength, rowLength, placement) {

    const rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
 
    let html = "";
    let counter = 1;

    rows.forEach(row => {
        switch(placement){
            case "left": html += `<div class="label">${row}</div>`; break;
            case "right": counter = counter + (rowLength - sectionLength); break;
            default: counter = counter + ((rowLength - sectionLength)/2); break;
        }

        for (let i = 0; i < sectionLength; i++) {
            html += `<div class="a" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch(placement){
            case "left": counter = counter + (rowLength - sectionLength); break;
            case "right": html += `<div class="label">${row}</div>`; break;
            default: counter = counter + ((rowLength - sectionLength)/2); break;
        }
    });
    document.getElementById(placement).innerHTML = html;
}


makeRows(3, 15, 'left');
makeRows(3, 15, 'right');
makeRows(9, 15, 'middle');
