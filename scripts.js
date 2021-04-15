/* ----- 1 ----- */
/* a) zwracającą sumę trzech liczb podanych w parametrach funkcji, */
function sum(liczba1, liczba2, liczba3) {
    return liczba1 + liczba2 + liczba3
}
    /* b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
     'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x
      wysokośc*/

function triangleArea(a, h) {
    return 'pole trojkata wynosi ' + (a * h / 2) + ' czyli ma on ' + a + ' dlugości podstawy i ' + h + ' wysokosci'
}
    /* c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
     wieku danej osoby i wieku w którym to prawo jazdy zdał, */
function yearsOfLicense(age, ageOfLicense) {
    if (ageOfLicense > age) { console.log('Błąd, wiek w którym zrobiłeś uprawnienia, nie może być większy od Twojego aktualnego wieku') } else { return 'lata uprawnień - ' + (age - ageOfLicense) }
}
    /* - d) zwracającą ile spalimy litrów paliwa jeśli jako jeden parametr podamy spalanie
     na 100km, a jako drugi przejechaną trasę, */
const cenaPaliwa = 5.25

function tripCosts(fuelUsage, distance) {
    return (fuelUsage * distance * cenaPaliwa / 100)
}
    /*   e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
     podajemy w parametrach funkcji, */
function dzieci(name, age, numberOfChildren)  {return name + ' ma ' + age + ' lata i ' + numberOfChildren + ' dzieci'}

/* --- 2 --- */

/* a) zwracającą przekazaną do parametru tablicę,*/
function getTab(parametr) {
    return parametr
}
const tab = [1, 2, 3]
const zwrocTablice = getTab(tab)
/*   b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej*/
const tab2 = ['Marek', 'Jarek', 'Czarek']
function getElement(parametr) {
    return parametr
}
const getSecondElement = getElement(tab2[2])
/* c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'*/
const tab3 = ['Ania', 'Basia', 'Gabi']
function getString(parametr1, parametr2) {
    return 'Przekazana tablica ma ' + parametr1 + ' elementów, a elementem nr 3 jest ' + parametr2
}
const getString1 = getString(tab3.length, tab3[2])
/*   d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
     zmienioną tablice z dodatkowym elementem,*/
     const tab6 = []
     
     
     function pushElement(item) {
         const newArray = tab6.push(item)
         return newArray
     }
     
     
     /* e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
     do funkcji */
     const person5 = {
         name: 'Marek',
         surname: 'Markowski',
         height: 177,
         age: 19,
     
     }
     
     function zwrocImie() {
         const imie = person5.name
         console.log(imie)
     }
     /* f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
          i x(tu zmienna) cm wzrostu'*/
     function zwrocStringa() {
         const a = person5.name
         const b = person5.surname
         const c = person5.age
         const d = person5.height
         return 'imię: ' + a + ', nazwisko: ' + b + ' ma ' + c + 'lat i ' + d + ' cm wzrostu'
     
     }
     /*   g) przyjmującą dwa parametry jeden do obiekt a drugi to wiek, i zwracającą zmieniony
          wiek, czyli wiek który przekazujemy w parametry zamieniamy z wiekiem w obiekcie,*/


/* --- 3 --- */
/* ---    a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
     ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
     18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
     ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"s --- */
const person = {
    name: 'Grzegorz',
    age: 18,
    license: true,
}
function canDrive(person) {
if (person.age < 18 || person.license === false) {console.log('Nie ma prawa jazdy')}
else {console.log('Mozesz śmiało jeździc')}}
/* - b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
     'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
     'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
     pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj' */
function trade(parametr1,) {
    if (parametr1 === 'Kup') {console.log('mozesz zrobic zakupy')}
    else if(parametr1 === 'Sprzedaj') {console.log('Możesz tutaj swobodnie sprzedawać')}
    else {console.log('Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj')}
}

/* c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
     'Liczba jest ujemna' lub 'Liczba jest równa 0'*/
function isPositive(number) {
    if (number > 0) {console.log('Liczba jest dodatnia')}
    else if (number == 0) {console.log('Liczba jest równa zero')}
    else {console.log('Liczba jest ujemna')}
}
/*d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',*/
function podzielna(number) {
    if (number % 3 === 0 && number % 5 === 0) {console.log('FizzBuzz')}
    else if (number % 5 === 0) {console.log('Buzz')}
    else if (number % 3 === 0) {console.log('Fizz')}
}
/*  e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
     powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
     ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
     oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,*/
     
const person2 = {
    age: 13,
    permission: true,
}
function canWatch(person2) {
    if (person2.age > 15 || person2.permission == true) {console.log('Mozesz oglądać')}
    else {console.log('Nie mozesz oglądac')}
}
/*    f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,*/

function yesOrNo(parametr1 = true, parametr2 = false) {

    if (parametr1 === true) {console.log('tak')}
    else if(parametr2 === false) {console.log('nie')}
}

/* g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie*/
function isEven(number) {
number % 2 === 0 ? console.log('Jest parzysta') : console.log('nie jest parzysta')
}

     
     
     /* a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
          produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,
          jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
          aucie + informacje czy jest Cabrio czy nie jest,*/
     const car = {
         make: 'Ford',
         model: 'Escort',
         year: 2020,
         isCabrio: true
     }
     
     function viewCar() {
         if (car.year > 2021) {
             console.log('Auta jeszcze nie wyprodukowano')
         } else {
             console.log(car)
         }
     }
     /* b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
     jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
     'tablica ma x elementów',*/
     const array1 = [1, 2, 3, 4]
     
     
     function isEmpty() {
         if (array1.length > 0) { console.log('tablica zawiera ' + array1.length + ' elementy') } else { console.log('Tablica jest pusta') }
     }
     
     /* c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiOgladacFilmy, maTV)
          a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
          odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
          obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
          (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
          żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować' */
          const osoba = {
              name: 'Grzegorz',
              surname: 'Duda',
              age: 24,
              likesFilms: false,
              hasTv: true,
              likesBooks: false
             
          }
          const ksiazka = {
              title: 'Piknik na skraju drogi',
              type: 'Fantasy',
              sites: 160,
          }
          function bookOrFilm() {
            if (osoba.likesBooks === true) {
                return 'Cześć ' + osoba.name + ', polecam Ci przeczytać ' + ksiazka.title + ', ma tylko ' + ksiazka.sites + ' stron'
            } else if (osoba.likesBooks === false && osoba.hasTv === true) {
                return 'idz oglądać TV'
            } else if (osoba.likesBooks === false && osoba.hasTv === false) {return 'Nie wiem co Ci zaproponowac'}
          }
