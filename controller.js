'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest api ku berjalan", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('SELECT * from mahasiswa', function (error, rows, fileds) {
        if (error) {
            console.error();
        }
        else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT *from mahasiswa WHERE id_mahasiswa = ?', [id], function (error, rows, fileds) {
        if (error) {
            console.error();
        }
        else {
            response.ok(rows, res)
        }
    });
}