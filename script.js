let telon = false
if (screen.width < screen.height) {
    telon = true;
}

console.log(telon)

function CreatTheNewsPaper() {

    //FRONT PAGE
    var div = document.createElement('div');
    div.setAttribute('class', 'fedo');

    if (telon)
    { //telo
        div.style.width = screen.width*0.8 + "px";
        div.style.height = screen.width*0.8*(1024/722) + "px";
    }
    else { //gep
        div.style.width = screen.width*0.4 + "px";
        div.style.height = screen.width*0.4*(1024/722) + "px";
    }

    div.style.backgroundImage = 'url(1.png)'
    document.getElementById("ujsag").appendChild(div);

    //EVERYTHING ELSE
    for (let i = 2; i < 17; i++) {
        var div = document.createElement('div');
        div.setAttribute('class', 'lapok');
        
        if (telon)
        { //telo
            div.style.width = screen.width + "px";
            div.style.height = screen.width*(1024/1444) + "px";
        }
        else { //gep
            div.style.width = screen.width*0.7 + "px";
            div.style.height = screen.width*0.7*(1024/1444) + "px";
        }

        var backG = i + ".png"
        div.style.backgroundImage = 'url('+backG+')'
        document.getElementById("ujsag").appendChild(div);
    }

    //LAST PAGE
    var div = document.createElement('div');
    div.setAttribute('class', 'fedo');

    if (telon)
    { //telo
        div.style.width = screen.width*0.8 + "px";
        div.style.height = screen.width*0.8*(1024/722) + "px";
    }
    else { //gep
        div.style.width = screen.width*0.4 + "px";
        div.style.height = screen.width*0.4*(1024/722) + "px";
    }

    div.style.backgroundImage = 'url(17.png)'
    document.getElementById("ujsag").appendChild(div);
}

CreatTheNewsPaper()
