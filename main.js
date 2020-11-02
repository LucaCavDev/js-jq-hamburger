// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!

//partendo da hamburger menu chiuso, lo devo aprire al click
// scelgo la classe fas perchè è la più stringente ed è l'unica che posso usare sia per chiudere che aprire

//METODO DOVE VIENE AL 100% è il 2, dove si aggiunge la classe active che è gia inserita nel mediaquery




//=============================================
// METODO 1 -
// problema: quando ho l'hamburger menu aperto, se allargo displey oltre i 1000, mi resta attivo il menu hamburgher, sarebbe meglio che si chiuda

// $('.header-right .fas').click(function() {
//   $('.hamburger-menu').show();
// });
//
// $('.hamburger-menu .fas').click(function() {
//   $('.hamburger-menu').hide();
// });

//-----------------------------------------------------------




//=============================================
// METODO 2 - lavoro su classe .hamburger-menu.active
//
$('.header-right .fas').click(function() {
  $('.hamburger-menu').addClass('active');
});

$('.hamburger-menu .fas').click(function() {
  $('.hamburger-menu').removeClass('active');
});

// in questo modo dato che active si attiva solo sotto i 1000 px, si chiude quando vado sopra i 1000px
//-----------------------------------------------------------


//=============================================
//METODO 3  --
//in questo metodo ritocco il metodo 1 eliminando il problema della non chiusura dell'hamburger quando il display va a +1000 px usando il winddow.matchMedia


// if (window.matchMedia("(max-width: 1000px)").matches) {
//   $('.header-right .fas').click(function() {
//     $('.hamburger-menu').show();
//   });
//
//   $('.hamburger-menu .fas').click(function() {
//     $('.hamburger-menu').hide();
//   });
// }

//problema, l'hamburger con display + di 1000px si chiude solo aggiornando
// serve l'evento resize di jQuery, che è responsive senza dover aggiornare la pagina
//-----------------------------------------------------------
