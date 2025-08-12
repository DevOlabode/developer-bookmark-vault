const express = require('express');
const {isLoggedIn, validateBookmark} = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const bookmarks = require('../controllers/bookmarks')

const router = express.Router();

router.route('/')
    .get(isLoggedIn, catchAsync(bookmarks.index))
    .post(isLoggedIn, validateBookmark,  catchAsync(bookmarks.newBookmark))

router.get('/new', isLoggedIn, bookmarks.newForm);

router.route('/:id')
    .get(isLoggedIn, catchAsync(bookmarks.showPage))
    .put(isLoggedIn, validateBookmark, catchAsync(bookmarks.editBookmark))
    .delete(isLoggedIn, catchAsync(bookmarks.deleteBookmark))

router.get('/:id/edit', isLoggedIn, catchAsync(bookmarks.editForm));

module.exports = router;