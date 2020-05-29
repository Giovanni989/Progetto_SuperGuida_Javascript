prova.onclick = function(){
  let apiKey = '009b9eafa0a67a4a1330fb8ec55240b5';
  let city = document.getElementById('weath').value;
  let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
  console.log(uri);
  var request = new XMLHttpRequest();
  request.open('GET', uri, true);
  request.onload = function() {
    if(request.status >= 200 && request.status <400){
      var data = JSON.parse(this.response);
      meteo = data.weather[0].main;
      console.log(meteo);
      var temp = data.main.temp;
      temp = parseInt(temp) - 273;
      var temp_min = data.main.temp_min;
      temp_min = parseInt(temp_min) - 273;
      var temp_max = data.main.temp_max;
      temp_max = parseInt(temp_max) - 273 ;
      var humidity = data.main.humidity;
      console.log(humidity);
      var pressure = data.main.pressure;
      console.log(pressure);
      var lon = data.coord.lon;
      console.log(lon);
      var lat = data.coord.lat;
      console.log(lat);
      var speed = data.wind.speed;
      console.log(speed);
      var deg = data.wind.deg;
      console.log(deg);
      switch (meteo) {
        case 'Clear':
        console.log(meteo='tempo sereno');
          break;
          case 'Clouds':
          console.log(meteo='cielo nuvoloso');
            break;
            case 'Broken Clouds':
            console.log(meteo='qualche nuvola sparsa');
              break;
              case 'Clear Sky':
              console.log(meteo='cielo sereno');
                break;
                case 'Haze':
                console.log(meteo='nebbia leggera');
                case 'Rain':
                  console.log(meteo='forte precipitazione');
                  break;
                  case 'Mist':
                    console.log(meteo='nebbia fitta');
                    break;
                    case 'Drizzle':
                    console.log(meteo='leggera precipitazione');
                    case 'Snow':
                    console.log(meteo='forte nevicata');
                      break;
                      case 'Fog':
                      console.log(meteo='Foschia');

        default:
      }
      ris1 = document.getElementById('ris1').innerHTML =  city ;
      console.log(data);
      ris2 = document.getElementById('ris2').innerHTML =  meteo ;
      console.log(data);
      ris3 = document.getElementById('ris3').innerHTML =  temp + "°C";
      console.log(data);
      ris4 = document.getElementById('ris4').innerHTML =  temp_min + "°C";
      console.log(data);
      ris5 = document.getElementById('ris5').innerHTML = temp_max + "°C";
      console.log(data);
      ris6 = document.getElementById('ris6').innerHTML =  humidity +  "%";
      console.log('ris6');
      ris7 = document.getElementById('ris7').innerHTML =  pressure +  " hpa";
      console.log('ris7');
      ris8 = document.getElementById('ris8').innerHTML =  lon + "°";
      console.log('ris8');
      ris9 = document.getElementById('ris9').innerHTML =  lat + "°";
      console.log('ris9');
      ris10 = document.getElementById('ris10').innerHTML = speed + "m/s";
      console.log('ris10');
      ris11 = document.getElementById('ris11').innerHTML =  deg + "°";
      console.log('ris11');
    }
  }
  request.send();
}
