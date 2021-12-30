var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ae4efa771bec445ae7940b0febb33e9c')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Wrong city name!"))

})