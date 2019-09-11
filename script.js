(function () {

    document.getElementById('table').style.visibility = "hidden";
    document.getElementById("run").addEventListener("click", function () {
        let cityID = document.getElementById("city").value;
        document.getElementById('table').style.visibility = "visible";


        var curent = "api.openweathermap.org/data/2.5/weather?q=" + cityID + "&appid=06843ba2a538a0f26e4d05e52e3de9ae";
        var total = "api.openweathermap.org/data/2.5/forecast?q=" + cityID + "&units=metric&APPID=06843ba2a538a0f26e4d05e52e3de9ae";


        fetch(curent)
            .then(function (resp) {
                return resp.json();

            }) // Convert data to json
            .then(function (data) {
                /* console.log(data);   */
                drawWeather(data);
            })
            .catch(function (err) {
                if (cityID === undefined) {
                    alert("Please enter the correct name of your location: Barcelona,ES/Hoboken,BE/Hoboken,US");
                }
            });


        function drawWeather(d) {
            var days = 5;
            for (var i = 0; i < 5; i++) {


                var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
                var description = d.weather[i].description;
                console.log(description);
                document.getElementById('description').innerHTML = description;
                document.getElementById('temp').innerHTML = celcius + '°';
                document.getElementById('location').innerHTML = d.name;

                if (description.indexOf('rain') > 0) {
                    document.body.className = 'rainy';
                    document.getElementById('icon').src = 'http://openweathermap.org/img/wn/10d@2x.png';
                } else if (description.indexOf('cloud') > 0) {
                    document.body.className = 'cloudy';
                    document.getElementById('icon').src = 'http://openweathermap.org/img/wn/03d@2x.png';
                } else if (description.indexOf('sunny') > 0) {
                    document.body.className = 'sunny';
                    document.getElementById('icon').src = 'http://openweathermap.org/img/wn/01d@2x.png';
                } else {
                    document.body.className = 'clear';
                    document.getElementById('icon').src = 'http://openweathermap.org/img/wn/01d@2x.png';
                }

                window.onload = function drawWeather() {
                };
            }
        }

        function today(i) {
            var today = new Date();
            var dd = today.getDate() + i;
            var mm = today.getMonth();

            today = dd + '/' + (mm + 1);
            return today;
        }

        fetch(total)
            .then(function (resp) {
                return resp.json();

            }) // Convert data to json
            .then(function (data) {
                console.log(data);
                document.getElementById('temp2').innerHTML = data.list[2].main.temp.toFixed(0) + '°';
                document.getElementById('description2').innerHTML = data.list[2].weather[0].description;
                document.getElementById('day1').innerHTML = today(1);

                document.getElementById('temp3').innerHTML = data.list[10].main.temp.toFixed(0) + '°';
                document.getElementById('description3').innerHTML = data.list[10].weather[0].description;
                document.getElementById('day2').innerHTML = today(2);

                document.getElementById('temp4').innerHTML = data.list[18].main.temp.toFixed(0) + '°';
                document.getElementById('description4').innerHTML = data.list[18].weather[0].description;
                document.getElementById('day3').innerHTML = today(3);

                document.getElementById('temp5').innerHTML = data.list[26].main.temp.toFixed(0) + '°';
                document.getElementById('description5').innerHTML = data.list[26].weather[0].description;
                document.getElementById('day4').innerHTML = today(4);


            });

    });

})();
