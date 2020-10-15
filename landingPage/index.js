//get duration of intro vid, make it disappear after one play, and make notify btn and other vid/img appear

const introVid = document.getElementById('introVid');
const loopVid = document.getElementById('loopVid');
const notifyBtn = document.getElementById('notifyBtn');
const countdown = document.getElementById('countdown');
const loopSrc = document.getElementById('loopSrc');
const enterBtn = document.getElementById('enterBtn');
const enterScreen = document.getElementById('enterScreen');
const introDuration = 1000 * (introVid.duration);

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

//if mobile device is detected show entrance screen and wait until enter is clicked to start vids. Otherwise, play vids right away and hide entrance screen
if(isMobile){
    loopSrc.src = 'landingPage/Landing_Loop_Half.mp4';

    enterScreen.style.display = "grid";
    enterBtn.style.display = "block";

    enterBtn.addEventListener('click', ()=>{
        enterScreen.style.display = "none";
        enterBtn.style.display = "none";
        introVid.play();
        playVidSequence(introDuration);
    });
} else{
    introVid.play();
    playVidSequence(introDuration);
}

/* introVid.addEventListener('durationchange', function() {
 */ 
/* });
 */
function playVidSequence(duration){
    setTimeout(function(){
        introVid.style.display = "none";
        show(loopVid);
        loopVid.play();
        show(notifyBtn);
        show(countdown);
    }, duration)
}


//modal
const modalWrap = document.getElementById('modalBg'),
    loseModal = document.getElementById('closeModal');

//when notify button is clicked open modal
notifyBtn.onclick = function(){
    show(modalWrap);
    hide(notifyBtn);
}

//when x is clicked close modal
closeModal.onclick = function(){
    hide(modalWrap);
    show(notifyBtn);
}

//when clicked outside of modal close modal
window.onclick = function(event) {
    if (event.target == modalWrap) {
        show(notifyBtn);
        hide(modalWrap);
    }
  }

function show(element){
    element.style.visibility = 'visible';
    element.style.opacity = '1.0';
}

function hide(element){
    element.style.visibility = 'hidden';
    element.style.opacity = '0.0';
}

//countdown

const days = document.getElementById('dayCount');
const hours = document.getElementById('hourCount');
const mins = document.getElementById('minCount');
const secs = document.getElementById('secCount');

const countDownDate = new Date("Nov 13, 2020 12:00:00").getTime();

function startCountdown(){
    setInterval(() => {
        const now = new Date();
        const timeLeft = countDownDate - now;

        const daysLeft = ('0' + Math.floor(timeLeft / (1000 * 60 * 60 * 24))).slice(-2);
        const hoursLeft = ('0' + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        const minsLeft = ('0' + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        const secsLeft = ('0' + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);


        days.innerHTML = daysLeft;
        hours.innerHTML = hoursLeft;
        mins.innerHTML = minsLeft;
        secs.innerHTML = secsLeft;
    },
    1000)
}

startCountdown();

// carousel
// when next button is clicked, move each item to the left by a certain amount
// item position should equal the distance from the center * a certain amount

/* const carousel = document.getElementById('carousel'),
    items = document.getElementsByClassName('carouselItem'),
    prevBtn = document.getElementById('prevBtn'),
    nextBtn = document.getElementById('nextBtn');

function setInitialPosition(){
    items.array.forEach(element => {
        
    });
}

setInitialPosition();
 */

//save the value of the email input when someone clicks it

function saveEmail(){
    let confirmEmail = document.getElementById('submitBtn'),
        email = '';

    confirmEmail.addEventListener('click', function() {
        email = document.getElementById('emailInput').value;
        console.log(email);
        confirmEmail.innerHTML = "YOU'RE ON THE LIST!"

        setTimeout(function(){
            hide(modalWrap);
            show(notifyBtn);
        }, 1200);
        setTimeout(function(){
            confirmEmail.innerHTML = "NOTIFY ME!"
        }, 1500);
    });
}

saveEmail();
