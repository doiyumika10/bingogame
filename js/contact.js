'use strict';

        function moveCheese1() {
            $('.cheese1').toggleClass('movecheese1');
            moveTime1();
        }

        function moveCheese2() {
            $('.cheese2').toggleClass('movecheese2');
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

/*フォーム送信クリック動作*/



let form = document.getElementById('form');

form.onsubmit = function(e){
    e.preventDefault();
    let name = form.namae.value;
    let tel = form.tel.value;
    let mail = form.mail.value;
    let nakami = form.naiyou.value;
    
    if(window.confirm(`こちらで送信します。よろしいですか？\nお名前:${name}\n電話番号:${tel}\nメールアドレス:${mail}\nお問い合わせ内容:${nakami}`)){
        window.location.href='confirmed.html';
}
};