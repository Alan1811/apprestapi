'use strict';

module.exports = function (app) {
    var profil = require('./controller');
    app.route('/')
        .get(profil.index);

    app.route('/user')
        .get(profil.tampilsemuauser);

    app.route('/user/:id')
        .get(profil.tampilberdasarkanid);

    app.route('/user')
        .post(profil.tambahuser);

    app.route('/user')
        .put(profil.ubahuser);

    app.route('/user')
        .delete(profil.hapususer);

    app.route('/tampilbus')
        .get(profil.tampilgroupbus);
}