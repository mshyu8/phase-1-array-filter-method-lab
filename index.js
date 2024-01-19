// Code your solution here
function findMatching(arr, arg) {
    let newArr = arr.filter(function (element) {
        return element.toLowerCase() === arg.toLowerCase();
    })
    return newArr;
}

function fuzzyMatch(arr, arg) {
    let newArr = arr.filter(function (element) {
        return element.toLowerCase().substring(0, arg.length) == arg.toLowerCase();
    })
    return newArr;
}

function matchName(arr, arg) {
    let newArr = arr.filter(function (element) {
        return element.name === arg;
    })
    return newArr;
}