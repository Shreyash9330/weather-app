


// const apiKey = "115f2438cebcd8028d05d187148c2812"; // <-- PUT your real API KEY here

// async function getWeather() {
//     const city = document.getElementById('cityInput').value;
//     if (!city) {
//         alert("Please enter a city name.");
//         return;
//     }
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("City not found");
//         }
//         const data = await response.json();
        
//         document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
//         document.getElementById('description').innerText = data.weather[0].description;
//         document.getElementById('temperature').innerText = `${data.main.temp} °C`;
        
//         // Weather icons based on condition
//         const mainWeather = data.weather[0].main;
//         let icon = '';

//         if (mainWeather === "Clear") {
//             icon = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // sun
//         } else if (mainWeather === "Clouds") {
//             icon = "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // cloud
//         } else if (mainWeather === "Rain") {
//             icon = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // rain
//         } else if (mainWeather === "Snow") {
//             icon = "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // snow
//         } else {
//             icon = "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"; // default
//         }

//         document.getElementById('weatherIcon').src = icon;
//         document.getElementById('weatherBox').style.display = "block";

//     } catch (error) {
//         alert("Something went wrong. Try again.");
//         console.log(error);
//     }
// }


const apiKey = "115f2438cebcd8028d05d187148c2812"; // Replace with your real API Key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        
        document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('temperature').innerText = `${data.main.temp} °C`;

        const weatherMain = data.weather[0].main.toLowerCase();
        const icon = document.getElementById('weatherIcon');

        if (weatherMain.includes("cloud")) {
            icon.innerHTML = "☁️";
        } else if (weatherMain.includes("rain")) {
            icon.innerHTML = "🌧️";
        } else if (weatherMain.includes("clear")) {
            icon.innerHTML = "☀️";
        } else if (weatherMain.includes("snow")) {
            icon.innerHTML = "❄️";
        } else {
            icon.innerHTML = "🌤️";
        }

        document.getElementById('weatherBox').classList.remove('hidden');

    } catch (error) {
        alert("Something went wrong. Try again.");
        console.log(error);
    }
}
