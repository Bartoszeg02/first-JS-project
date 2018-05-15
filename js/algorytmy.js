var input_Rainhards_shieldbearers = document.getElementById("i_number_of_shieldbearers_R"),
    input_Rainhards_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_R")[0],

    number_of_shieldbearers_R = document.getElementById("number_of_shieldbearers_R"),
    number_of_crossbowmen_R = document.getElementById("number_of_crossbowmen_R"),

    button_fill_in_Rainhards_army = document.getElementById("b_fill_in_Rainhards_army");

    input_Galahads_shieldbearers = document.getElementById("i_number_of_shieldbearers_G"),
    input_Galahads_crossbowmen = document.getElementsByName("i_number_of_crossbowmen_G")[0],

    number_of_shieldbearers_G = document.getElementById("number_of_shieldbearers_G"),
    number_of_crossbowmen_G = document.getElementById("number_of_crossbowmen_G"),

    button_fill_in_Galahads_army = document.getElementById("b_fill_in_Galahads_army"),

    button_start_the_battle = document.getElementById("button_start_the_battle"),

    main_picture = document.getElementById("main_picture_1");
    title = document.getElementById("title");

    picture_banner_Rainhard = document.getElementById("banner_Rainhard");
    picture_banner_Galahad = document.getElementById("banner_Galahad");

function view_Rainhards_army(shields, crossbows){
    var shields = parseInt(shields),
        crossbows = parseInt(crossbows);
    //W przypadku nie uzupełnienia pola lub uzupełnienia go czymś innym niż liczba, przyjmij wartość 0
    if(!shields || typeof shields !== 'number'){
        shields = 0;
    }
    if(!crossbows || typeof crossbows !== 'number'){
        crossbows = 0;
    }  
    //Wyświetl liczbę wojsk pod odpowiednimi grafikami
    number_of_shieldbearers_R.innerHTML = shields;
    number_of_crossbowmen_R.innerHTML = crossbows;
}

function view_Galahads_army(shields, crossbows){
    var shields = parseInt(shields),
        crossbows = parseInt(crossbows);
    if(!shields || typeof shields !== 'number'){
        shields = 0;
    }
    if(!crossbows || typeof crossbows !== 'number'){
        crossbows = 0;
    }  
    number_of_shieldbearers_G.innerHTML = shields;
    number_of_crossbowmen_G.innerHTML = crossbows;
}

function change_screen_content(){
    main_picture.src = 'grafika/Armia1.jpg';  
    title.innerHTML = "Bitwa!";
}

function toggle_view(){
    picture_banner_Rainhard.setAttribute("class", "hidden");
    picture_banner_Galahad.setAttribute("class", "hidden");
}

function check_army_values(){
    if(number_of_shieldbearers_G == ""){
        number_of_shieldbearers_G.innerHTML = 0; 
    }
    //var e = new Error('Could not parse input');
    //throw e;
}

// **** EVENTS **** 
button_fill_in_Rainhards_army.onclick = function(){
    console.log(4);
    var numberShieldbearersR = input_Rainhards_shieldbearers.value,
        numberCrossbowmenR = input_Rainhards_crossbowmen.value;
    view_Rainhards_army(numberShieldbearersR, numberCrossbowmenR);  
}

button_fill_in_Galahads_army.onclick = function(){
    var numberShieldbearersG = input_Galahads_shieldbearers.value,
        numberCrossbowmenG = input_Galahads_crossbowmen.value;
    view_Galahads_army(numberShieldbearersG, numberCrossbowmenG);  
}


button_start_the_battle.onclick = function(){
    toggle_view();
    change_screen_content();
    check_army_values();
}


//  button_start_the_battle.onclick = change_screen_content;

//konwersja z .value do liczby

