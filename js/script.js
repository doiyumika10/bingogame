'use strict';

/*BINGO数値を配列で設定*/

const arrB = [];
const arrI = [];
const arrN = [];
const arrG = [];
const arrO = [];
const BINGO = [];

for (let i = 1; i <= 15; i++) {
    arrB.push(i);
}
for (let i = 16; i <= 30; i++) {
    arrI.push(i);
}
for (let i = 31; i <= 45; i++) {
    arrN.push(i);
}
for (let i = 46; i <= 60; i++) {
    arrG.push(i);
}
for (let i = 61; i <= 75; i++) {
    arrO.push(i);
}
for (let i = 1; i <= 75; i++) {
    BINGO.push(i);
}

/*表作成*/

let tr = '';
for (let i = 0; i < 15; i++) {
    tr = '<tr>';
    tr += `<td class="bgcolor1" id="${i+1}">${arrB[i]}</td>`;
    tr += `<td class="bgcolor2" id="${i+16}">${arrI[i]}</td>`;
    tr += `<td class="bgcolor1" id="${i+31}">${arrN[i]}</td>`;
    tr += `<td class="bgcolor2" id="${i+46}">${arrG[i]}</td>`;
    tr += `<td class="bgcolor1" id="${i+61}">${arrO[i]}</td>`;
    tr += '</tr>'
    document.getElementById('alreadyMentioned').insertAdjacentHTML('beforeend', tr);
}

/*シャッフルアルゴリズム*/
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
/*-----------------------*/

/*BINGOをシャッフルしてarrShuffleに代入*/
let arrShuffle = [];

for (let i = 0; i < 75; i++) {
    arrShuffle = shuffle(BINGO);
}

/*-----------------------*

/*クリックカウンター定義*/
let counter = 0;

/*番号表示欄に代入&カラー変更*/

document.getElementById('newNum').onclick = function () {
    document.getElementById('number').textContent = `${arrShuffle[counter]}`;
    document.getElementById(String(arrShuffle[counter])).classList.add('hall');
    document.getElementById('mouse1').classList.toggle('visibility');
    document.getElementById('mouse2').classList.toggle('visibility');
    counter += 1;
}

document.getElementById('reset').onclick = function () {
    location.reload();
}

/*asideチーズ装飾動作設定*/
function moveCheese1() {
    let cheese1 = document.getElementsByClassName('cheese1');
    cheese1 = Array.prototype.slice.call(cheese1);
    cheese1.forEach(function (item) {
        item.classList.toggle('movecheese1');
    });
    moveTime1();
}

function moveCheese2() {
    let cheese2 = document.getElementsByClassName('cheese2');
    cheese2 = Array.prototype.slice.call(cheese2);
    cheese2.forEach(function (item) {
        item.classList.toggle('movecheese2');
    });
    moveTime2();
}

function moveTime1() {
    setTimeout(moveCheese1, 1300);
}

function moveTime2() {
    setTimeout(moveCheese2, 1300);
}

moveTime1();
moveTime2();

/*ナビゲーションドロワー動作*/

let nav = document.getElementById('nav');

let icon = document.getElementById('cardicon');

let main = document.querySelector('main');

let header = document.querySelector('header');

icon.onclick = function () {
    nav.classList.toggle('show');
    icon.classList.toggle('show');
    icon.classList.toggle('active');
};

main.onclick = function () {
    if (nav.className.length === 4) {
        nav.classList.remove('show');
        icon.classList.remove('show');
        icon.classList.remove('active');
    }
};

header.onclick = function () {
    if (nav.className.length === 4) {
        nav.classList.remove('show');
        icon.classList.remove('show');
        icon.classList.remove('active');
    }
};

/*スクロール時ボタン固定*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $('.fix1').addClass("fixed1");
            $('.fix1').removeClass("c-btn-shadow");
        } else {
            $('.fix1').removeClass("fixed1");
            $('.fix1').addClass("c-btn-shadow");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $('.fix2').addClass("fixed2");
            $('.fix2').removeClass("c-btn-shadow");
        } else {
            $('.fix2').removeClass("fixed2");
            $('.fix2').addClass("c-btn-shadow");
        }
    });
});
