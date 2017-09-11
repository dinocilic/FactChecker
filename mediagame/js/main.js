$(document).ready(function(){
	$('.describ').fadeOut().fadeIn(2000);
});


// Mail icon animacija
function mailOpening(){
	let mail = document.getElementById('mail');

	mail.innerHTML = "&#xf2b6;";
	setTimeout(function(){
		mail.innerHTML = "&#xf0e0";
	}, 2000);
}

mailOpening();
setInterval(mailOpening, 3000);

// Folder icon animacija 
function folderOpening(){
	let folder = document.getElementById('folder');

	folder.innerHTML = "&#xf07c";
	setTimeout(function(){
		folder.innerHTML = "&#xf07b";
	}, 2000);
}

folderOpening();
setInterval(folderOpening, 3000);

// user icon animacija
function userOpening(){
	let user = document.getElementById('user');

	user.innerHTML = "&#xf2be";
	setTimeout(function(){
		user.innerHTML = "&#xf2bd";
	}, 2000);
}

userOpening();
setInterval(userOpening, 3000);

// animacija na load stranice 
$(document).ready(function(){
	$('#sadrzaj').fadeIn(2000);
});

$(document).ready(function(){
	$('#sadrzaj1').fadeIn(2000);
});

//Autentičnost slike
// DA
function pogresno(){
	let ne = document.getElementById('ne');
	let da = document.getElementById('da');
	let razlogZaDa = document.getElementById('razlogZaDa');

	if (da.click) {
		ne.disabled = true;
		razlogZaDa.style.display = 'block'
		razlogZaDa.innerHTML = "<div>"
		razlogZaDa.innerHTML += "<h5>Pogrešno. Ova slika nije autentična. </h5><br>"
		razlogZaDa.innerHTML += "Slika je objavljena godinu dana ranije tokom poplava u Njemačkoj. <br>"
		razlogZaDa.innerHTML += 'Sliku možeš provjeriti tako što češ koristiti Google Reverse Image pretragu. <br>'
		razlogZaDa.innerHTML += "Pošto nisi uspio/la ispuniti prvi zadatak, dobit češ dodatne slike za provjeru. <br>"
		razlogZaDa.innerHTML += "Klikni da nastaviš dalje <a href='igra1.html'><i class='fa fa-arrow-right' aria-hidden='true'></i></a>"
		razlogZaDa.innerHTML += "</div>"
	} else {
		razlogZaDa.style.display = "none";
	}
}


// Ne
function tacanOdgovor(){
	var ne = document.getElementById('ne');
	var da = document.getElementById('da');
	var razlog = document.getElementById('razlogZaNe');

	if (ne.click){
		da.disabled = true;
		razlog.style.display = "block";
		razlog.innerHTML = "<h5>Čestitamo, tačan odgovor.</h5>"
		razlog.innerHTML += "<p> "
		razlog.innerHTML += "Na osnovu čega ste zaključili da je slika autentična: "
		razlog.innerHTML += "Google Earth.a ili Google Maps? <br>"
		razlog.innerHTML +=	"Pored ovih alata najlakši način da provjeriš autentičnost fotografije jeste da koristiš tzv. reverse alate ";
		razlog.innerHTML +=	"za pretražovanje fotografija, poput <a target='_blank' href='https://tineye.com/>Tinyeye.com</a> ili <a target='_blank' href='https://images.google.com/'>Google Reverse Image.</a> <br>";
		razlog.innerHTML += "<br> Kreni dalje prema novom zadatku <a href='igra1.html'><i class='fa fa-arrow-right' aria-hidden='true'></i></a>";
	} else {
		razlog.style.display = 'none';
	}
}

// Kontent stranice u animaciji

$(document).ready(function(){
	$('.card-body').hide();
	$('#odgovor').hide();
	$('#procitaj').on('click', function(){
		$('.card-body').toggle(1000);
		$('#odgovor').toggle(1000);
	});
});


function playPogresno() {
	var pogresno = new Audio();
	pogresno.src = "../sounds/lose.mp3";
	document.getElementById('pogresno');
	pogresno.volume = 0.1;
	pogresno.play();
}

function playTacno(){
	var tacno = new Audio();
	tacno.src = "../sounds/correct.mp3";
	document.getElementById('tacno');
	tacno.volume = 0.2;
	tacno.play();
}

/* Zadatak 2 */

//Kredibilnost slike
// DA
function tacnoK(){
	let ne = document.getElementById('ne');
	let da = document.getElementById('da');
	let razlogZaDa = document.getElementById('nijeKredibilanOdgovor');

	if (da.click) {
		ne.disabled = true;
		razlogZaDa.style.display = 'block'
		razlogZaDa.innerHTML = "<div>";
		razlogZaDa.innerHTML += "<h5>Tačno!. </h5><br>";
		razlogZaDa.innerHTML += "<p>";
		razlogZaDa.innerHTML += "Veoma je lako posegnuti za senzacionalizmom i prenijeti vijest za koju očekujemo da če nam donijeti veliki broj posjeta, <br>";
		razlogZaDa.innerHTML += 'no važno je provjeriti kredibilitet izvora. <br>';
		razlogZaDa.innerHTML += "Ova vijest je objavljena na satiričnom portali i iako može nositi elemente istine, ovaj tip sadržaja se ne može smatrati kredibilnim.<br>";
		razlogZaDa.innerHTML += "Više objašnjenja o alatima koje možeš koristiti za verifikaciju izvora pogledaj na našoj Checklisti.";
		razlogZaDa.innerHTML += "</p>";
		razlogZaDa.innerHTML += "</div>";
	} else {
		razlogZaDa.style.display = "none";
	}
}


// Ne
function pogresnoK(){
	var ne = document.getElementById('ne');
	var da = document.getElementById('da');
	var razlog = document.getElementById('kredibilanOdgovor');

	if (ne.click){
		da.disabled = true;
		razlog.style.display = "block";
		razlog.innerHTML = "<h5>Pogrešno!</h5> <br>";
		razlog.innerHTML += "<p>";
		razlog.innerHTML += "Vijest je objavljena na satiričnom portalu i kao takva ne može biti kredibilan izvor. <br>";
		razlog.innerHTML +=	"Pored pažljive provjere stranica sa kojih preuzimamo sadržaje, također možeš da koristiš alate poput Who.is <br>";
		razlog.innerHTML +=	'putem kojih možeš doći do više informacija o portalu kojeg pretražuješ. <br>';
		razlog.innerHTML +=	"Kada se radi o pojedinačnim osobama, alati kao <a target='_blank' href='https://pipl.com/'>Pipl.com</a>, <a target='_blank' href='https://www.spokeo.com/'>Spokeo</a>, <a target='_blank' href='http://webmii.com/'>Webmii</a> mogu ti pomoći da dođeš do više informacija.";
		razlog.innerHTML += "</p>";
	} else {
		razlog.style.display = 'none';
	}
}