let geo = navigator.geolocation;
var options = {
enableHighAccuracy: true,
timeout: 10000,
maximumAge: 0 };
if (geo)
{
geo.getCurrentPosition(success,err , options);
}
async function success(pos)
{
   latitude = await pos.coords.latitude;
   longitude =await pos.coords.longitude;
  
  document.getElementById('latitude').textContent = latitude;
  document.getElementById('longitude').textContent = longitude;
  
  mymap.flyTo([latitude , longitude], 15);
  L.marker([latitude , longitude]).addTo(mymap)
  .bindPopup('you are here')
  .openPopup();

}
function err(e)
{
alert('prob');
}



var mymap = L.map('issMap').setView([0,0], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

