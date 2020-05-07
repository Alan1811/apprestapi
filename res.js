'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};


//response untuk nested tipe_tipe_bus
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variabel group nama user
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah tipe_bus
            if (Array.isArray(group.tipe_bus)) {
                //tambahkan value ke dalam group tipe_bus
                group.tipe_bus.push(item.tipe_bus);
            } else {
                group.tipe_bus = [group.tipe_bus, item.tipe_bus];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();

}