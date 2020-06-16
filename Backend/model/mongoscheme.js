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
                "type": "Date"
            }
        },
        "extraService": {
            "name": {
                "type": "String"
            },
            "price": {
                "type": "Date"
            }
        },
        "dateAndTime": {
            "date": {
                "type": "Date"
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
                "type": "Mixed"
            },
            "mobile": {
                "type": "String"
            }
        },
        "currentPageState": {
            "type": "String"
        },
        "bookingConfirmed": {
            "type": "String"
        },
        "request_id": {
            "type": "String"
            // ,  "unique" : true
        }
    }
)


// module.exports = mongoose.model('studentdbfor', studentSchema)
module.exports = mongoose.model('bookingcustomerdb', dbschema)