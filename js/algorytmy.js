var input_Rainhards_shieldbearers = document.getElementById("i_number_of_shieldbearers_R"),
	input_Rainhards_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_R")[0],
	label_number_of_Rainhards_shieldbearers = document.getElementsByName("i_number_of_shieldbearers_R"),
	label_number_of_Rainhards_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_R"),

	number_of_shieldbearers_R = document.getElementById("number_of_shieldbearers_R"),
	number_of_crossbowmen_R = document.getElementById("number_of_crossbowmen_R"),
	label_number_of_Galahads_shieldbearers = document.getElementsByName("i_number_of_shieldbearers_G"),
	label_number_of_Galahads_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_G"),

	//do wywalenia
	button_fill_in_Rainhards_army = document.getElementById("b_fill_in_Rainhards_army"),

	input_Galahads_shieldbearers = document.getElementById("i_number_of_shieldbearers_G"),
	input_Galahads_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_G")[0],

	number_of_shieldbearers_G = document.getElementById("number_of_shieldbearers_G"),
	number_of_crossbowmen_G = document.getElementById("number_of_crossbowmen_G"),

	//do wywalenia
	button_fill_in_Galahads_army = document.getElementById("b_fill_in_Galahads_army"),

	//nowe
	button_fill_in_army = {
		Rainhard: document.getElementById("b_fill_in_Rainhards_army"),
		Galahad: document.getElementById("b_fill_in_Galahads_army")
	},

	button_start_the_battle = document.getElementById("button_start_the_battle"),
	inscription_under_start_the_battle = document.querySelector("#start_battle_inscription"),

	main_picture = document.getElementById("main_picture_1"),
	title = document.getElementById("title"),

	picture_banner_Rainhard = document.getElementById("banner_Rainhard"),
	picture_banner_Galahad = document.getElementById("banner_Galahad"),

	//---------- battle report
	battle_report_window = document.getElementById("battle_report"),
	//battle_report_close_button = document.querySelector(".close_battle_report"),

	battle_report_round_number = document.getElementById("round"),
	battle_report_phase_name = document.getElementById("phase"),
	battle_report_phase_picture = document.getElementById("phase_1_picture"),

	casaulties_meter_Rainhard = document.getElementById("number_of_Rainhards_casualties"),
	casaulties_meter_Galahad = document.getElementById("number_of_Galahads_casualties"),

	statements = {
		Rainhard: document.getElementById("Rainhards_statement"),
		Galahad: document.getElementById("Galahads_statement")
	},

	next_phase_button = document.getElementById("next_phase_button"),
	next_phase_button_statement = document.querySelector("#next_phase_button_statement"),

	//---------- battle report
	battle_report_window = document.getElementById("end_of_battle_window");



Rainhards_Army = {
	shieldbearers: {
		attack: 30,
		defense: 50,
		n: 0,
		html_n: number_of_shieldbearers_R
	},
	crossbowmen: {
		attack: 45,
		defense: 30,
		n: 0,
		html_n: number_of_crossbowmen_R
		},
		},

	Galahads_Army = {
		shieldbearers: {
			attack: 30,
			defense: 50,
			n: 0,
			html_n: number_of_shieldbearers_G
		},
		crossbowmen: {
			attack: 45,
			defense: 30,
			n: 0,
			html_n: number_of_crossbowmen_G
		},
	},

	//liczba trafień do ekranu raport bitwy
	hits = 0;

function set_army(shields, crossbows, currentArmy) {
	function check_value(value) {
		value = parseInt(value);
		if (!value || typeof value !== 'number' || value < 0) {
			value = 0;
		}
		return value;
	}
	shields = check_value(shields);
	crossbows = check_value(crossbows);

	currentArmy.shieldbearers.n = shields;
	currentArmy.crossbowmen.n = crossbows;
}

function view_army(currentArmy) {
	function view_number(unit) {
		unit.html_n.innerHTML = unit.n;
	}
	view_number(currentArmy.shieldbearers);
	view_number(currentArmy.crossbowmen);
}

function change_screen_content() {
	main_picture.src = 'grafika/Armia1.jpg';
	button_start_the_battle.src = 'grafika/Bitwa2.png'
	title.innerHTML = "Bitwa!";
	inscription_under_start_the_battle.innerHTML = "Do boju!";
}

function toggle_view() {
	//picture_banner_Rainhard.setAttribute("class", "hidden");
	//picture_banner_Galahad.setAttribute("class", "hidden");
	input_Rainhards_shieldbearers.setAttribute("class", "hidden");
	input_Rainhards_crossbowmen.setAttribute("class", "hidden");
	//label_number_of_Rainhards_shieldbearers.removeAttribute("visible");
	//label_number_of_Rainhards_crossbowmen.setAttribute("class", "hidden");
	//button_fill_in_Rainhards_army.setAttribute("class", "hidden");
	//button_fill_in_Rainhards_army.removeAttribute("visible");


	input_Galahads_shieldbearers.setAttribute("class", "hidden");
	input_Galahads_crossbowmen.setAttribute("class", "hidden");
	//label_number_of_Galahads_shieldbearers.setAttribute("class", "hidden");
	//label_number_of_Galahads_crossbowmen.setAttribute("class", "hidden");
	//button_fill_in_Galahads_army.setAttribute("class", "hidden");
	///*** nie działa
	//input_Galahads_crossbowmen.setAttribute("visible");

	//battle_report_window.setAttribute("visible","");
	//battle_report_window.removeAttribute("visible");
}

function check_army_values() {
	if (number_of_shieldbearers_G.innerHTML === "") {
		number_of_shieldbearers_G.innerHTML = 0;
	}
	if (number_of_crossbowmen_G.innerHTML === "") {
		number_of_crossbowmen_G.innerHTML = 0;
	}
	if (number_of_shieldbearers_R.innerHTML === "") {
		number_of_shieldbearers_R.innerHTML = 0;
	}
	if (number_of_crossbowmen_R.innerHTML === "") {
		number_of_crossbowmen_R.innerHTML = 0;
	}
}

//--------------- Events
<<<<<<< HEAD
//nowe
//button_fill_in_army.army.onclick = function(){

button_fill_in_Rainhards_army.onclick = function () {
	var numberShieldbearersR = input_Rainhards_shieldbearers.value,
		numberCrossbowmenR = input_Rainhards_crossbowmen.value;
	set_army(numberShieldbearersR, numberCrossbowmenR, Rainhards_Army);
	view_army(Rainhards_Army);
}

button_fill_in_Galahads_army.onclick = function () {
	var numberShieldbearersG = input_Galahads_shieldbearers.value,
		numberCrossbowmenG = input_Galahads_crossbowmen.value;
	set_army(numberShieldbearersG, numberCrossbowmenG, Galahads_Army);
	view_army(Galahads_Army);
}

button_start_the_battle.onclick = function () {
	toggle_view();
	change_screen_content();
	check_army_values();
	battle_report_round_number.innerHTML = "Runda " + romanize(round);
	view_battle_report();
}

//--------------- battle report
function view_battle_report() {
	battle_report_window.setAttribute("visible", "");
}

function close_battle_report() {
	battle_report_window.removeAttribute("visible");
}

function hit_rolls(unit, attack) {
	hits = 0;
	hitRoll = 0;
	//dodać warunek co się dzieje jeżeli jest 0 atakujących - komunikat?
	for (var i = 0; i < unit; ++i) {
		hitRoll = Math.floor(Math.random() * 100 + 1);
		console.log(hitRoll);
		if (hitRoll <= attack) {
			hits = hits + 1;
		}
	}
	console.log("liczba obrażeń " + hits);
	return hits;
}

///funkcja zakłada że zawsze są tylko 2 typy przeciwników - rozszerzyć o uogólnienie funkcji
/// dodać procedurę która zmniejsza szanse tarczownikom na trafienie kuszników
function hits_allocation(hits, enemiesShieldbearers, enemiesCrossbowmen) {
	var chanceToHitShieldbearers = 0,
		hitsToShieldbearers = 0,
		hitsToCrossbowmen = 0,
		allocationRoll = 0;
	console.log("obrażenia do przydzielenia: " + hits);
	chanceToHitShieldbearers = enemiesShieldbearers / (enemiesShieldbearers + enemiesCrossbowmen) * 100;
	console.log("szansa na trafienie tarczownika: " + chanceToHitShieldbearers);
	for (var i = 0; i < hits; ++i) {
		allocationRoll = 0;
		allocationRoll = Math.random() * 100 + 1;
		if (allocationRoll <= chanceToHitShieldbearers) {
			hitsToShieldbearers = hitsToShieldbearers + 1;
			console.log("rzut: " + allocationRoll + " trafienie w tarczownika");
		} else {
			hitsToCrossbowmen = hitsToCrossbowmen + 1;
			console.log("rzut: " + allocationRoll + " trafienie w kusznika");
		}
	}
	console.log("trafiono " + hitsToShieldbearers + " tarczowników oraz " + hitsToCrossbowmen + " kuszników");
	return [hitsToShieldbearers, hitsToCrossbowmen];
}

///Dodać pomniejszanie liczby wojsk
function armour_check(allocatedHits, unitsArmour, numberOfUnits) {
	var armourPenetration = 0,
		casualties = 0;
	for (var i = 0; i < allocatedHits; ++i) {
		armourPenetration = Math.floor(Math.random() * 100 + 1);
		console.log("rzut na przebicie pancerza: " + armourPenetration);
		if (armourPenetration > unitsArmour) {
			///Do sprawdzenia ***
			//zabezpieczenie przed przekroczeniem przez liczbę zabitych liczby jednostek
			if (casualties === numberOfUnits) {
				casualties = casualties;
			}
			else {
				casualties = casualties + 1;
			}
		}
	}
	console.log("liczba zabitych to: " + casualties);
	return casualties;
}

///dodać info na początku komunikatu kto wywołał efekt
function Battle_Report(army, hits, hitArray, casaultiesArray) {
	var statement = statements[army];
	statement.innerHTML = "Uzyskano " + hits + " trafień" + "\n" + "Z czego " + hitArray[0] + " zostało ulokowanych w tarczowników a " + hitArray[1] + " w kuszników" + "\n" + "Poległo " + casaultiesArray[0] + " tarczowników oraz " + casaultiesArray[1] + " kuszników";
}

///W BUDOWIE
function check_end_of_battle_conditions() {
	var Rainhards_units = Rainhards_Army.shieldbearers.n + Rainhards_Army.crossbowmen.n,
		Galahads_units = Galahads_Army.shieldbearers.n + Galahads_Army.crossbowmen.n;
	if (Rainhards_units <= 0 || Galahads_units <= 0) {
		console.log("KONIEC BITWY");
		//end_of_battle_window.setAttribute("visible","");
		//battle_report_window.removeAttribute("visible");
	}
};

//Funkcja pobrana z internetu - zamiana liczby arabskiej na rzymską
function romanize(num) {
	var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
	for (i in lookup) {
		while (num >= lookup[i]) {
			roman += i;
			num -= lookup[i];
		}
	}
	return roman;
}


//------ Events - battle report
var round = 1,
	phase = 1,
	Rainhards_casaualties = 0,
	Galahads_casaualties = 0;

next_phase_button.onclick = function () {
	switch (phase) {
		case 1:
			console.log("***Faza ostrzału***")
			var casaultiesArray = [];
			//Ostrzał kuszników Rainharda
			hit_rolls(Rainhards_Army.crossbowmen.n, Rainhards_Army.crossbowmen.attack);
			hitArray = hits_allocation(hits, Galahads_Army.shieldbearers.n, Galahads_Army.crossbowmen.n);
			casaultiesArray[0] = armour_check(hitArray[0], Galahads_Army.shieldbearers.defense, Galahads_Army.shieldbearers.n);
			Galahads_Army.shieldbearers.n = Galahads_Army.shieldbearers.n - casaultiesArray[0];
			casaultiesArray[1] = armour_check(hitArray[1], Galahads_Army.crossbowmen.defense, Galahads_Army.crossbowmen.n);
			Galahads_Army.crossbowmen.n = Galahads_Army.crossbowmen.n - casaultiesArray[1];
			Battle_Report("Rainhard", hits, hitArray, casaultiesArray);
			//Aktualizacja licznika ran Galahada
			Galahads_casaualties = Galahads_casaualties + casaultiesArray[0] + casaultiesArray[1];
			casaulties_meter_Galahad.innerHTML = Galahads_casaualties;
			//Ostrzał kuszników Galahada
			hit_rolls(Galahads_Army.crossbowmen.n, Galahads_Army.crossbowmen.attack);
			hitArray = hits_allocation(hits, Rainhards_Army.shieldbearers.n, Rainhards_Army.crossbowmen.n);
			casaultiesArray[0] = armour_check(hitArray[0], Rainhards_Army.shieldbearers.defense, Rainhards_Army.shieldbearers.n);
			Rainhards_Army.shieldbearers.n = Rainhards_Army.shieldbearers.n - casaultiesArray[0];
			casaultiesArray[1] = armour_check(hitArray[1], Rainhards_Army.crossbowmen.defense, Rainhards_Army.crossbowmen.n);
			Rainhards_Army.crossbowmen.n = Rainhards_Army.crossbowmen.n - casaultiesArray[1];
			Battle_Report("Galahad", hits, hitArray, casaultiesArray);
			//Aktualizacja licznika ran Rainharda
			Rainhards_casaualties = Rainhards_casaualties + casaultiesArray[0] + casaultiesArray[1];
			casaulties_meter_Rainhard.innerHTML = Rainhards_casaualties;
			//Zmiana nazwy fazy, obrazka i podpisu pod przyciskiem zmiany fazy
			battle_report_phase_name.innerHTML = "Faza walki wręcz";
			battle_report_phase_picture.src = "grafika/WalkaWrecz.jpg";
			next_phase_button_statement.innerHTML = "Tarczownicy naprzód!";
			phase = phase + 1;
			break;
		case 2:
			console.log("***Faza walki wręcz***")
			var casaultiesArray = [];
			//Natarcie tarczowników Rainharda
			hit_rolls(Rainhards_Army.shieldbearers.n, Rainhards_Army.shieldbearers.attack);
			hitArray = hits_allocation(hits, Galahads_Army.shieldbearers.n, Galahads_Army.crossbowmen.n);
			casaultiesArray[0] = armour_check(hitArray[0], Galahads_Army.shieldbearers.defense, Galahads_Army.shieldbearers.n);
			Galahads_Army.shieldbearers.n = Galahads_Army.shieldbearers.n - casaultiesArray[0];
			casaultiesArray[1] = armour_check(hitArray[1], Galahads_Army.crossbowmen.defense, Galahads_Army.crossbowmen.n);
			Galahads_Army.crossbowmen.n = Galahads_Army.crossbowmen.n - casaultiesArray[1];
			Battle_Report("Rainhard", hits, hitArray, casaultiesArray);
			//Aktualizacja licznika ran Galahada
			Galahads_casaualties = Galahads_casaualties + casaultiesArray[0] + casaultiesArray[1];
			casaulties_meter_Galahad.innerHTML = Galahads_casaualties;
			//Natarcie tarczowników Galahada
			hit_rolls(Galahads_Army.shieldbearers.n, Galahads_Army.shieldbearers.attack);
			hitArray = hits_allocation(hits, Rainhards_Army.shieldbearers.n, Rainhards_Army.crossbowmen.n);
			casaultiesArray[0] = armour_check(hitArray[0], Rainhards_Army.shieldbearers.defense, Rainhards_Army.shieldbearers.n);
			Rainhards_Army.shieldbearers.n = Rainhards_Army.shieldbearers.n - casaultiesArray[0];
			casaultiesArray[1] = armour_check(hitArray[1], Rainhards_Army.crossbowmen.defense, Rainhards_Army.crossbowmen.n);
			Rainhards_Army.crossbowmen.n = Rainhards_Army.crossbowmen.n - casaultiesArray[0];
			Battle_Report("Galahad", hits, hitArray, casaultiesArray);
			//Aktualizacja licznika ran Rainharda
			Rainhards_casaualties = Rainhards_casaualties + casaultiesArray[0] + casaultiesArray[1];
			casaulties_meter_Rainhard.innerHTML = Rainhards_casaualties;
			//Zmiana nazwy fazy, obrazka i podpisu pod przyciskiem zmiany fazy
			battle_report_phase_name.innerHTML = "Faza przegrupowania";
			battle_report_phase_picture.src = "grafika/Przegrupowanie1.jpg";
			next_phase_button_statement.innerHTML = "Przegrupować się!";
			phase = phase + 1;
			break;
		case 3:
			console.log("***Koniec rundy walki***");
			view_army(Rainhards_Army);
			view_army(Galahads_Army);
			close_battle_report();
			battle_report_phase_name.innerHTML = "Faza ostrzału";
			battle_report_phase_picture.src = "grafika/Faza_ostrzału.jpg";
			phase = 1;
			round = round + 1;
			break;
		default:
	}
	check_end_of_battle_conditions();
}

//battle_report_close_button.onclick = close_battle_report;

//aktualizacja ekranu głównego po rozpoczęciu bitwy - usunięcie zbędnych pól
//Dodać etap zakończenia rundy - co po zamknieciu ekranu bitwy
//zakończenie bitwy - jedna armia zniszczona - w budowie
//kusznicy R mogą zejść na minus
// nie wyświetlać ekranu walki od razu po przejściu do bitwy

//CSSy

