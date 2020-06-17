const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
const ejs  = require('ejs')
const jsonToTable = require('json-to-table');

const app = express()

app.use(cors())
app.options('*', cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const Posts = require('./model/mongoscheme')

const port = process.env.PORT || 4000
const uri = "mongodb+srv://deepakgarg08:92119211@cluster0-zr3gu.mongodb.net/customerDataBookingApp?retryWrites=true";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) console.log('err')
    else console.log("connection successful")
})
mongoose.set('useCreateIndex', true);

app.get('/', (req, res) => {
    res.send('Welcome to Booking app ')
})

app.post('/new', async (req, res) => {

    
    let customerDetails = req.body.customerData
    console.log('customerDetails', customerDetails)
    let user = new Posts(customerDetails)
    await user.save().then(data => {
        console.log('data response', data)
        
        return res.send(data)
    }).catch(err => {
        console.log("check err",err)
        return res.json(err)
    })
})

//retrieve result
app.get('/get/:request_id', async function (request, response) {
    let customerDetails = request.params.request_id
    try {
        const customer = await Posts.find({request_id: customerDetails});
        ;

        if (customer === null || customer.length === 0) {
            response.send("no result found")
            return;
        }  else {
            return response.json(customer[0])
        }

    } catch (err) {
        response.json({'error': err})
    }
})

//retrieve result
app.get('/getall', async function (request, response) {


    try {
        const customer = await Posts.find({});
        if (customer === null || customer.length === 0) {
            return response.send("no result found")
            
        }  else {
            const tabled = jsonToTable(customer);
            console.log('tabled', tabled)


            let data = {
                secret : "92119211",
                customer
            }
            customer.secret = "92119211"
            return response.render('result', {data })

            // return response.json(customer)
        }

    } catch (err) {
        response.json({'error': err})
    }

})



app.delete('/deleteall', async function (request, response) {

    try {
        const res = await Posts.deleteMany({});
        await response.send(`All records (${res.deletedCount}) deleted successfully`)

    } catch (error) {
        await response.send('error occured', error)

    }

})

app.listen(port, e => console.log("server started at port " + port))