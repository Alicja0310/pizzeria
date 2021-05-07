function wyslij() {
    let formData = []
    const imie = document.getElementById('imie').value
    if(imie.lenght < 3) {
         document.getElementById('imie-error').style = 'visibility: visible;'
        } else {
            formData.push(imie)
            document.getElementById('imie-error').style = 'visibility: hidden;'
        }
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.lenght < 4) {
            document.getElementById('nazwisko-error').style = 'visibility: visible;'
        } else {
            formData.push(nazwisko)
            document.getElementById('nazwisko-error').style = 'visibility: hidden;'
        }
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const wiad = document.getElementById('wiad').value
    console.log('imie:', imie,'nazwisko:', nazwisko,'email:', email,'telefon:', tel,'wiadomosc:', wiad)
}

function klik() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3) {
        alert ("za krótkie imię")
    }
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.length < 5) {
        alert ("wpisz adres")
    }
    const wiad = document.getElementById('wiad').value
    if(imie.length < 10) {
        alert ("za krótka wiadomość")
    }
}

function pobieranie(val){
    console.log(val)
}

function pizza(pizza) {
    const wybranaPizza = pizza
    console.log(wybranaPizza)
}

//---------------------------------------------------

// function wyslij() {
//     let formData = []
//     const imie = document.getElementById('imie').value
//     const nazwisko = document.getElementById('nazwisko').value
//     const email = document.getElementById('email').value
//     const tel = document.getElementById('tel').value
//     const wiad = document.getElementById('wiad').value
//     if(imie.lenght < 3) {
//         document.getElementById('imie-error').style = 'visibility: visible;'
//     } else {
//         formData.push(imie)
//         document.getElementById('imie-error').style = 'visibility: hidden;'
//     }
//     if(nazwisko.lenght < 4) {
//         document.getElementById('nazwisko-error').style = 'visibility: visible;'
//     } else {
//         formData.push(nazwisko)
//         document.getElementById('nazwisko-error').style = 'visibility: hidden;'
//     }
//     if (email.search('@') < -1) {
        
//     }
// }

