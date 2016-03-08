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
		//Ne sme biti zgoraj - nad funkcijo izvedi prijavo!
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	
	
	var dodajOpomnik = function(event){
		var naziv_op =  document.querySelector("#naziv_opomnika").value;
		var cas_op = document.querySelector("#cas_opomnika").value;
		
		//Praznjenje polja
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += "\
		<div class='opomnik'> \
            <div class='naziv_opomnika'>" + naziv_op + "</div> \
            <div class='cas_opomnika'> Opomnik čez <span>" + cas_op + "</span> sekund.</div> \
		</div>";
		
	}
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
	
	
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