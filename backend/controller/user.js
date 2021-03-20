var User = require('../models/user');

exports.getUser = function (req, res) {

    User.find().then(function (data) {
        res.send(data);

    }).catch(function (err) {
        res.send(err);
    });
}

exports.saveUser = function (req, res) {
    console.log(req.body);

    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        mobile: req.body.mobile,

    })
    user.save().then(function (data) {
        res.send("user save successfully");

    }).catch(function (err) {
        res.send(err);
    });

}

exports.getUserById = function (req, res) {
    console.log(req.params);

    User.findById(req.params.id).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        res.send(err);
    });

}


exports.deleteUser = function (req, res) {

    User.findByIdAndRemove(req.params.id).then(function (data) {
        if (!data) {
            res.send("given not found");
        }
        res.send("deleted successfully");

    }).catch(function (err) {
        res.send(err);
    });

}

exports.updateUser = function (req, res) {

    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        mobile: req.body.mobile

    }, { new: true }
    ).then(function (data) {

        res.send("updated");

    }).catch(function (err) {
        res.send(err);
    });

}