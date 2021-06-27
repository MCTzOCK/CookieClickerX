/**
 * @author Ben Siebert
 * @copyright 2018-2021 Ben Siebert. All rights reserved.
 */

let allowClickAnimation = true
let cookies = 0
let grandmas = 0

window.onload = function () {
    document.getElementById('cookie').addEventListener('click', (event) => {
        cookies++;
        if (allowClickAnimation) {
            document.getElementById('cookie').classList.add('animationShrink')
            allowClickAnimation = false
            setTimeout(() => {
                document.getElementById('cookie').classList.remove('animationShrink')
                allowClickAnimation = true
            }, 500)
        }
    });
    setInterval(() => {
        document.getElementById('cookieDisplay').innerText = cookies.toString()
        document.getElementById('grandmaDisplay').innerText = grandmas.toString()
    }, 50);
}
