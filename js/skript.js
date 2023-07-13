const myNime = {
    city: 'Las Vegas'
}

myNime.popular = true 
console.log(myNime)

myNime.country = 'UAE' 
console.log(myNime)




//Объект удаление свойств  
const myTime = {
    city: 'Las Vegas',
    popular: true,
    country: 'UAE'
}

delete myTime.country 
console.log(myTime)


//Достууп к значению свойств с использованием скобок 
const myCiti = {
    city: 'Las Vegas'
}

myCiti['popular'] = true
console.log(myCiti)

const countryPropertyName = 'country'
myCiti[countryPropertyName] = 'USA'
console.log(myCiti)


//Объекты вложнные свойства
const myHiti = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA' 
    }
}

console.log(myHiti.info.isPopular)

delete myHiti.info['isPopular']
console.log(myHiti)



//Объекты использование переменных (можно легко использовать переменные в качестве значений для свойств объектов)
const name = 'Tima'
const postsqty = 22

const userProfile = {
    name: name,
    postsqty: postsqty,
    hasSignedAgreement: false
}
console.log(userProfile)




//Объекты можно сокрщать... сокращённый формат записи свойств


const userProfile2 = {
    name,
    postsqty,
    hasSignedAgreement: false
}
console.log(userProfile)





//создание копии объект
const personOne = {
    name: 'Tima',
    age: 22
}

function increasePersonAge (person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    return updatedPerson 
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)
//Объект "personOne" не изменился



//Колбек функции 
function printMyName () {
    console.log('TIMA')
}

setTimeout(printMyName,3000) //"setTimeout" Встроенная функция джаваскрипт







//Значения параметров функции по умолчанию
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
}) 

const firstPost = {
    Id: 1,
    Author:'Tima',
} 

console.log(newPost(firstPost))


//  тернарный оператор

const value = 11

value
   ? console.log('Условие истинно')
   : console.log('Условие ложно')
 

let value2 = 11
console.log(value2 >= 0 ? value2 : -value2)    

value2 = -5 
const res = value2 >= 0 ? value2 : -value2
console.log(res)

//Метод массивов forEach
const myArray = ['firsr', 'second', 'third']
myArray.forEach((element, index) => {
    console.log(element, index)
})
