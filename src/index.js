/**
 * @author Ben Siebert
 * @copyright 2018-2021 Ben Siebert. All rights reserved.
 */

let allowClickAnimation = true
let allowAddOneAnimation = true

let cookies = 0
let grandmas = 0
let factories = 0

window.onload = function () {
    document.getElementById('cookie').addEventListener('click', (event) => {
        cookies++;
        if (allowAddOneAnimation) {
            allowAddOneAnimation = false
            document.getElementById('addOne').classList.remove('visually-hidden')
            document.getElementById('addOne').classList.add('animationRiseUp')
            setTimeout(() => {
                document.getElementById('addOne').classList.add('visually-hidden')
                document.getElementById('addOne').classList.remove('animationRiseUp')
                allowAddOneAnimation = true
            }, 1000)

        }
        if (allowClickAnimation) {
            document.getElementById('cookie').classList.add('animationShrink')
            allowClickAnimation = false
            setTimeout(() => {
                document.getElementById('cookie').classList.remove('animationShrink')
                allowClickAnimation = true
            }, 300)
        }
    });
    setInterval(() => {
        document.getElementById('cookieDisplay').innerText = cookies.toString()
        document.getElementById('grandmaDisplay').innerText = grandmas.toString()
        document.getElementById('grandmaPrize').innerText = (grandmas * 100 + 100).toString() + " Cookies"
        document.getElementById('factoryDisplay').innerText = factories.toString()
        document.getElementById('factoryPrize').innerText = (factories * 1000 + 1000).toString() + " Cookies"
    }, 50);

    setInterval(() => {
        for (let i = 0; i < grandmas; i++) {
            cookies++
        }
        for (let i = 0; i < factories; i++) {
            cookies += 5
        }
    }, 1500)
}

function toggleShop() {
    if (document.getElementById('shop').classList.contains('hidden')) {
        document.getElementById('shop').classList.remove('hidden')
    } else {
        document.getElementById('shop').classList.add('hidden')
    }
}

function buyGrandma() {
    let gPrize = grandmas * 100 + 100;
    if (cookies >= gPrize) {
        grandmas++
        cookies = cookies - gPrize
        buySucceeded()
    } else {
        buyFailed()
    }
}

function buyFactory() {
    let fPrize = factories * 1000 + 1000
    if (cookies >= fPrize) {
        factories++
        cookies = cookies - fPrize
        buySucceeded()
    } else {
        buyFailed()
    }
}

function buySucceeded() {
    document.getElementById('buySucceeded').classList.remove("visually-hidden")
    document.getElementById('buySucceeded').classList.add("animationPopout")
    setTimeout(() => {
        document.getElementById('buySucceeded').classList.add("visually-hidden")
        document.getElementById('buySucceeded').classList.remove("animationPopout")
    }, 1000)
}

function buyFailed() {
    document.getElementById('buyFailed').classList.remove("visually-hidden")
    document.getElementById('buyFailed').classList.add("animationPopout")
    setTimeout(() => {
        document.getElementById('buyFailed').classList.add("visually-hidden")
        document.getElementById('buyFailed').classList.remove("animationPopout")
    }, 1000)
}
