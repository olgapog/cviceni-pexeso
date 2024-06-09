console.log('Funguju!')

const karticky = document.querySelectorAll('.karticka')

let otoceneKarticky = []

karticky.forEach((karta, index) => {
    karta.addEventListener("click", () => {
        karta.classList.remove("otocena")
        otoceneKarticky.push(index)

        if (otoceneKarticky.length === 2) {
            const karta1 = karticky[otoceneKarticky[0]]
            const karta2 = karticky[otoceneKarticky[1]]
            const obrazekKarta1 = karta1.querySelector("img")
            const obrazekKarta2 = karta2.querySelector("img")

            if (obrazekKarta1.src !== obrazekKarta2.src) {
                console.log("nejsou stejné")
                otoceneKarticky.forEach((indexKarticky) => {
                    setTimeout(() => {
                        karticky[indexKarticky].classList.add('otocena')
                    }, 1000)
                })
                otoceneKarticky = []
            } else {
                karta1.disabled = true
                karta2.disabled = true
                otoceneKarticky = []
            }

        }
    })
})
