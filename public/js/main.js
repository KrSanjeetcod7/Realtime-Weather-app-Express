const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Plz.. Write The Name Before Search"
        datahide.classList.add('data_hide');
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bc0cac9d833035e2d3ccd28940dd82f1`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            // console.log(data);
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun'color='orange';></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud' color='#f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class= 'fas fa-rain' color='#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class= 'fas fa-sun' color='#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        } catch{
            city_name.innerText = "Plz.. Enter The City Name Correctly";
            datahide.classList.add('data_hide');
        }
      
    }

}
submitBtn.addEventListener('click',getInfo);