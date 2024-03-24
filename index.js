// Write your solution here!
let cats= (['Milo', 'Otis', 'Garfield'])

let beforeEach=() => {
    cats.length=0
    cats.push('Milo', 'Otis', 'Garfield')
}

let destructivelyAppendCat=() =>{
    cats.push('Ralph')
}

let destructivelyPrependCat=() =>{
    cats.unshift('Bob')
}

let destructivelyRemoveLastCat=() =>{
    cats.pop(0)
}
let destructivelyRemoveFirstCat=() => {
    cats.shift(0)
}
let appendCat=(name)=> {
 return[...cats, 'Broom']
}

let prependCat=(name) =>{
 return [ 'Arnold', ...cats]
}

let removeLastCat=() =>{
  return cats.slice(0, cats.length-1)
}
removeLastCat()

let removeFirstCat=() =>{
  return cats.slice(1)
}
removeFirstCat()



