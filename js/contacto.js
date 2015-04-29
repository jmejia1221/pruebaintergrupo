(function(){

	var URL = "http://api.randomuser.me/";
	var $body = $("body");

	datos = {};

	datos.contact;
	datos.direction;
	datos.email;
	datos.picture;

	$.getJSON(URL, datos, function(data){
		var texto = "";
		var user = data.results[0].user;

		$.each(datos.user, function(i, user){
			var texto += "<div class='cuadro'>";
			var texto += "<p>" + user.location.street + "</p>";
			var texto += "</div>";
		})
		console.log(datos.direction = user.location.street);
	});

	// function getNewContact(data){
	// 	datos.contact = user.name.first + " " + user.name.last;
	// 	// datos.direction = user.location.street;

	// 	renderTemplate(datos);
	// }

	// function activateTemplate(id){
	// 	var t = document.querySelector(id);
	// 	return document.importNode(t.content, true);
	// }

	// function renderTemplate(datos){
	// 	var clone = activateTemplate("#template--contact");

	// 	clone.querySelector("[data-name='women']").innerHTML = datos.contact;

	// 	$( $body ).append(clone);
	// }

})();

