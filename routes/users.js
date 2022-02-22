var express = require('express');
var router = express.Router();
const db = require('../config/mongoose');
const User = require('../models/user');

router.use(express.urlencoded({
    extended: true
}));


router.get('/', function (req, res) {

    User.count({}, function (err, no) {
        if (err) {
            console.log("error in counting");
            return;
        }
        res.render('home', {
            totalUsers: no
        })
    })

})

router.get('/profile', function (req, res) {

    User.find({}, function (err, users) {
        if (err) {
            console.log('error in fetching the contacts from db');
            return;
        }

        res.render('profile', {
            user_list: users
        });
    })

})

router.get('/registration', function (req, res) {
    res.render('registration')

})
router.post('/create-user', function (req, res) {
    User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }, function (err, newUser) {
        if (err) {
            console.log('error in creating a contact!');
            return;
        }
        console.log('***********', newUser);
        return res.redirect("back");

    })

})
router.get('/delete-user', function (req, res) {

    let id = req.query.id;
    console.log(id);

    User.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    })

})

module.exports = router;