let porti = (4);

let rezept002Cheesecake = {
    rezept002input01 : 200,
    rezept002input02 : 125,
    rezept002input03 : 2,
    rezept002input04 : 3,
    rezept002input05 : 220,
    rezept002input06 : 1,
    rezept002input07 : 1,
    rezept002input08 : 250,
    rezept002input09 : 250,
    rezept002input10 : 2,
}

myportions();

function myportions() {
   porti = document.getElementById("portions").value.toString();

   document.getElementById('rezept001in01').innerHTML = (parseInt((rezept002Cheesecake.rezept002input01) * (porti))) + ' g Vollkornkekse';
   document.getElementById('rezept001in02').innerHTML = (parseInt((rezept002Cheesecake.rezept002input02) * (porti))) + ' g weiche Butter';
   document.getElementById('rezept001in03').innerHTML = (parseInt((rezept002Cheesecake.rezept002input03) * (porti))) + ' Äpfel';
   document.getElementById('rezept001in04').innerHTML = (parseInt((rezept002Cheesecake.rezept002input04) * (porti))) + ' Eier';
   document.getElementById('rezept001in05').innerHTML = (parseInt((rezept002Cheesecake.rezept002input05) * (porti))) + ' g Zucker';
   document.getElementById('rezept001in06').innerHTML = (parseInt((rezept002Cheesecake.rezept002input06) * (porti))) + ' PICKERD Grand Bourbon Vanille-Schote oder PICKERD Vanile-Schote';
   document.getElementById('rezept001in07').innerHTML = (parseInt((rezept002Cheesecake.rezept002input07) * (porti))) + ' kg Quark';
   document.getElementById('rezept001in08').innerHTML = (parseInt((rezept002Cheesecake.rezept002input08) * (porti))) + ' ml Sahne';
   document.getElementById('rezept001in09').innerHTML = (parseInt((rezept002Cheesecake.rezept002input09) * (porti))) + ' ml Milch';
   document.getElementById('rezept001in10').innerHTML = (parseInt((rezept002Cheesecake.rezept002input10) * (porti))) + ' Pck Vanillepuddingpulver';
}








function toggleRespMenu() {
    document.getElementById('resp-menu').classList.toggle('close-menu-box')
}
