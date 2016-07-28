function showMenuButton(){
    document.getElementById('navlist').style.display='block'
    document.getElementById('showbutton').style.display='none'
    document.getElementById('hidebutton').style.display='block'
}

 function hideMenuButton(){
    document.getElementById('navlist').style.display='none'
    document.getElementById('showbutton').style.display='block'
    document.getElementById('hidebutton').style.display='none'
}

function calcY(){
    var randomY = Math.floor((Math.random() * 101));
    return randomY
    }

function calcX(){
    var randomX = Math.floor((Math.random() * 101));
    return randomX
    }