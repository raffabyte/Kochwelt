let porti = (4);

let rezept002lasagne = {
    rezept002input01 : 0,
    rezept002input02 : 500,
    rezept002input03 : 1,
    rezept002input04 : 2,
    rezept002input05 : 1,
    rezept002input06 : 1,
    rezept002input07 : 1,
    rezept002input08 : 0,
    rezept002input09 : 1.50,
    rezept002input10 : 30,
    rezept002input11 : 40,
    rezept002input12 : 0,
    rezept002input13 : 0,
    rezept002input14 : 0,
}

myportions();

function myportions() {
   porti = parseInt(document.getElementById("portions").value.toString());
   document.getElementById('rezept001in02').innerHTML = (parseInt((rezept002lasagne.rezept002input02) * (porti))) + ' g Hackfleisch,gemischtes';
   document.getElementById('rezept001in03').innerHTML = (parseInt((rezept002lasagne.rezept002input03) * (porti))) + ' Zwiebeln(n)';
   document.getElementById('rezept001in04').innerHTML = (parseInt((rezept002lasagne.rezept002input04) * (porti))) + ' Knoblauchzehe(n)';
   document.getElementById('rezept001in05').innerHTML = (parseInt((rezept002lasagne.rezept002input05) * (porti))) + ' Bund Petersilie oder TK';
   document.getElementById('rezept001in06').innerHTML = (parseInt((rezept002lasagne.rezept002input06) * (porti))) + '  EL Tomatenmark';
   document.getElementById('rezept001in07').innerHTML = (parseInt((rezept002lasagne.rezept002input07) * (porti))) + ' Dose Tomaten, geschälte (800 g)';
   document.getElementById('rezept001in09').innerHTML = (parseInt((rezept002lasagne.rezept002input09) * (porti))) + ' Liter	Milch';
   document.getElementById('rezept001in10').innerHTML = (parseInt((rezept002lasagne.rezept002input10) * (porti))) + ' g	Butter';
   document.getElementById('rezept001in11').innerHTML = (parseInt((rezept002lasagne.rezept002input11) * (porti))) + ' g	Mehl';
   
}

function toggleRespMenu() {
    document.getElementById('resp-menu').classList.toggle('close-menu-box')
}
