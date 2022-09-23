const allowLocation = document.getElementById("allow location");

getLocation.addEventListenuner('click', evt =>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let lattitude = position.coords.latitude;
            let longitiude = position.coords.longitude;

            let googleMapURL = 'https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400'
            const mapImage = document.getElementById("mapImage");
            mapImage.scr = googleMapURL;

            
            console.log(lattitude,longitiude);
        },error=>{
            console.log(error.code);
        });
    }else{
        console.log("Not Supported");
    }
}); 

