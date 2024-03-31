const express = require('express')
const ExpressError = require('./expressError')
const { convertStringsToNumsArray, findMean, findMedian, findMode } = require('./helperFunctions')

const app = express()


app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Numbers are required', 400)
        }

        let numsArray = convertStringsToNumsArray(req.query.nums)

        if (numsArray instanceof Error) {
            throw new ExpressError(numsArray.message, 400)
        }

        let mean = findMean(numsArray)

        return res.json({
            response: {
                operation: 'mean',
                value: mean
            }
        })
    } catch (err) {
        next(err)
    }
})


app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Numbers are required', 400)
        }

        let numsArray = req.query.nums.split(',').map((x) => +x)

        for (let num of numsArray) {
            if (isNaN(num)) {
                throw new ExpressError('Invalid number', 400)
            }
        }

        let median = findMedian(numsArray)

        return res.json({
            response: {
                operation: 'median',
                value: median
            }
        })
    } catch (err) {
        next(err)
    }
})


app.get('/mode', (req, res, next) => {
    try {

        let numsArray = convertStringsToNumsArray(req.query.nums)

        let mode = findMode(numsArray)

        return res.json({
            response: {
                operation: 'mode',
                value: mode
            }
        })
    } catch (err) {
        next(err)
    }
})


app.use((req, res, next) => {
    const err = new ExpressError('Page Not Found', 400)
    next(err)
})

app.use((error, req, res, next) => {
    const message = error.message
    const status = error.status || 500

    return res.status(status).json({
        error: { message, status }
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})


module.exports = {
    app: app,
    ExpressError: ExpressError
}