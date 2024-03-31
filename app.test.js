const {
    convertStringsToNumsArray,
    findMean,
    findMedian,
    findMode } = require('./helperFunctions')


describe('find mean, median and mode', function () {

    test('find mean', function () {
        const numsArray = [1, 2, 3, 4]

        const mean = findMean(numsArray)

        expect(mean).toEqual(5)
    })

    test('find median with an even array of numbers', function () {
        const numsArray = [1, 2, 3, 4]

        const median = findMedian(numsArray)

        expect(median).toEqual(2.5)
    })

    test('find median with an odd array of numbers', function () {
        const numsArray = [1, 2, 3]

        const median = findMedian(numsArray)

        expect(median).toEqual(2)
    })

    test('find mode', () => {
        const numsArray = [1, 2, 3, 4, 4]
        const mode = findMode(numsArray)

        expect(mode).toEqual(4)
    })

    test('converting a string to an array', () => {
        const aSingleString = '1, 2, 3'

        const numsArray = convertStringsToNumsArray(aSingleString)

        expect(numsArray).toEqual([1, 2, 3])
    })

    test('typed invalid number into query string', () => {
        const aSingleString = '1, 2, cat'

        const error = convertStringsToNumsArray(aSingleString)

        expect(error.message).toEqual('Invalid number')
    })
})

