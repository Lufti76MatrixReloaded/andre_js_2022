        // gruppe
        // titel
        // genre
        // spieldauer
        // fsk
        // anzahl

    class Filmliste
    {
       liste = []
    constructor(titel) {
    this.titel = titel
  }
    filmHinzufuegen(film) {
    this.liste.push(film)
  }
    filmeHinzufuegen(filme) {
    for (let i of filme)
    {
      // 1.Durchlauf: i = filme[0]
      // 2.Durchlauf: i = filme[1]
      // usw.
      this.liste.push(i)
    }
function filme() {
    let filmliste = [film1, film2, film3, film4];
    filmliste.push(filmliste)

    for (let i = 0; i < filme.length; i++) {
        console.debug(filme[i]);
      // 1.Durchlauf: i = 0
      // 2.Durchlauf: i = 1
      // usw.
      this.liste.push(filme[i])
      //this.liste.push(filme[0])
      //this.liste.push(filme[1])
      this.l
    }
  }

  sortieren() {
    this.liste.sort()
  }
}

    class Film {
    // Artikel
    constructor(titel, spieldauer, fsk, genre, erscheinungsjahr, specialEdition)
  {
    this.titel = titel;
    this.spieldauer = spieldauer;
    this.fsk = fsk;
    this.genre = genre;
    this.erscheinungsjahr = erscheinungsjahr;
    this.specialEdition = specialEdition
  }
}

let film1 = new Film("Avatar", 162,fsk 12, "Science-Fiction", 2009, true);
let film2 = new Film("Dune", 155, 12, "Sciene-Fiction", 2021, false);
let film3 = new Film("Enemy at the Gates", 130, 16, "Drama", 2001, false);
let film4 = new Film("Iron Man", 126, 12, "Action", 2008, false)

let sciFiListe = new Filmliste("Science-Fiction")
let sciFiArray = [film1, film2]
sciFiListe.filmeHinzufuegen(sciFiArray)




