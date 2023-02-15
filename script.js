function CreatTheNewsPaper() {
    for (let i = 0; i < 17; i++) {
        var div = document.createElement('div');
        div.setAttribute('class', 'lapok');
        document.getElementById("ujsag").appendChild(div);
    }
}

CreatTheNewsPaper()
