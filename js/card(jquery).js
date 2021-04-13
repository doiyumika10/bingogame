        'use strict';

        /*元のコードはコメントで残しています*/

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

        /*シャッフルファンクション設定*/
        /*引用元:https://www.nxworld.net/js-array-shuffle.html*/

        const shuffle = ([...array]) => {
            for (let i = array.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        /*arrShuufle〇へシャッフル後に代入(元のarr〇は今後使用する可能性を考え残しました)*/

        let arrShuffleB = shuffle(arrB);

        let arrShuffleI = shuffle(arrI);

        let arrShuffleN = shuffle(arrN);

        let arrShuffleG = shuffle(arrG);

        let arrShuffleO = shuffle(arrO);

        let tr = '';

        $(function () {
            for (let i = 0; i < 2; i++) {
                tr = '<tr>';
                tr += `<td class="bgcolor1" id="td${arrShuffleB[i]}">${arrShuffleB[i]}</td>`;
                tr += `<td class="bgcolor2" id="td${arrShuffleI[i]}">${arrShuffleI[i]}</td>`;
                tr += `<td class="bgcolor1" id="td${arrShuffleN[i]}">${arrShuffleN[i]}</td>`;
                tr += `<td class="bgcolor2" id="td${arrShuffleG[i]}">${arrShuffleG[i]}</td>`;
                tr += `<td class="bgcolor1" id="td${arrShuffleO[i]}">${arrShuffleO[i]}</td>`;
                tr += '</tr>';
                //            document.getElementById('body').insertAdjacentHTML('beforeend', tr);
                $('#body').append(tr);
            };
        });

        $(function () {
            for (let i = 2; i < 3; i++) {
                tr = '<tr>';
                tr += `<td class="bgcolor1">${arrShuffleB[i]}</td>`;
                tr += `<td class="bgcolor2">${arrShuffleI[i]}</td>`;
                tr += `<td id="free">FREE</td>`;
                tr += `<td class="bgcolor2">${arrShuffleG[i]}</td>`;
                tr += `<td class="bgcolor1">${arrShuffleO[i]}</td>`;
                tr += '</tr>'
                //document.getElementById('body').insertAdjacentHTML('beforeend', tr);
                $('#body').append(tr);
            };
        });

        $(function () {
            for (let i = 3; i < 5; i++) {
                tr = '<tr>';
                tr += `<td class="bgcolor1">${arrShuffleB[i]}</td>`;
                tr += `<td class="bgcolor2">${arrShuffleI[i]}</td>`;
                tr += `<td class="bgcolor1">${arrShuffleN[i-1]}</td>`;
                tr += `<td class="bgcolor2">${arrShuffleG[i]}</td>`;
                tr += `<td class="bgcolor1">${arrShuffleO[i]}</td>`;
                tr += '</tr>'
                //document.getElementById('body').insertAdjacentHTML('beforeend', tr);
                $('#body').append(tr);
            };
        });

        /*ビンゴカード作成クリック時リロード*/

        //        document.getElementById('make').onclick = function () {
        //            location.reload();
        //        }

        $(function () {
            $('#make').on('click', function () {
                location.reload();
            });
        });

        /*クリック時マスの背景画像変更設定*/

        //        let idNumber = document.querySelectorAll('td');
        //        for (let item of idNumber) {
        //            item.onclick = function() {
        //                this.classList.add('hall');
        //            }
        //        }

        $(function () {
            $('td').on('click', function () {
                $(this).toggleClass('hall');
            })
        });

        /*チーズ装飾setTimeoutメソッド使用*/

        //        function moveCheese1() {
        //            let cheese1 = document.getElementsByClassName('cheese1');
        //            cheese1 = Array.prototype.slice.call(cheese1);
        //            cheese1.forEach(function (item) {
        //                item.classList.toggle('movecheese1');
        //            });
        //            moveTime1();
        //        }

        function moveCheese1() {
            $('.cheese1').toggleClass('movecheese1');
            moveTime1();
        }

        //        function moveCheese2() {
        //            let cheese2 = document.getElementsByClassName('cheese2');
        //            cheese2 = Array.prototype.slice.call(cheese2);
        //            cheese2.forEach(function (item) {
        //                item.classList.toggle('movecheese2');
        //            });
        //            moveTime2();
        //        }

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