document.addEventListener("DOMContentLoaded",()=>{
    if(!('geolocation' in navigator)){
        alert('o navegadore na tem suport ')
    }else{
        navigator.geolocation.getCurrentPosition(showposition)
    }
})

function showposition(local){
    let latitude = local.coords.latitude
    let longitude = local.coords.longitude

    document.getElementById("location").innerHTML = "<span> Latitude :</span>" +latitude + "<span> longitude :</span>"+longitude+""

    var mapOption = {
        center : [latitude,longitude],
        zoom : 16
    }

    var map = new L.map('map',mapOption)

    var layer = new L.TileLayer(' http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    map.addLayer(layer)

    var maker = new L.Marker([latitude,longitude])
    map.addLayer(maker).bindPopup('Njnaste')
}