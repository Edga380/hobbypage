/* Variables */
var first_button = true;
var second_button = true;
var third_button = true;
var fourth_button = true;
var button_pressed = false;
var position = 1;
var stop_from_interaction = false;
/* */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        console.log("Document ready!");
        SlideShow();
    }
};
document.getElementById("img01-animation").onclick = function (){
    if(position == 1){
        window.location.href = "bubble-space-wars.html";
        return false;
    }
    else{
        button_First();
    }
};
document.getElementById("img02-animation").onclick = function (){
    if(position == 4){
        window.location.href = "Labyrinth2d.html";
        return false;
    }
    else{
        button_Fourth();
    }
};
document.getElementById("img03-animation").onclick = function (){
    if(position == 3){
        window.location.href = "#";
        return false;
    }
    else{
        button_Third();
    }
};
document.getElementById("img04-animation").onclick = function (){
    if(position == 2){
        window.location.href = "#";
        return false;
    }
    else{
        button_Second();
    }
};
/* Reusable functions */
function First_Animation(){
    document.getElementById("img01-animation").style.animationName = "img01-front-to-left";
    document.getElementById("img02-animation").style.animationName = "img02-left-to-back";
    document.getElementById("img03-animation").style.animationName = "img03-back-to-right";
    document.getElementById("img04-animation").style.animationName = "img04-right-to-front";
    document.getElementById("first-button").style.backgroundColor = "#051833";
    document.getElementById("second-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
};
function Second_Animation(){
    document.getElementById("img01-animation").style.animationName = "img01-left-to-back";
    document.getElementById("img02-animation").style.animationName = "img02-back-to-right";
    document.getElementById("img03-animation").style.animationName = "img03-right-to-front";
    document.getElementById("img04-animation").style.animationName = "img04-front-to-left";
    document.getElementById("second-button").style.backgroundColor = "#051833";
    document.getElementById("third-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
};
function Third_Animation(){
    document.getElementById("img01-animation").style.animationName = "img01-back-to-right";
    document.getElementById("img02-animation").style.animationName = "img02-right-to-front";
    document.getElementById("img03-animation").style.animationName = "img03-front-to-left";
    document.getElementById("img04-animation").style.animationName = "img04-left-to-back";
    document.getElementById("third-button").style.backgroundColor = "#051833";
    document.getElementById("fourth-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
};
function Fourth_Animation(){
    document.getElementById("img01-animation").style.animationName = "img01-right-to-front";
    document.getElementById("img02-animation").style.animationName = "img02-front-to-left";
    document.getElementById("img03-animation").style.animationName = "img03-left-to-back";
    document.getElementById("img04-animation").style.animationName = "img04-back-to-right";
    document.getElementById("fourth-button").style.backgroundColor = "#051833";
    document.getElementById("first-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
};
function Reset_Anim_Duration(){
    document.getElementById("img01-animation").style.animationDuration = "0.5s";
    document.getElementById("img02-animation").style.animationDuration = "0.5s";
    document.getElementById("img03-animation").style.animationDuration = "0.5s";
    document.getElementById("img04-animation").style.animationDuration = "0.5s";
};

/* FIRST BUTTON */
document.getElementById("first-button").onclick = function(){
    button_First();
};
function button_First() {
    console.log("first button");
    if(first_button == true){
        if(position == 2){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Second_Animation();
                position = 3;
                SlideShowVar = setTimeout(function(){
                    Third_Animation();
                    position = 4;
                    SlideShowVar = setTimeout(function(){
                        Fourth_Animation();
                        position = 1;
                        Declare_buttons_true();
                        SlideShow();
                    }, 200);
                }, 200);
            }, 200);
        }
        else if(position == 3){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Third_Animation();
                position = 4;
                SlideShowVar = setTimeout(function(){
                    Fourth_Animation();
                    position = 1;
                    Declare_buttons_true();
                    SlideShow();
                }, 200);
            }, 200);
        }
        else if(position == 4){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Fourth_Animation();
                position = 1;
                Declare_buttons_true();
                SlideShow();
            }, 200);
        }
    }
}
/* SECOND BUTTON */
document.getElementById("second-button").onclick = function(){
    button_Second();
};
function button_Second() {
    if(second_button == true){
        if(position == 1){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                First_Animation();
                position = 2;
                Declare_buttons_true();
                SlideShow();
            }, 200);
        }
        else if(position == 3){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Third_Animation();
                position = 4;
                SlideShowVar = setTimeout(function(){
                    Fourth_Animation();
                    position = 1;
                    SlideShowVar = setTimeout(function(){
                        First_Animation();
                        position = 2;
                        Declare_buttons_true();
                    SlideShow();
                    }, 200);
                }, 200);
            }, 200);
        }
        else if(position == 4){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Fourth_Animation();
                position = 1;
                SlideShowVar = setTimeout(function(){
                    First_Animation();
                    position = 2;
                    Declare_buttons_true();
                    SlideShow();
                }, 200);
            }, 200);
        }
    }
}
/* THIRD BUTTON */
document.getElementById("third-button").onclick = function(){
    button_Third();
};
function button_Third() {
    if(third_button == true){
        if(position == 1){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                First_Animation();
                position = 2;
                SlideShowVar = setTimeout(function(){
                    Second_Animation();
                    position = 3;
                    Declare_buttons_true();
                    SlideShow();
                }, 200);
            }, 200);
        }
        else if(position == 2){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Second_Animation();
                position = 3;
                Declare_buttons_true();
                SlideShow();
            }, 200);
        }
        else if(position == 4){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Fourth_Animation();
                position = 1;
                SlideShowVar = setTimeout(function(){
                    First_Animation();
                    position = 2;
                    SlideShowVar = setTimeout(function(){
                        Second_Animation();
                        position = 3;
                        Declare_buttons_true();
                        SlideShow();
                    }, 200);
                }, 200);
            }, 200);
        }
    }
}
/* FOURTH BUTTON */
document.getElementById("fourth-button").onclick = function(){
    button_Fourth();
};
function button_Fourth() {
    if(fourth_button == true){
        if(position == 1){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                First_Animation();
                position = 3;
                SlideShowVar = setTimeout(function(){
                    Second_Animation();
                    position = 4;
                    SlideShowVar = setTimeout(function(){
                        Third_Animation();
                        position = 4;
                        Declare_buttons_true();
                        SlideShow();
                    }, 200);
                }, 200);
            }, 200);
        }
        else if(position == 2){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Second_Animation();
                position = 3;
                SlideShowVar = setTimeout(function(){
                    Third_Animation();
                    position = 4;
                    Declare_buttons_true();
                    SlideShow();
                }, 200);
            }, 200);
        }
        else if(position == 3){
            Change_animation_speed_all_button_false();
            clearTimeout(SlideShowVar);
            SlideShowVar = setTimeout(function(){
                Third_Animation();
                position = 4;
                Declare_buttons_true();
                SlideShow();
            }, 200);
        }
    }
}
/* Change all animation speed and declare all buttons false state */

function Change_animation_speed_all_button_false(){
    first_button = false;
    second_button = false;
    third_button = false;
    fourth_button = false;
    button_pressed = true;
    document.getElementById("img01-animation").style.animationDuration = "0.2s";
    document.getElementById("img02-animation").style.animationDuration = "0.2s";
    document.getElementById("img03-animation").style.animationDuration = "0.2s";
    document.getElementById("img04-animation").style.animationDuration = "0.2s";
}

/* Declare all button variables true */

function Declare_buttons_true(){
    first_button = true;
    second_button = true;
    third_button = true;
    fourth_button = true;
    button_pressed = false;
};

/* SlideShow */
function SlideShow(){
    if(position == 1){
        document.getElementById("first-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
        SlideShowVar = setTimeout(function(){
            First_Animation();
            Reset_Anim_Duration();
            position = 2;
            SlideShowVar = setTimeout(function(){
                Second_Animation();
                position = 3;
                SlideShowVar = setTimeout(function(){
                    Third_Animation();
                    position = 4;
                    SlideShowVar = setTimeout(function(){
                        Fourth_Animation();
                        position = 1;
                        SlideShow();
                    }, 8000);
                }, 8000);
            }, 8000);
        }, 8000)
    }
    else if(position == 2){
        document.getElementById("second-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
        SlideShowVar = setTimeout(function(){
            Second_Animation();
            Reset_Anim_Duration();
            position = 3;
            SlideShowVar = setTimeout(function(){
                Third_Animation();
                position = 4;
                SlideShowVar = setTimeout(function(){
                    Fourth_Animation();
                    position = 1;
                    SlideShowVar = setTimeout(function(){
                        First_Animation();
                        position = 2;
                        SlideShow();
                    }, 8000);
                }, 8000);
            }, 8000);
        }, 8000);
    }
    else if(position == 3){
        document.getElementById("third-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
        SlideShowVar = setTimeout(function(){
            Third_Animation();
            Reset_Anim_Duration();
            position = 4;
            SlideShowVar = setTimeout(function(){
                Fourth_Animation();
                position = 1;
                SlideShowVar = setTimeout(function(){
                    First_Animation();
                    position = 2;
                    SlideShowVar = setTimeout(function(){
                        Second_Animation();
                        position = 3;
                        SlideShow();
                    }, 8000);
                }, 8000);
            }, 8000);
        }, 8000);
    }
    else if(position == 4){
        document.getElementById("fourth-button").style.backgroundColor = "rgba(50, 210, 255, 0.5)";
        SlideShowVar = setTimeout(function(){
            Fourth_Animation();
            Reset_Anim_Duration();
            position = 1;
            SlideShowVar = setTimeout(function(){
                First_Animation();
                position = 2;
                SlideShowVar = setTimeout(function(){
                    Second_Animation();
                    position = 3;
                    SlideShowVar = setTimeout(function(){
                        Third_Animation();
                        position = 4;
                        SlideShow();
                    }, 8000);
                }, 8000);
            }, 8000);
        }, 8000);
    }
};