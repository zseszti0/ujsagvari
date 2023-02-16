let telon = false
let menuToggeled = true

//--------------------PHONE GESTURE____________________________________________________

let touchstartX = 0
let touchendX = 0
let touchstartY = 0
let touchendY = 0
    
function checkDirection() {
        if ((touchendX + 50) < touchstartX)
        {
            SideMenuToggle()
        }
        if (touchendX > (touchstartX + 50)){
            SideMenuToggle()
        }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX

})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

//--------------------UNIVERSAL CODE___________________________________________________

let sideMenu = document.getElementById("sideMenu")

function DetermineDevice(){
    if (screen.width < screen.height) {
        telon = true;
        menuToggeled = true
    }
    else {
        menuToggeled = false
    }
    console.log(telon)
}

function CreatTheNewsPaper() {
    document.getElementById("ujsag").style.width = screen.width*0.9 + "px"

    //FRONT PAGE
    var div = document.createElement('div');
    div.setAttribute('class', 'fedo');

    if (telon)
    { //telo
        div.style.width = screen.width*0.8 + "px";
        div.style.height = screen.width*0.8*(2340/1653) + "px";
    }
    else { //gep
        div.style.width = screen.width*0.4 + "px";
        div.style.height = screen.width*0.4*(2340/1653) + "px";
    }

    div.style.backgroundImage = 'url(1.png)'
    document.getElementById("ujsag").appendChild(div);

    //EVERYTHING ELSE
    for (let i = 2; i < 32; i++) {
        var div = document.createElement('div');
        div.setAttribute('class', 'lapok');
        
        if (i % 2 == 0) {
            div.setAttribute('calss', 'balOldal')
            div.style.float = "left";
        }
        else {
            div.setAttribute('calss', 'jobbOldal')
            div.style.float = "right";
        }

        var backG = i + ".png"
        div.style.backgroundImage = 'url('+backG+')'
        document.getElementById("ujsag").appendChild(div);
    }
}
function SizePages() {
    if(telon) //telo
    {
        document.querySelectorAll('.lapok').forEach(div => {
            div.style.width = screen.width/2.23 + "px";
            div.style.height = screen.width*(2340/1653)/2.23 + "px";
        })
    }
    else {
        if(menuToggeled) //becsuk gep
        {
            document.querySelectorAll('.lapok').forEach(div => {
                div.style.width = screen.width*0.7/1.57 + "px";
                div.style.height = screen.width*0.7*(2340/1653)/1.57 + "px";
            })
        }
        else { //kinyit gep
            document.querySelectorAll('.lapok').forEach(div => {
                div.style.width = screen.width*0.7/1.75 + "px";
                div.style.height = screen.width*0.7*(2340/1653)/1.75 + "px";
            })
        }
    }
    console.log("sized")
}

function SideMenuToggle() {
    if (menuToggeled) { //becsuk
        SizePages()
        document.getElementById("ujsag").style.width = screen.width*0.9 + "px";
        menuToggeled = false;
        if (telon)
        {
            sideMenu.style.width = "2%"
            sideMenu.style.height = "75vh"
        }
        else{
            sideMenu.style.width = "3%"
        }
    }
    else { //kinyit
        SizePages()
        if(!telon)
        {
            document.getElementById("ujsag").style.width = screen.width*0.8 + "px";
        }
        menuToggeled = true;
        if (telon)
        {
            sideMenu.style.width = "70%"
            sideMenu.style.height = "75vh"
        }
        else{
            sideMenu.style.width = "15%"
        }
    }
}

function RotatedScreen(){
    DetermineDevice()
    SizePages()
    menuToggeled = true
    SideMenuToggle()
}

//MAIN
DetermineDevice()
if (telon) {
    menuToggeled = true
}
else {
    menuToggeled = false
}

CreatTheNewsPaper()
SideMenuToggle()


