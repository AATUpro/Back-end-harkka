function Pelikirjasto(nimi, julkaisija, alusta) {
    this.nimi = nimi;
    this.julkaisija = julkaisija;
    this.alusta = alusta;
    this.lisaaTaulukkoon = function() {
        let uusiRivi = document.createElement('tr');
        let uusiSolu = document.createElement('td');
        uusiSolu.innerHTML = this.nimi;
        uusiRivi.appendChild(uusiSolu);
        uusiSolu = document.createElement('td');
        uusiSolu.innerHTML = this.julkaisija;
        uusiRivi.appendChild(uusiSolu);
        uusiSolu = document.createElement('td');
        uusiSolu.innerHTML = this.alusta;
        uusiRivi.appendChild(uusiSolu);
        document.getElementById('pelitTable').appendChild(uusiRivi);
        
    }
}

document.getElementById('LisaaPeli').onclick = function() {
    let alustaValinta = document.getElementById('alusta');
    let uusiPelikirjasto = new Pelikirjasto(document.getElementById('nimi').value, document.getElementById('julkaisija').value, alustaValinta[alustaValinta.selectedIndex].innerHTML);
    uusiPelikirjasto.lisaaTaulukkoon();
    return false;
}