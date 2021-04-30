const mongoose = require('mongoose')
const Schema = mongoose.Schema

const konterhpSchema = new Schema({
    namahp:{
        type: String
        },
        merkhp:{
            type: String
        },
        hargahp:{
            type: String
        },
        jumlahpembelian:{
            type: String
        },
        totalpembayaran:{
            type: String
        }
})
module.exports =mongoose.model('konterhp',konterhpSchema)