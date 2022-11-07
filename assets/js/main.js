window.onload = function () {

    // menu----------------------------
    const navigation = document.querySelectorAll('.navigation');
    navigation[0].classList.add('active');
    // console.log(navigation[0]);
    function Active() {
        navigation.forEach((elem) => {
            elem.classList.remove('active')
        })
        this.classList.add('active');
    }
    navigation.forEach((item) => {
        item.addEventListener('click', Active);
    })

    const func = document.querySelectorAll('.func');

    navigation.forEach((elem, Ind) => {
        elem.addEventListener('click', () => {
            func.forEach((item, index) => {
                if (Ind === index) {
                    item.style.display = "grid";
                } else {
                    item.style.display = 'none';
                }
            })
            check();
        });
    })
    // menu----------------------------

    //clock ------------------------------------------

    const clockBody = document.querySelector('.clockBody');

    for (let i = 1; i <= 60; i++) {
        if (i % 5 == 0) {
            clockBody.innerHTML += `<div class=d><div class=time> ${(i / 5)}</div></div>`;

        }
    }

    const d = document.querySelectorAll('.d');
    const rotatecl = (360 / d.length);

    d.forEach((item, index) => {
        item.style.transform = `rotate(${(rotatecl * index) + 300}deg) translateX(${200}px)`;
    })

    const timeNo = document.querySelectorAll('.time');
    timeNo.forEach((item, index) => {
        item.style.transform = `rotate(-${(rotatecl * index) + 300}deg)`;
    })

    let time;
    function analogClock() {
        time = setInterval(Time, 1000);
    }
    analogClock();

    const bigHand = document.querySelector('.bigHand');
    const midiumHand = document.querySelector('.midiumHand');
    const smallHand = document.querySelector('.smallHand');


    function Time() {
        const D = new Date();
        let hours = D.getHours();
        let H = D.getHours();
        let minute = D.getMinutes();
        let M = D.getMinutes();
        let seconds = D.getSeconds();
        let S = D.getSeconds();

        function rotate() {
            bigHand.style.transform = `rotate(${6 * seconds}deg) translateY(-10rem)`;
            midiumHand.style.transform = `rotate(${6 * minute}deg) translateY(-8rem)`;
            smallHand.style.transform = `rotate(${hours * (360 / 12) + (minute / 12) * (360 / 60)}deg) translateY(-6rem)`;
        }
        rotate();

        if (H > 12) {
            H -= 12;
        } else if (H < 12) {
            H += 12;
        }

        if (H < 10) {
            H = '0' + H;
        }

        if (M < 10) {
            M = "0" + M;
        }
        if (S < 10) {
            S = "0" + S;
        }

        const digitalTime = document.querySelector('.digitalTime');
        digitalTime.innerHTML = `${H}<br><span>${M}.<label>${S}</ladel></span>`;
        rotate();

    }
    //clock ------------------------------------------

    // stopwatch------------------------------
    let interval;
    let miliSecond = '0' + 0;
    let sec = '0' + 0;
    let min = '0' + 0;
    const Timing = document.querySelector('.Timing');
    const switchs = document.querySelectorAll('.switch')//switch
    const pause = document.getElementById('puase');
    const play = document.getElementById('play');
    const reset = document.getElementById('reset');
    const history = document.querySelector('.history');

    function stopWatch() {

        pause.onclick = function () {
            clearInterval(interval);
        }
        play.onclick = function () {
            clearInterval(interval);
            interval = setInterval(mili, 10);
        }
        reset.onclick = function () {
            history.innerHTML += `<div class="hist">${min}.${sec}.${miliSecond}</div>`;
            clearInterval(interval);
            miliSecond = '0' + 0;
            sec = '0' + 0;
            min = '0' + 0;
            Timing.innerText = `${min}.${sec}.${miliSecond}`;
        }

        function switchsActive() {
            switchs.forEach((elem) => elem.classList.remove('active'))
            this.classList.add('active');
        }
        switchs.forEach((elem) => {
            elem.addEventListener('click', switchsActive);
        })

        function mili() {
            if (miliSecond > 98) { miliSecond = 0; }

            if (miliSecond === 98) {
                sec++;

                if (sec < 10) {
                    sec = '0' + sec;
                }
            } else if (sec > 59) {
                sec = 0;
            }

            if (sec === 60) {
                min++;

                if (min < 10) {
                    min = '0' + min;
                }
            } else if (min > 59) {
                min = 0;
            }

            miliSecond++;

            if (miliSecond < 10) {
                miliSecond = '0' + miliSecond;
            }

            Timing.innerText = `${min}.${sec}.${miliSecond}`;
        }
    }

    function check() {
        // debugger;
        if (navigation[0].className === "navigation active") {
            analogClock();
            clearInterval(interval);
            switchs.forEach((elem) => elem.classList.remove('active'))
            switchs[0].classList.add('active');
        } else if (navigation[1].className === "navigation active") {
            clearInterval(time);
            Timing.innerText = `${min}.${sec}.${miliSecond}`;
            console.log(Timing.innerHTML);
            stopWatch();
        }
    }
    check();

    // stopwatch------------------------------

}