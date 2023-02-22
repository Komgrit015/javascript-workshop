(function() {
    document.getElementById('convert').addEventListener('submit', function (event) {

        event.preventDefault();

        let distance = parseFloat(document.getElementById('distance').value);
        let answer = document.getElementById('answer');


        if (distance) {
            let conversion = (distance * 1.609344).toFixed(3);
            // let roundedConversion = conversion.toFixed(3);

            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
        } 
        else {
            answer.innerHTML = `<h2>Please provide a number !</h2>`;

        }

    });
})();