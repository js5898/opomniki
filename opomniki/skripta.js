//dodan event load - pocaka, da se stran nalozi

window.addEventListener('load', function() {
	//stran nalozena
		//--> Ob kliku na gumb se zvede funkcija izvediPrijavo

	
	var izvediPrijavo = function(event) {
		
		var uporabnik=document.querySelector("#uporabnisko_ime").value;		//Ce na gradniku kliknemo value, dobimo vrednost, ki jo je uporabnik vnesel
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		// . je za classe, # je za idje --> ID ima en gradnik, class jih lahko ima več
		document.querySelector(".pokrivalo").style.visibility="hidden";
	}
		
		document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});