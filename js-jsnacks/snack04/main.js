'use strict'
//inizializzo la lista degli invitati

const guests = ['Johnny', 'Matt', 'Fred', 'Amanda', 'Joey', 'Bernardette', 'Claude'];


//chiedo il nome dell'utente

const userName = prompt('Come ti chiami?')


//Verifico la presenza del nome nella lista
if (guests.includes(userName)) {
    window.alert('Benvenuto!')
} else {
    window.alert('Non puoi entrare!')
}