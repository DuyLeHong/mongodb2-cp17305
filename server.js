
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:password@cluster0.0n8qgpd.mongodb.net/cp17305?retryWrites=true&w=majority';

const SanPhamModel = require('./SanPhamModel');

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong!');

    let arrSP = await SanPhamModel.find();

    console.log(arrSP);

    res.send(arrSP);

})

app.get('/add_sp', async (req, res) => {
    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong!');

    let spMoi = {
        ten: 'Ao Khoac Nam',
        gia: 550,
        soluong: 120,
        giamgia: 10
    }

    let kq = await SanPhamModel.insertMany(spMoi);

    console.log(kq);

    let arrSP = await SanPhamModel.find();

    res.send(arrSP);

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

