// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function () {
    cats.push("Ralph");
    return cats
}

const destructivelyPrependCat = function () {
    cats.unshift("Bob");
    return cats
}

const destructivelyRemoveLastCat = function () {
    cats.pop();
    return cats
}

const destructivelyRemoveFirstCat = function () {
    cats.shift();
    return cats
}

const appendCat = function () {
    let appendedCat = [...cats, "Broom"]
    return appendedCat
}

const prependCat = function () {
    let prependedCat = ["Arnold", ...cats]
    return prependedCat
}

const removeLastCat = function () {
    let removedLastCat = cats.slice(0, cats.length - 1)
    return removedLastCat
}

const removeFirstCat = function () {
    let removedFirstCat = cats.slice(1)
    return removedFirstCat
}