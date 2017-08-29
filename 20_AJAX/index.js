function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        resolve(xhr.responseText);
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('previous');
let temperature = document.getElementById("temperature");
let windPower = document.getElementById("windPower");
let windDirection = document.getElementById("windDirection");
let time = document.getElementById("time");
let dateEl = document.getElementById("date");
let weatherObj;
let info;
let index = 0;
function showInfo(info) {
    temperature.innerText = `${(info.min_temp + info.max_temp)/2} °C`;
    windPower.innerText = info.wind_speed || "null";
    windDirection.innerText = info.wind_direction;
    let date = info.terrestrial_date.split("-");
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    dateEl.innerText = `${months[parseInt(date[1]) - 1]} ${date[2]}, ${date[0]}`;
    loading(false);
}
function getInfo(data) {
    weatherObj = data;
    info = data.results;
    showInfo(info[index]);
}
function showNext() {
    if (index + 1 < 10) {
        showInfo(info[++index]);
        if(index === 0 && weatherObj.previous == null) {
            prevButton.style.visibility = "hidden";
        } else {
            prevButton.style.visibility = "visible";
        }
    } else {
        index = 0;
        let script = document.createElement("script");
        script.src = weatherObj.next;
        document.getElementsByTagName("head")[0].appendChild(script);
        loading(true);
    }
}
function showPrev() {
    if (index - 1 >= 0) {
        showInfo(info[--index]);
        if(index === 0 && weatherObj.previous === null) {
            prevButton.style.visibility = "hidden";
        } else {
            prevButton.style.visibility = "visible";
        }
    } else {
        index = 9;
        let script = document.createElement("script");
        script.src = weatherObj.previous;
        document.getElementsByTagName("head")[0].appendChild(script);
        loading(true);
    }
}
function loading(state) {
    let loader = document.getElementById("loader");
    let weather = document.getElementById("weather");
    if(state) {
        loader.style.display = "block";
        weather.style.visibility = "hidden";
    } else {
        loader.style.display = "none";
        weather.style.visibility = "visible";
    }
}
nextButton.addEventListener("click",showNext);
prevButton.addEventListener("click",showPrev);
