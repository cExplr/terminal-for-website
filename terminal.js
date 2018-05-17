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
            console.log("Input Command is " + inputCommand);
            
            if(inputCommand != 'clear')
             //content display go to next line
            contentDisplayArea.innerHTML+=inputCommand;


            //Deal with the commands here
            switch(inputCommand){
                case 'clear':
                    existingCommands[0]();
                    break;
                case 'whoami':
                    existingCommands[1]();
                    break;
                case 'lovewho':
                    existingCommands[2]();
                    break;
                default:
                    contentDisplayArea.innerHTML+= " : - command not found\n";
                    break;
            }

            // reset the input command text area
            inputCommandArea.value="";


            //Make sure the scrollbar move as overflow of div occurs
            commandContainer.scrollTop = commandContainer.scrollHeight;
            

        }

    });
});


/* Existing commands */
//To add commands: 
//  1.  add to this array
//  2.  add to switch case in eventlistener of keypress at keycode = 13 (ENTER)

var existingCommands = [
    function(){         //clear
        contentDisplayArea.innerHTML="";
    },
    function(){     //whoami
        contentDisplayArea.innerHTML+=" : Guest\n";
    },
    function(){   //lovewho
        contentDisplayArea.innerHTML+= ": Li Wen La...DUHH\n";
    }

    ];