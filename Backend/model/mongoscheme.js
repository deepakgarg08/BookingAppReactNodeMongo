const mongoose = require('mongoose')

let schema = mongoose.Schema;
let dbschema = new schema(
    {
        "location": {
            "type": "String"
        },
        "staff": {
            "type": "String"
        },
        "services": {
            "name": {
                "type": "String"
            },
            "price": {
                "type": "String"
            }
        },
        "extraService": {
            "name": {
                "type": "String"
            },
            "price": {
                "type": "String"
            }
        },
        "dateAndTime": {
            "date": {
                "type": "String"
            },
            "time": {
                "type": "String"
            }
        },
        "information": {
            "fullName": {
                "type": "String"
            },
            "address": {
                "type": "String"
            },
            "additionalInfo": {
                "type": "Mixed",
                 required: false

            },
            "mobile": {
                "type": "String"
            }
        },
        "currentPageState": {
            "type": "String"
        },
        "bookingConfirmed": {
            "type": "String",
            required: false
        },
        "requestId": {
            "type": Number
            // ,  "unique" : true
        },
        "totalamount" : {
            "type" : Number
        }
    }
)


// module.exports = mongoose.model('studentdbfor', studentSchema)
module.exports = mongoose.model('bookingcustomerdb', dbschema)