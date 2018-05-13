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

function view_Rainhards_army(shields, crossbows){
    var shields,
        crossbows;
    //W przypadku nie uzupełnienia pola, przyjmuję liczbę 0
    if(!shields){
        shields = 0;
    }
    if(!crossbows){ 
        crossbows = 0;
    }  
    //Wyświetlam liczbę wojsk pod odpowiednimi grafikami
    number_of_shieldbearers_R.innerHTML = shields;
    number_of_crossbowmen_R.innerHTML = crossbows;
}

function view_Galahads_army(shields, crossbows){
    var shields,
        crossbows;
    if(!shields){
        shields = 0;
    }
    if(!crossbows){
        crossbows = 0;
    }  
    number_of_shieldbearers_G.innerHTML = shields;
    number_of_crossbowmen_G.innerHTML = crossbows;
}


function change_screen_content(){
    console.log(0);
    main_picture.src='grafika/Armia.jpg';
}


// **** EVENTS **** 
button_fill_in_Rainhards_army.onclick = function(e){
    var numberShieldbearersR = input_Rainhards_shieldbearers.value,
        numberCrossbowmenR = input_Rainhards_crossbowmen.value;
    view_Rainhards_army(number_shieldbearers_R, number_crossbowmen_R);  
}

button_fill_in_Galahads_army.onclick = function(e){
    var numberShieldbearersG = input_Galahads_shieldbearers.value,
        numberCrossbowmenG = input_Galahads_crossbowmen.value;
    view_Galahads_army(numberShieldbearersG, numberCrossbowmenG);  
}


button_start_the_battle.onclick = function(e){
    console.log(5)
    change_screen_content();
}

button_start_the_battle.onclick = change_screen_content();

button_start_the_battle.onclick = console.log(5);


