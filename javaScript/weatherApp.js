const myTimezone = document.querySelector(".my-timezone")
const weatherInfo = document.querySelector(".weather-info")
const myTemperture = document.querySelector(".my-temperture")

window.addEventListener(("load"), () => {
    let longitude
    let latitude

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            longitude = position.coords.longitude
            latitude = position.coords.latitude
            console.log(longitude, latitude)

            const api = `https://api.darksky.net/forecast/e2fea81b36c2588f1315c4ad2b721989/${latitude},${longitude}`

            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    const {temperature, summary, icon} = data.currently

                    const celsius = Math.floor((temperature-32)*(5/9))
                    myTemperture.textContent = `${celsius}°C`
                    weatherInfo.textContent = summary
                    myTimezone.textContent = data.timezone

                    setIcons(icon, document.querySelector(".weather-icon"))
                })
                
    })  
    }
    weatherInfo.textContent = `Geolocation is not supported by this browser.`



    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g, "_").toUpperCase()
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }

})