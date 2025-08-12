const express = require('express');
const router = express.Router({ mergeParams: true });

const { isLoggedIn} = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const collectionBookmark = require('../controllers/collectionBookmarks');

router.get('/new', isLoggedIn, catchAsync(collectionBookmark.newBookmarkForm));

router.post('/', isLoggedIn, catchAsync(collectionBookmark.newBookmark));

router.route('/:bookmarksId')
    .get(isLoggedIn, catchAsync(collectionBookmark.showPage))
    .put(isLoggedIn, catchAsync(collectionBookmark.editBookmark))
    .delete(isLoggedIn, catchAsync(collectionBookmark.deleteBookmark))

router.get('/:bookmarksId/edit', isLoggedIn, catchAsync(collectionBookmark.editForm));


module.exports = router;isLoggedIn, catchAsync(collectionBookmark.deleteBookmark)