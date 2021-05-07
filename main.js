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

function imie() {
    const imie = document.getElementById('imie').value
    if(imie.length < 2) {
        alert('Wpisz imi')
    } else 
    console.log(imie)
}

function nazwisko() {
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.length < 3) {
        alert('Wpisz nazwisko')
    }else
    console.log(nazwisko)
}

function wiad() {
    const wiad = document.getElementById('wiad').value
    if(wiad.length < 10) {
        alert('Za krótka wiadomość')
    }else
    console.log(wiad)
}
 
function tel(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
             alert("Tylko cyfry")
        }return
    })
    console.log(num)
}

function email() {
    const email = document.getElementById('email').value
    if(email.search('@') === -1) {
    alert('niepoprawny email')}
    else{
    console.log(email)}
}

