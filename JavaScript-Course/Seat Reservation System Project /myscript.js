

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

var reservedSeats = {
    record1:{
        seat:"b19",
        owner:{
            fname:"John",
            lname:"Smith"
        }
    },
    record2:{
        seat:"b20",
        owner:{
            fname:"John",
            lname:"Smith"
        }
    },
    record3:{
        seat:"b21",
        owner:{
            fname:"John",
            lname:"Smith"
        }
    },
    record4:{
        seat:"b22",
        owner:{
            fname:"John",
            lname:"Smith"
        }
    },
};

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

(function (){
    "use strict";

    for (const key in reservedSeats){

        if(reservedSeats.hasOwnProperty(key)){
            const obj = reservedSeats[key];
        
            document.getElementById(obj.seat).className = "r";
            document.getElementById(obj.seat).innerHTML = "R";
        }
    
    }

    let selectedSeats = [];
    let seats = document.querySelectorAll('.a');

    seats.forEach(function (seat) {
        seat.addEventListener('click', function (event) {

            seatSelectionProcess(seat.id);
        });
    });

    function seatSelectionProcess(thisSeat){
        console.log(thisSeat);
        if (!document.getElementById(thisSeat).classList.contains('r')){
            const index = selectedSeats.indexOf(thisSeat);
            if (index > -1){
                selectedSeats.splice(index, 1);
                document.getElementById(thisSeat).className = "a";
            }

            else {
                selectedSeats.push(thisSeat);
                document.getElementById(thisSeat).className = "s"
            }
            manageConfirmForm();
            console.log(selectedSeats)
        }
    }

    document.getElementById('reserve').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('resform').style.display = 'block';
    });

    document.getElementById('cancel').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('resform').style.display = 'none';
    });

    function manageConfirmForm(){
        if( selectedSeats.length > 0){
            document.getElementById('confirmres').style.display = 'block';

            if(selectedSeats.length === 1){
                document.getElementById('selectedseats').innerHTML = `you have selected seats ${selectedSeats[0]}`;
                
            }
            else{
                let seatString = selectedSeats.toString();
                seatString = seatString.replace(/,/g, " , ");
                seatString = seatString.replace(/,(?=[^,]*$)/, ' and ');
                document.getElementById('selectedseats').innerHTML = `you have selected seats ${seatString}`;

            }

        }
        else{
            document.getElementById('confirmres').style.display = 'none';

            document.getElementById('selectedseats').innerHTML = 'You need to select some seats to reserve. <br><a href="#" id="error">Close</a>This dialog box and pick at least one seat.';
        
            document.getElementById('error').addEventListener('click', function(){
                document.getElementById('resform').style.display = 'none';
            });
        }
    }

    manageConfirmForm();

    document.getElementById('confirmres').addEventListener('submit', function(event){
        processReservation();
        event.preventDefault();
    });

    function processReservation(){
        const hardCodeRecords = Object.keys(reservedSeats).length;
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        let counter = 1;
        let nextRecord = '';

        selectedSeats.forEach( function (thisSeat){
            document.getElementById(thisSeat).className = 'r';
            document.getElementById(thisSeat).innerHTML = 'R';

            nextRecord = `record${hardCodeRecords + counter}`;
            reservedSeats[nextRecord] = {
                seat:thisSeat,
                owner:{
                    fname:fname,
                    lname:lname
                }
            };
            counter++ ;
        });
        document.getElementById('resform').style.display = "none";
        selectedSeats = [];
        manageConfirmForm();

        console.log(reservedSeats)

    }

}());

