'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest api ku berjalan", res)
};

//menampilkan semua data user
exports.tampilsemuauser = function (req, res) {
    connection.query('SELECT * from user', function (error, rows, fields) {
        if (error) {
            console.error();
        }
        else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data user berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT *from user WHERE id_user = ?', [id], function (error, rows, fields) {
        if (error) {
            console.error();
        }
        else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data user
exports.tambahuser = function (req, res) {
    var id = req.body.id_user;
    var nama = req.body.nama;
    var no_hp = req.body.no_hp;
    var email = req.body.email;
    var password = req.body.password;

    connection.query('INSERT into user (nama,no_hp,email,password) VALUES(?,?,?,?)',
        [nama, no_hp, email, password],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan data user", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahuser = function (req, res) {
    var id = req.body.id_user;
    var nama = req.body.nama;
    var no_hp = req.body.no_hp;
    var email = req.body.email;
    var password = req.body.password;

    connection.query('UPDATE user SET nama=?, no_hp=?, email=?, password=? WHERE id_user=?', [nama, no_hp, email, password, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//menghapus data berdasarkan id
exports.hapususer = function (req, res) {
    var id = req.body.id_user;
    connection.query('DELETE FROM user WHERE id_user=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
};

//menampilkan bus group
exports.tampilgroupbus = function (req, res) {
    connection.query('SELECT user.id_user, user.nama, user.no_hp, user.email, user.password, bus.id_bus, bus.plat_no, bus.tipe_bus, bus.harga_tiket, bus.status_bus FROM boking JOIN user JOIN bus WHERE boking.id_user=user.id_user AND boking.id_bus=bus.id_bus ORDER BY user.id_user',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )

}