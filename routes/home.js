const express = require('express');

const router = express.Router();

const home = require('../controllers/home')

router.get('/books/fetch', home.getBooks);
router.get('/books/search', home.getBooksSearch)
router.get('/books/the-loai/:id', home.getBooksOfType)
router.get('/books/:id/incrementView', home.incrementView)
router.get('/books/:id/incrementDownload', home.incrementDownload)

router.get('/books/activeBook', home.getActiceBook);
router.get('/books/:id/getAll', home.getAllBookOfType);
router.get('/books/:id', home.getBookDetail);

router.get('/books/new/list', home.getNewBooks)
router.get('/books/theloai/list', home.getTheloai)
router.post('/books/search/app', home.searchBooksApp)

module.exports = router