/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings 
 * @returns {Array|Error} 
 */

function convertStringsToNumsArray(queryString) {
    let numsArray = []

    let stringsToArray = queryString.split(',')

    for (let stringNum of stringsToArray) {
        if (isNaN(stringNum)) {
            return new Error('Invalid number')
        }
        numsArray.push(+stringNum)
    }
    return numsArray
}


/** 
 * @param {Array} numsArray 
*/
function findMean(numsArray) {
    let sumOfNums = numsArray.reduce((acc, curr) => {
        return acc + curr
    })

    let mean = sumOfNums / 2

    return mean
}

function findMedian(numsArray) {
    let sortedNums = numsArray.sort((a, b) => { return a - b })
    let median

    if (sortedNums.length % 2 == 0) {
        let lengthOfArray = sortedNums.length
        let firstIndex = lengthOfArray / 2
        let secondIndex = firstIndex - 1
        median = (sortedNums[firstIndex] + sortedNums[secondIndex]) / 2
    } else {
        let middleIndex = Math.floor((sortedNums.length) / 2)
        median = sortedNums[middleIndex]
    }
    return median
}

function findMode(numsArray) {
    let sortedNums = numsArray.sort((a, b) => { return a - b })

    let countOfNums = {}

    for (let num of sortedNums) {
        if (num in countOfNums) {
            countOfNums[num] += 1
        } else {
            countOfNums[num] = 1
        }
    }

    let mode
    let values = Object.values(countOfNums)

    let maxNum = Math.max(...values)

    let keyNames = Object.keys(countOfNums)

    for (let keyName of keyNames) {
        if (countOfNums[keyName] === maxNum) {
            mode = +keyName
        }
    }
    return mode
}


module.exports = {
    convertStringsToNumsArray: convertStringsToNumsArray,
    findMean: findMean,
    findMedian: findMedian,
    findMode: findMode
}