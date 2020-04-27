var aboutMe="";

$(document).ready(function(){// аналог window.onload
$ (document).on('keydown', startCollect);
});

function startCollect(e){
    if (e.key == 'z'){
        console.log('start collect my secret word')
        $(document).off('keydown', startCollect);
        $(document).on('keydown', collectSymbol);
    }
}

function collectSymbol(e){
if  (e.key == ' ' || e.key == 'Escape'){
    stopCollect();
}
else {
    aboutMe += e.key;
    console.log(aboutMe);
    if(aboutMe == 'genius'){
        $('#aboutMe').modal({// вызов модального окна
            show: true
        });
    }
}
}

function stopCollect(){
    console.log ('stop');
    aboutMe = '';
    $(document).off('keydown', collectSymbol);
    $(document).on('keydown', startCollect);
}