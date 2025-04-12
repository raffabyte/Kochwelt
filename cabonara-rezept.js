
let zutatenFürEinePortion = { 
    zutat1 : 125,
    zutat2 : 75,
    zutat3 : 1,
    zutat4 : 100,
    zutat5 : 40,
}

function submit() {
    input = document.getElementById('input').value
    if(input < 1) {
        document.getElementById('input').value = 1
        input = 1
    }
    else if(input > 20) {
        document.getElementById('input').value = 20
        input = 20
    }

    document.getElementById('zutat1').innerHTML = zutatenFürEinePortion.zutat1*input + 'g Spaghetti'
    document.getElementById('zutat2').innerHTML = zutatenFürEinePortion.zutat2*input + 'g Speck'
    document.getElementById('zutat3').innerHTML = zutatenFürEinePortion.zutat3*input + ' Eier'
    document.getElementById('zutat4').innerHTML = zutatenFürEinePortion.zutat4*input + ' ml Sahne'
    document.getElementById('zutat5').innerHTML = zutatenFürEinePortion.zutat5*input + 'g Parmesan'
}

function toggleRespMenu() {
    document.getElementById('resp-menu').classList.toggle('close-menu-box')
}