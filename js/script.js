/*Fonction servant à générer une carte Google*/
function myMap() {
	var myCenter = new google.maps.LatLng(44.776916, -0.660634); /*Définit les coordonnées du centre (ici Akema)*/
	var canvas = document.getElementById("map");
	var options = {center: myCenter, zoom: 11};/*Définit le centre et le niveau de zoom de la map*/
	var map = new google.maps.Map(canvas, options); /*Génère la map*/
	var marker = new google.maps.Marker({position: myCenter}); /*Génère un marqueur au centre de la map qui ici est Akema*/
	marker.setMap(map);
}
