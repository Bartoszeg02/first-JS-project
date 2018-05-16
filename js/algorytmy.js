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

    main_picture = document.getElementById("main_picture_1"),
    title = document.getElementById("title"),

    picture_banner_Rainhard = document.getElementById("banner_Rainhard"),
    picture_banner_Galahad = document.getElementById("banner_Galahad"),

	//---------- battle report
	battle_report_window = document.getElementById("battle_report"), 
	battle_report_close_button = document.querySelector(".close_battle_report"),

	Rainhards_Army = {
		shieldbearers : {
			attack : 30,
			defense : 50,
			n : 0,
			html_n : number_of_shieldbearers_R
		},
		crossbowmen : {
			attack : 50,
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
			attack : 50,
			defense : 30,
			n : 0,
			html_n : number_of_crossbowmen_G
		},
	};

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
}

function toggle_view(){
    picture_banner_Rainhard.setAttribute("class", "hidden");
    picture_banner_Galahad.setAttribute("class", "hidden");
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


// **** EVENTS **** 
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
		view_army(Galahads_Army);  }

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

battle_report_close_button.onclick = close_battle_report;
