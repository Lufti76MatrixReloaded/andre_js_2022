
/**
 * Lektion 4: Bedingungen
 */

/**
 * 1) 1) Erstelle eine if-Anweisung, die abfragt, ob ein bestimmter Artikel bereits gekauft wurde */
function artikel_Gekauft() {
    //ToDo: füge ab hier deinen Code ein

function artikel_Gekauft() {
    let artikelName = "Streukäse"
    let artikelGekauft = true

    if (artikelGekauft == true) {
        console.debug("[Artikel] \"" + artikelName + "\" wurde gekauft")
    }
}



/**
 * 2) Erstelle eine if-Abfrage, die in der Kosole ausgibt, dass ein Artikel hinzugefügt wurde,
 * falls der `artikelName` NICHT leer ist.
 */
function artikel_Hinzufuegen() {
    //ToDo: füge ab hier deinen Code ein
function gruppe_Hinzufuegen() {
    let gleicheGruppen = []
    let neueGruppe = "Getränke"
    if (gleicheGruppen.length == 0) {
        console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
    } else {
        console.warn("[App] Gruppe \"" + neueGruppe + "\" existiert schon!")
    }
}

/**
 * 3) Erstelle eine if-else-Anweisung, die überprüft ob die Gruppe `neueGruppe` bereits im leeren Array `gleicheGruppe`
 * existiert und dementsprechend passende Sätze auf der Konsole ausgibt
 */
function gruppe_Hinzufuegen() {
    // ToDo: füge ab hier deinen Code ein
function gruppe_Hinzufuegen() {
    let gleicheGruppen = []
    let neueGruppe = "Getränke"
    if (gleicheGruppen.length == 0) {
        console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
    } else {
        console.warn("[App] Gruppe \"" + neueGruppe + "\" existiert schon!")
    }
}

/**
 * 4) Überprüfe mit Hilfe einer switch-case-Anweisung, ob ein bestimmter Artikel in dem Array `einkaufsliste` vorkommt
 */
function einkaufsliste_Vorhanden() {
    // ToDo: füge ab hier deinen Code ein
function einkaufsliste_Vorhanden() {
    let milchProdukte = ["Milch", "Joghurt", "Sahne"]
    let artikel = "Eisbergsalat"

    switch (artikel) {
        case milchProdukte[0]:
        case milchProdukte[1]:
        case milchProdukte[2]:
            console.debug("Artikel \"" + artikel + "\" ist auf der Einkaufsliste")
            break
        default:
            console.debug("Artikel \"" + artikel + "\" ist NICHT auf der Einkaufsliste")
        }
}

/**
 * ZUSATZ: Durch folgenden Code sollst du als Zahl erhalten, an welcher Stelle im Array ein bestimmter Artikel steht
 */
function zusatz_indexOf() {
    // ToDo: füge ab hier deinen Code ein
function zusatz_indexOf() {
    let einkaufsliste = ["Tofu", "Milch", "Butter", "Honig"]

    if (einkaufsliste.indexOf("Tomaten") < 0) {
        console.warn("Auf der Einkaufsliste stehen KEINE Tomaten")
    } else {
        console.debug("Auf der Einkaufsliste steht \"Tomaten\"")
    }
}

export {
    artikel_Gekauft, artikel_Hinzufuegen, gruppe_Hinzufuegen, einkaufsliste_Vorhanden, zusatz_indexOf
}