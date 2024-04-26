//side menu 

let wrapper = document.querySelector(".wrapper")
let closeMenu = document.querySelector("#close-nav-menu")
let openMenu = document.querySelector("#open-nav-menu")

openMenu.onclick = function() {
  wrapper.style.right ="0"
}


closeMenu.onclick = function() {
  wrapper.style.right ="-100%"
}




 


//thumbnais slide start

function showIamge(imageIndex) {

  var mainImg = document.getElementById('mainImg');
  mainImg.src = './assets/gallery/image' + imageIndex + '.jpg';
  
}

//thumbnais slide end





//time greetings start

function timeGreetings() {

let currentHour = new Date ().getHours();
let greetingText;

if (currentHour <= 11) {
  
greetingText = "Good morning"

} else if (currentHour <= 17) {
  
  greetingText = "Good Afternoon"

} else if (currentHour >=18) {
  
  greetingText = "Good Evening"

} else {
  greetingText = "Welcome"
}

document.querySelector("#greeting").innerHTML = greetingText;
  
}

timeGreetings()

// time greetins end



//clock js start
function updateTime(){

const date = new Date ();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();



document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds;
}

updateTime();
 

setInterval(updateSeconds,1000);

//clock js end


//products js start

let products = {

data: [



{
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }




]


}



//footer 


  const currentYear = new Date().getFullYear();
  document.getElementById("markYear").innerHTML = "Emore Systems Ⓒ " + currentYear + "- All rights reserved";

//Weather info start



let weather = {
  apiKey: "0f6af693ec78ed77aecce48c17f21cfa",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  
  displayWeather: function (data) {
    const { name } = data;
    const { temp } = data.main;
    document.querySelector("#weather").innerText = "Weather in " + name;
   
    document.querySelector(".weather-group").innerText = temp + "°C";
   
  },

};


weather.fetchWeather("Nairobi");




//  temperature




