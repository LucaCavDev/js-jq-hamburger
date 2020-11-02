// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!

//partendo da hamburger menu chiuso, lo devo aprire al click
// scelgo la classe fas perchè è la più stringente ed è l'unica che posso usare sia per chiudere che aprire

$('.header-right .fas').click(function() {
  $('.hamburger-menu').show();
});

$('.hamburger-menu .fas').click(function() {
  $('.hamburger-menu').hide();
});



console.log('ciao');
