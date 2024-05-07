// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
var fungusHP = 100;

var myAttackP = 100;

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleSubmit(event) {

    //classList returns the class name as an Array 
    let buttontype = event.target.classList

    //will not return true if 'attack-btn arcane-scepter' is used only is 'arcane-scepter'

    if (buttontype.contains('arcane-scepter')) {




        myAttackP -= 12
        fungusHP -= 14


        //did't work at first but later ended up working
        updateHeader()

    }

    if (buttontype.contains('entangle')) {

        myAttackP -= 23
        fungusHP -= 9

        updateHeader()
    }

    if (buttontype.contains('dragon-blade')) {
        myAttackP -= 38
        fungusHP -= 47

        updateHeader()
    }

    if (buttontype.contains('star-fire')) {
        myAttackP -= 33
        fungusHP -= 25

        updateHeader()
    }

    // if(buttontype.toString()=="<button onClick="handleSubmit(event)" class="attack-btn arcane-scepter"></button>")


}

function updateHeader() {

    let aptext = document.getElementById("ap-text")

    let apmeter = document.getElementById("ap-meter")

    aptext.innerHTML = `${myAttackP} AP`
    apmeter.value = myAttackP



    let hptext = document.getElementById("hp-text")

    //returns the hpmeter and its attributes 
    let hpmeter = document.getElementById("hp-meter")

    hptext.innerHTML = `${fungusHP} HP`
    hpmeter.value = fungusHP

    //let fungus = document.getElementsById("freaky-fungus walk")

    //console.log(fungus.classList)

    //verify the ordering of these two if statements
    if (fungusHP < 50) {

        //when using setInterval don't use () when calling function
        setInterval(increaseHP, 1000)



    }

    if (fungusHP <= 0) {
        let fungus = document.getElementById("freaky-fungus")

        fungus.classList.add("dead")
        // fungus.classList.add("freaky-fungus dead")
        fungus.classList.remove("walk")

    }

    if (myAttackP <= 0) {

        let fungus = document.getElementById("freaky-fungus")

        let buttons = document.querySelectorAll("button");



        for (button of buttons) {
            button.disabled = true;
        }

        fungus.classList.add("jump")
        // fungus.classList.add("freaky-fungus jump")
        fungus.classList.remove("walk")

    }


}

function increaseHP() {


    let fungus = document.getElementById("freaky-fungus")

    //if statement stops counting after death or fungus win
    if (fungus.classList.contains("walk")) {
        fungusHP++;

        let hptext = document.getElementById("hp-text")

        //returns the hpmeter and its attributes 
        let hpmeter = document.getElementById("hp-meter")
        hptext.innerHTML = `${fungusHP} HP`
        hpmeter.value = fungusHP

    }
}

