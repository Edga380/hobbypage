
var all_images = document.querySelectorAll(".slideShow-images-container-img");
var total_px = (155 * all_images.length) - 700;
var plus_minus_Px = 155;
var number_of_presses = 0;
var image_number_left = 0;
var image_number_right = all_images.length - 1;
var move_left_right = false;
var how_much_to_move = 0;

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        AutoPlay_SlideShow();
    }
};

function Mouse_Enter_Img(){
    clearTimeout(autoplay);
};

function Mouse_Leave_Img(){
    AutoPlay_SlideShow();
};
function Image_Clicked(image_number){
    if(image_number < 2){
        if(how_much_to_move <= 200){
            how_much_to_move -= how_much_to_move;
            all_images[1].style.right = how_much_to_move;
            console.log(how_much_to_move);
            for (let i = 0; i < all_images.length; i++) {
                all_images[i].style.right = how_much_to_move + "px";
            };
        }
        image_number_left = image_number;
        image_number_right = all_images.length - image_number;
        number_of_presses = image_number;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number + ".png')");
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].classList.remove("active");
          }
        all_images[image_number].classList.add("active");
        if(image_number_left == 0){
            move_left_right = false;
        }
    }
    else if(image_number >= 2 && image_number < all_images.length - 2){
        image_number_left = image_number;
        image_number_right = all_images.length - image_number;
        number_of_presses = image_number;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number + ".png')");
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].classList.remove("active");
          }
        all_images[image_number].classList.add("active");
        how_much_to_move = 350 - image_number * plus_minus_Px;
        if(how_much_to_move < 0){
            how_much_to_move *= -1;
            how_much_to_move += 77.5;
        }
        all_images[1].style.right = how_much_to_move;
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
    }
    else if(image_number >= all_images.length - 2){
        image_number_left = image_number;
        image_number_right = (all_images.length - image_number) - 1;
        number_of_presses = image_number;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number + ".png')");
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].classList.remove("active");
          }
        all_images[image_number].classList.remove("active");
        how_much_to_move = how_much_to_move + (total_px - how_much_to_move);
        all_images[1].style.right = how_much_to_move;
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
        if(image_number_left == all_images.length - 1){
            move_left_right = true;
        }
    }
}

document.getElementById("slideShow-button-right").onclick = function(){
    move_Right();
};
function move_Right () {
    if(image_number_left == 0){
        image_number_left++;
        image_number_right--;
        number_of_presses++;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left - 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
    }
    else if(image_number_left >= 1 && image_number_left < all_images.length - 3){
        image_number_left++;
        image_number_right--;
        number_of_presses++;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left - 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
        how_much_to_move = 350 - image_number_left * plus_minus_Px;
        if(how_much_to_move < 0){
            how_much_to_move *= -1;
            how_much_to_move += 77.5;
        }
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
    }
    else if(image_number_left >= all_images.length - 3){
        image_number_left++;
        image_number_right--;
        number_of_presses++;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left - 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
        how_much_to_move = how_much_to_move + (total_px - how_much_to_move);
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
        if(image_number_left == all_images.length - 1){
            move_left_right = true;
        }
    }
}

document.getElementById("slideShow-button-left").onclick = function(){
    move_Left();
};
function move_Left () {
    if(image_number_left == all_images.length - 1){
        image_number_left--;
        image_number_right++;
        number_of_presses--;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left + 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
    }
    else if(image_number_left >= all_images.length - 2){
        image_number_left--;
        image_number_right++;
        number_of_presses--;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left + 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
        how_much_to_move = how_much_to_move + (155 * image_number_right - 350);
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
    }
    else if(image_number_left < all_images.length && how_much_to_move > 155){
        image_number_left--;
        image_number_right++;
        number_of_presses--;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left + 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
        how_much_to_move = how_much_to_move - 155;
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
    }
    else if(how_much_to_move <= 155){
        image_number_left--;
        image_number_right++;
        number_of_presses--;
        Side_Buttons_Hide();
        document.getElementById("slideShow-main-img").style.backgroundImage = ("url('../../images/website/bubblespacewars/gamepageimg" + image_number_left + ".png')");
        all_images[image_number_left + 1].classList.remove("active");
        all_images[image_number_left].classList.add("active");
        how_much_to_move -= how_much_to_move;
        for (let i = 0; i < all_images.length; i++) {
            all_images[i].style.right = how_much_to_move + "px";
        };
        if(image_number_left == 0){
            move_left_right = false;
        }
    }
}

function Side_Buttons_Hide(){
    if(number_of_presses == 0){
        document.getElementById("slideShow-button-left").style.visibility = "hidden";
    }
    else if(number_of_presses == all_images.length - 1){
        document.getElementById("slideShow-button-right").style.visibility = "hidden";
    }
    else if(number_of_presses > 0 && number_of_presses < (all_images.length - 1)){
        document.getElementById("slideShow-button-left").style.visibility = "visible";
        document.getElementById("slideShow-button-right").style.visibility = "visible";
    }
}
  
function AutoPlay_SlideShow(){

    autoplay = setTimeout(function(){
        if(move_left_right == false){
            move_Right();
        }
        else if(move_left_right == true){
            move_Left();
        }
            AutoPlay_SlideShow();
    },10000);
}
