/*text declarations*/
var defaulttData = ""
var guestAtCexplr = "guest@c3xp1r ~ "

/*Element declarations*/
//Where processed command data gets displayed
var contentDisplayArea = document.getElementById("terminal-display-content");
var inputCommandArea = document.getElementById("id-terminal-command-input");
var inputCommand = inputCommandArea.value;
var commandContainer = document.getElementById("terminal-content");

//https://www.w3schools.com/jsref/obj_keyboardevent.asp
//https://stackoverflow.com/questions/3149362/capture-key-press-or-keydown-event-on-div-element

inputCommandArea.addEventListener("click",function(event){
    console.log("CLicked");
});


/* Event listener for keypress when enter is pressed*/
inputCommandArea.addEventListener("focus",function(event){

    console.log("Focus!");

    inputCommandArea.addEventListener("keypress",function(event){

        console.log("keypressed!");

        //https://css-tricks.com/snippets/javascript/javascript-keycodes/
        if(event.keyCode == 13){ // keycode : 13 is for enter 
            

            //For debugging purpose
            console.log("Enter Pressed!");

            //This is to prevent default submission/reload of page when enter is pressed
            event.preventDefault();

            //Deal with the command input here after pressing enter
            inputCommand = inputCommandArea.value;

            // reset the input command text area
            inputCommandArea.value="";

            //content display go to next line
            contentDisplayArea.innerHTML+=inputCommand+"\n";

            //Make sure the scrollbar move as overflow of div occurs
            commandContainer.scrollTop = commandContainer.scrollHeight;
            

        }

    });
});
