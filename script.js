// Clave de la API
let apiKey = '0e5d4bb4e7cee901cb6defc374ff9b14';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let restanteKelvin =  273.15

//Escuchas el evento onclik del boton buscar temperatura
document.getElementById('botonBusqueda').addEventListener('click', () => {

    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

//Funcion
function fetchDatosClima(ciudad){
//Conectar la API  q = quert / que sifica en español consulta
fetch (''+urlBase+'?q='+ciudad+'&appid='+ apiKey)
.then (data => data.json())
.then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    
    

    //Instanciamos al div que contendra el valor del clima
    const divDatosClima = document.getElementById('datosClima')
    //Cuando pulse el boton se tiene que vaciar el imput
    divDatosClima.innerHTML = ''

    //Obtener los datos de la api ************************
    //Nombre del pais
    const nombrePais = data.sys.country
    //Nombre de la ciudad
    const ciudadNombre = data.name
    //Temperatura de la ciudad
    const temperatura = data.main.temp
    //Descripcion de la ciudad
    const descripcion = data.weather[0].description

    //mostrar los datos a las etiquetas *******************

    const nombrePaisInfo = document.createElement('h2')
    nombrePaisInfo.textContent = nombrePais

    //Creamos un h2 desde javascript y asignamo el valor
    const ciudadTitulo = document.createElement('h3')
    ciudadTitulo.textContent = ciudadNombre 

    //Temperaura de la ciudad
    const temperaturaInfo = document.createElement('p')
    //Math.floor permite redondear los decimales hacia abajo
    temperaturaInfo.textContent = 'La temparatura es '+ Math.floor(temperatura - restanteKelvin)+'°C' 

    const descripcionCiudad = document.createElement('p')
    descripcionCiudad.textContent = 'La descripcion meteorologica es: ' + descripcion

    //appendChil es un funcion que nos permite meter div hijos a div padres solamnete si son creados de js
     divDatosClima.appendChild(nombrePaisInfo)
     divDatosClima.appendChild(ciudadTitulo)
     divDatosClima.appendChild(temperaturaInfo)
     divDatosClima.appendChild(descripcionCiudad)   
}


