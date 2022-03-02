"use strict"

function openCloseFiltr(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'flex';
        document.getElementById(id).style.flexDirection = 'column';
    } else {
        document.getElementById(id).style.display = 'none';
    }

    console.log('filter has customize');
}

function throwOff() {
    let fields = document.querySelectorAll('.custom-checkbox');
    for (var i = 0; i < fields.length; i++) {
        fields[i].checked = false;
    }

}

function sliderMove(id) {
    let rng1 = document.getElementById('myRange');
    let rng2 = document.getElementById('_myRange');
    let rp = document.getElementById('rangePrice_2');
    let rp_ = document.getElementById('rangePrice_1');

    let k1 = 27; //10000
    let k2 = 20; //1000
    //добавить учет длинны числа(цены) и соответственную поправку на смещение (k)\
    //цена в диапазоне 0 42000  - 142 - шаг
    if (id == '_myRange') {
        if (rng2.value > 67 && rng2.value < 284) {
            rp.style.marginLeft = rng2.value - k1 + 'px';
        }
    }
    if (id == 'myRange') {

        if (rng1.value > 16 && rng1.value < 235) {
            rp_.style.marginLeft = rng1.value - k2 + 'px';
        }

    }

}