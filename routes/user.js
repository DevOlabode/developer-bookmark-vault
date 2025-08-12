const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const user = require('../controllers/user')
const {loginAuthenticate, storeReturnTo, isLoggedIn} = require('../middleware')


router.route('/signup')
    .get(user.signUpForm)
    .post(storeReturnTo, catchAsync(user.signUp))

router.route('/login')
    .get(user.loginForm)
    .post(storeReturnTo, loginAuthenticate, catchAsync(user.login))

router.get('/logout', catchAsync(user.logout));

router.get('/user/info', isLoggedIn, user.userInfo);

router.post('/user', isLoggedIn, catchAsync(user.user));

router.put('/user/edit', isLoggedIn, catchAsync(user.editUser));

router.route('/user/change-password')
    .get(isLoggedIn, user.changepasswordForm)
    .put(isLoggedIn, catchAsync(user.changePassword))

module.exports = router