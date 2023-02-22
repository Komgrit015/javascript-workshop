(function () {

    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");


    document.addEventListener('keydown', function(event){
        const key = event.code;
        if(key === 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in number of kilometers and click the button to convert the distance to miles";


        }
        else if (key === 'KeyM'){
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in number of miles and click the button to convert the distance to kilometers";
        }
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById("distance").value);

        if (distance){
            if (convertType == 'miles'){
                const conversion = (distance * 1.609344).toFixed(3);
    
                answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
            }

            else if (convertType == 'kilometers'){
                const conversion = (distance * 0.621371192).toFixed(3);
    
                answer.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;
            }
        }
        else {
            answerDiv.innerHTML = "<h2>Please provide a number !</h2>"
        }
    })

})();