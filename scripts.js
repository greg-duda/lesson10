/* 1.a*/
function sum1(number1, number2, number3) {
    return number1 + number2 + number3 
}
const wynik1 = sum1(15, 24, 33)
console.log(wynik1)
/*1.b*/
function triangleArea(side, height) {
    const poleTrojkata = side * height / 2
    return `Pole trójkąta to ${poleTrojkata}, czyli ma on ${side} długości i ${height} wysokości`
}
const wynik2 = triangleArea(15, 20)
console.log(wynik2)
/*1.c*/
function yearsOfLicense(age, ageOfLicense) {
    const lataUprawnien = age - ageOfLicense
    if (age < ageOfLicense) {
        console.log('Błąd, wiek nie może być mniejszy od wieku zrobienia uprawnień')
    } else {return `Liczba lat uprawnień = ${lataUprawnien}`}
}
console.log(yearsOfLicense(25, 24))    
/*1.d*/
function tripCosts(consumption, distance) {
    const fuelPrice = 5.50
    const wynik3 = consumption * distance * fuelPrice / 100
    return `Koszt podróży - ${wynik3} PLN`
}  
console.log(tripCosts(6.5, 250))
/*1.e*/
function childrenCounter(name, age, numberOfChildren) {
return `${name} ma ${age} lat i ${numberOfChildren} dzieci`
}
console.log(childrenCounter('Kasia', 26, 3))
/*2.a*/
function getArray(array) {
    return array
}
const array1 = [1, 2, 3]
const zwrocTablice = getArray(array1)
console.log(zwrocTablice)
/*2.b*/
const array2 = ['Marek', 'Czarek', 'Heniu']
function getElement(array2) {
    const secondValue = array2[1]
    return secondValue
}
const drugiElement = getElement(array2)
console.log(drugiElement)
/* 2.c*/

const array3 = ['Czarek', 'Jarek', 'Darek', 'Don Wasyl', 'Tobi']
function viewString(array3) {
    const dlugoscTablicy = array3.length
    const trzeciElement = array3[2]
    return `Przekazana tablica ma ${dlugoscTablicy} elementów, a elementem nr 3 jest ${trzeciElement}`
}
console.log(viewString(array3))
/*2.d*/
const array4 = []
function pushElements(item) {
    const newArray = array4.push(item)
    return newArray
   
}
pushElements(1)
pushElements('string')
console.log(array4)
/*2.e */
const obj1 = {
    name: 'Ania',
    surname: 'Kowalska',
    age: 22,
}
function getName() {
    const imie = obj1.name
    return `imie to ${imie}`
}
console.log(getName())
/*2.f*/

function zwrocStringa() {
    const imie = 'Grzesiek'
    const nazwisko = 'Duda'
    const wiek = 24
    return `imię: ${imie} nazwisko: ${nazwisko} wiek: ${wiek}`
}
console.log(zwrocStringa())
/*2.g*/
const object = {
    age: 15
}
function modifyObject(object, age) {
    object.age = age
    return object.age
}
modifyObject(object, 24)
console.log(object.age)

/* 3.a*/
const person7 = {
    name: 'Grzesiek',
    age: 24,
    hasLicense: true,
}

function canDrive(person7) {
    if (person7.age < 18 || person7.hasLicense === false) {
        return `Osoba o imieniu: ${person7.name} nie ma prawa jazdy.`
    } else {
        return `Możesz śmiało jeździc!`
    }
}
console.log(canDrive(person7))

/* b) 3.b*/

function buyOrSell(string) {
    if (string === 'Kup') {
        return `Widzę że chcesz zrobić zakupy`
    } else if (string === 'Sprzedaj') {
        return `Możesz tutaj swobodnie sprzedawać`
    } else {
        return `Nie wybrałeś żadnej z dostępnych opcji - wpisz "Kup" lub "Sprzedaj"`
    }
}
console.log(buyOrSell('Kup'))

/*3.c */

function isPositive(number) {
    if (number > 0) {
        return `Liczba ${number} jest dodatnia`
    } else if (number == 0) {
        return `Liczba ${number} jest równa 0`
    } else if (number < 0) {
        return `Liczba ${number} jest ujemna`
    }
}
console.log(isPositive(-23))

/*3.d, */

function isNumber(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return `FizzBuzz`
    } else if (number % 3 == 0) {
        return `Fizz`
    } else if (number % 5 == 0) {
        return `Buzz`
    } else {
        return ` Liczba ${number} nie jest podzielna ani przez 3, ani przez 5`
    }
}
console.log(isNumber(15))
    /* 3.e */


function canWatch(age, hasConsent = '') {

    if (age >= 15 || hasConsent === true) {
        return `Może oglądać film.`
    } else if (age < 15 || hasConsent === false) {
        return `Nie moze oglądać filmu.`
    } else {
        return `Błąd, wprowadź argument wiek oraz argument hasConsent ' true/false'`
    }
}
console.log(canWatch(20, true))

/*3.f*/
function yesOrNo(parametr = true) {

    parametr === true ? console.log('Tak') : console.log('Nie')
}
/*3.g*/

function isEven(number) {
    number % 2 === 0 ? console.log(`Liczba ${number} jest parzysta`) : console.log(`Liczba ${number} jest nieparzysta`)
}
console.log(isEven(53))

/*4.a*/

const car = {
    make: 'BMW',
    model: '320d',
    year: 2008,
    isCabrio: true,
}
function viewCar(car) {
   
if (car.year > 2021) {
    console.log('Tego auta jeszcze nie wyprodukowano')
} else if (car.isCabrio === false) {
    return `Marka: ${car.year}, Model: ${car.model}, Rok:${car.year}, Cabrio: Nie`
} else {return `Marka: ${car.year}, Model: ${car.model}, Rok:${car.year}, Cabrio: Tak`}
}
console.log(viewCar(car))
/*4.b*/
const array6 = []
function isEmpty(array6) {
    if (array6.length === 0) {
        return `Tablica jest pusta`
    } else {
        return `tablica ma ${array6.length} elementów`
    }
}
console.log(isEmpty(array6))

/*4.c*/
const person4 = {
    imie: 'Grzegorz',
    nazwisko: 'Duda',
    wiek: 24,
    czyLubiCzytacKsiazki: true,
    czyMaTV: false,
}
const ksiazka = {
    title: 'Piknik na skraju drogi',
    type: 'Fantasy',
    sites: 160,
}
function bookOrTV(obj1, obj2) {
    if (obj1.czyLubiCzytacKsiazki === true) {
        return `Cześć ${obj1.imie}, polecam Ci przeczytać książkę "${obj2.title}", ma tylko ${obj2.sites} stron.`
    } else if (obj1.czyLubiCzytacKsiazki === false && obj1.czyMaTV) {
        return `Cześć ${obj1.imie}, idz oglądać TV`
    } else {
        return `Cześć ${obj1.imie}, nie wiem co Ci zaproponowac`
    }
}
console.log(bookOrTV(person4, ksiazka))
