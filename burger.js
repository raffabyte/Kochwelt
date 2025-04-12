let porti = (4);

let rezept001cheeseburger = {
    rezept001input01 : 100,
    rezept001input02 : 0.25,
    rezept001input03 : 7.5,
    rezept001input04 : 1,
    rezept001input05 : 1,
    rezept001input06 : 0.25,
    rezept001input07 : 15,
    rezept001input08 : 0.25,
    rezept001input09 : 0.75,
    rezept001input10 : 0.25,
    rezept001input11 : 1,
    rezept001input12 : 1,
}

myportions();

function myportions() {
   porti = parseInt(document.getElementById("portions").value.toString());
   document.getElementById('rezept001in01').innerHTML = (parseInt((rezept001cheeseburger.rezept001input01) * (porti))) + ' g Faschiertes vom Rind';
   document.getElementById('rezept001in02').innerHTML = (parseInt((rezept001cheeseburger.rezept001input02) * (porti))) + ' St. Dotter';
   document.getElementById('rezept001in03').innerHTML = (parseInt((rezept001cheeseburger.rezept001input03) * (porti))) + ' g Semmelbrösel';
   document.getElementById('rezept001in04').innerHTML = (parseInt((rezept001cheeseburger.rezept001input04) * (porti))) + ' EL Öl';
   document.getElementById('rezept001in05').innerHTML = (parseInt((rezept001cheeseburger.rezept001input05) * (porti))) + ' St. Hamburger Brötchen';
   document.getElementById('rezept001in06').innerHTML = (parseInt((rezept001cheeseburger.rezept001input06) * (porti))) + ' St. Paradeiser';
   document.getElementById('rezept001in07').innerHTML = (parseInt((rezept001cheeseburger.rezept001input07) * (porti))) + ' g Salatgurke';
   document.getElementById('rezept001in08').innerHTML = (parseInt((rezept001cheeseburger.rezept001input08) * (porti))) + ' St. rote Zwiebel (kleine)';
   document.getElementById('rezept001in09').innerHTML = (parseInt((rezept001cheeseburger.rezept001input09) * (porti))) + ' EL Mayonnaise';
   document.getElementById('rezept001in10').innerHTML = (parseInt((rezept001cheeseburger.rezept001input10) * (porti))) + ' EL Senf';
   document.getElementById('rezept001in11').innerHTML = (parseInt((rezept001cheeseburger.rezept001input11) * (porti))) + ' Scheibe(n) Cheddar (ca.2 mm dick)';
   document.getElementById('rezept001in12').innerHTML = (parseInt((rezept001cheeseburger.rezept001input12) * (porti))) + ' St.	Salatblätter';
}

function toggleRespMenu() {
    document.getElementById('resp-menu').classList.toggle('close-menu-box')
}
