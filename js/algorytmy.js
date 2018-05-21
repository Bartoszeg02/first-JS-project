var input_Rainhards_shieldbearers = document.getElementById("i_number_of_shieldbearers_R"),
    input_Rainhards_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_R")[0],

    number_of_shieldbearers_R = document.getElementById("number_of_shieldbearers_R"),
    number_of_crossbowmen_R = document.getElementById("number_of_crossbowmen_R"),

    button_fill_in_Rainhards_army = document.getElementById("b_fill_in_Rainhards_army"),

    input_Galahads_shieldbearers = document.getElementById("i_number_of_shieldbearers_G"),
    input_Galahads_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_G")[0],

    number_of_shieldbearers_G = document.getElementById("number_of_shieldbearers_G"),
    number_of_crossbowmen_G = document.getElementById("number_of_crossbowmen_G"),

    button_fill_in_Galahads_army = document.getElementById("b_fill_in_Galahads_army"),

    button_start_the_battle = document.getElementById("button_start_the_battle"),
	inscription_under_start_the_battle = document.querySelector("#start_battle_inscription"),

    main_picture = document.getElementById("main_picture_1"),
    title = document.getElementById("title"),

    picture_banner_Rainhard = document.getElementById("banner_Rainhard"),
    picture_banner_Galahad = document.getElementById("banner_Galahad"),

	//---------- battle report
	battle_report_window = document.getElementById("battle_report"), 
	battle_report_close_button = document.querySelector(".close_battle_report"),

	Rainhards_statement = document.getElementById("Rainhards_statement"),
	next_phase_button = document.getElementById("next_phase_button"),



	Rainhards_Army = {
		shieldbearers : {
			attack : 30,
			defense : 50,
			n : 0,
			html_n : number_of_shieldbearers_R
		},
		crossbowmen : {
			attack : 45,
			defense : 30,
			n : 0,
			html_n : number_of_crossbowmen_R
		},
	};
 
	Galahads_Army = {
		shieldbearers : {
			attack : 30,
			defense : 50,
			n : 0,
			html_n : number_of_shieldbearers_G
		},
		crossbowmen : {
			attack : 45,
			defense : 30,
			n : 0,
			html_n : number_of_crossbowmen_G
		},
	};

	//liczba trafień do ekranu raport bitwy
	hits = 0; 


function set_army (shields, crossbows, currentArmy){
	function check_value (value){
		value = parseInt(value);
		if(!value || typeof value !== 'number' || value < 0){
			value = 0;
		}
		return value;
	}
	shields = check_value(shields);
	crossbows = check_value(crossbows);	
    
	currentArmy.shieldbearers.n = shields;
	currentArmy.crossbowmen.n = crossbows;
}

function view_army (currentArmy){
	function view_number (unit){
		unit.html_n.innerHTML = unit.n;
	}
	view_number(currentArmy.shieldbearers);
	view_number(currentArmy.crossbowmen);
}

function change_screen_content(){
    main_picture.src = 'grafika/Armia1.jpg';  
    button_start_the_battle.src = 'grafika/Bitwa2.png'
	title.innerHTML = "Bitwa!";
	inscription_under_start_the_battle.innerHTML = "Do ataku!";
}

function toggle_view(){
    picture_banner_Rainhard.setAttribute("class", "hidden");
	picture_banner_Galahad.setAttribute("class", "hidden");
	
	input_Galahads_crossbowmen.removeAttribute("visible");
	
}

function check_army_values(){
    if(number_of_shieldbearers_G.innerHTML === ""){
        number_of_shieldbearers_G.innerHTML = 0; 
    }
    if(number_of_crossbowmen_G.innerHTML === ""){
        number_of_crossbowmen_G.innerHTML = 0; 
    }
    if(number_of_shieldbearers_R.innerHTML === ""){
        number_of_shieldbearers_R.innerHTML = 0; 
    }
    if(number_of_crossbowmen_R.innerHTML === ""){
        number_of_crossbowmen_R.innerHTML = 0; 
    }
}

//--------------- Events
button_fill_in_Rainhards_army.onclick = function(){
    var numberShieldbearersR = input_Rainhards_shieldbearers.value,
		numberCrossbowmenR = input_Rainhards_crossbowmen.value;
	set_army(numberShieldbearersR, numberCrossbowmenR, Rainhards_Army);	
    view_army(Rainhards_Army);  
}

button_fill_in_Galahads_army.onclick = function(){
    var numberShieldbearersG = input_Galahads_shieldbearers.value,
        numberCrossbowmenG = input_Galahads_crossbowmen.value;
		set_army(numberShieldbearersG, numberCrossbowmenG, Galahads_Army);	
		view_army(Galahads_Army);  
}

button_start_the_battle.onclick = function(){
    toggle_view();
    change_screen_content();
	check_army_values();

	view_battle_report();
}


//--------------- battle report
function view_battle_report (){
	battle_report_window.setAttribute("visible","");
}

function close_battle_report (){
	battle_report_window.removeAttribute("visible");
}

function hit_rolls(unit, attack){
	hits = 0;
	hitRoll = 0; 
	//dodać warunek co się dzieje jeżeli jest 0 atakujących - komunikat?
	for(var i = 0; i < unit; ++i){
		hitRoll = Math.floor(Math.random()*100 + 1);
		console.log(hitRoll);
		if(hitRoll <= attack){
			hits = hits + 1;
		}
	}
	console.log("liczba obrażeń " + hits);
	Rainhards_statement.innerHTML = "liczba uzyskanych trafień to: " + hits;
	return hits;
}

//funkcja zakłada że zawsze są tylko 2 typy przeciwników - rozszerzyć o uogólnienie funkcji
function hits_allocation(hits, enemiesShieldbearers, enemiesCrossbowmen){
	var	chanceToHitShieldbearers = 0,
		hitsToShieldbearers = 0,
		hitsToCrossbowmen = 0,
		allocationRoll = 0;
		console.log("obrażenia do przydzielenia: " + hits);
		chanceToHitShieldbearers = enemiesShieldbearers / (enemiesShieldbearers + enemiesCrossbowmen) * 100;
		console.log("szansa na trafienie tarczownika: " + chanceToHitShieldbearers);
		for(var i = 0; i < hits; ++i){
			allocationRoll = 0;
			allocationRoll = Math.random() * 100 + 1;
			if(allocationRoll <= chanceToHitShieldbearers){
				hitsToShieldbearers = hitsToShieldbearers + 1;
				console.log("rzut: " + allocationRoll + " trafienie w tarczownika");
			}else{
				hitsToCrossbowmen = hitsToCrossbowmen + 1;
				console.log("rzut: " + allocationRoll + " trafienie w kusznika");
			}
		}
		console.log("trafiono " + hitsToShieldbearers + " tarczowników oraz " + hitsToCrossbowmen + " kuszników");
		return [hitsToShieldbearers, hitsToCrossbowmen];
	}

	//Dodać pomniejszanie liczby wojsk
	function armour_check(allocatedHits, unitsArmour){
		var armourPenetration = 0;
			casaulties = 0;
			for(var i = 0; i < allocatedHits; ++i){
				armourPenetration = Math.floor(Math.random()*100 + 1);
				console.log("rzut na przebicie pancerza: " + armourPenetration);
				if(armourPenetration > unitsArmour){
					casaulties = casaulties + 1;}
			}
			console.log("liczba zabitych to: " + casaulties);
			return casaulties;
		}

//Dodać raportowanie
//Dodać ataki Galahada
//Dodać etap walki wręcz
//Dodać etap zakończenia rundy


//------ Events
next_phase_button.onclick = function(){
	hit_rolls(Rainhards_Army.crossbowmen.n, Rainhards_Army.crossbowmen.attack);
	hitArray = hits_allocation(hits, Galahads_Army.shieldbearers.n, Galahads_Army.crossbowmen.n);
	armour_check(hitArray[0], Galahads_Army.shieldbearers.defense);
	armour_check(hitArray[1], Galahads_Army.crossbowmen.defense);
}

battle_report_close_button.onclick = close_battle_report;


