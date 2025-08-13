if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local')
const passport = require('passport')
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const User = require('./models/user')
const userRoutes = require('./routes/user');
const ExpressError = require('./utils/expressError');
const bookmarkRoutes = require('./routes/bookmark');
const collectionRoutes = require('./routes/collections');
const collectionBookmarksRoutes = require('./routes/collectionBookmarks');

const MongoDBStore = require("connect-mongo");

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/developerBookmarks';

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error"));
db.once('open', () =>{
    console.log('Database connected');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(methodOverride('_method'));

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const store = MongoDBStore.create({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.warning = req.flash('warning');
    res.locals.info = req.flash('info');
    next();
});

app.use('/bookmark', bookmarkRoutes);
app.use('/', userRoutes);
app.use('/collections', collectionRoutes);
app.use('/collections/:id/bookmarks', collectionBookmarksRoutes)

app.get('/', (req, res)=>{
    res.render('home')
});


app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});

app.use((err, req, res, next)=>{
    const {statusCode = 500} = err;
    if(!err.message){
        err.message = 'Something Went Wrong!'
    }
    res.status(statusCode).render('error', { err })
});

app.listen(3000, ()=>{
    console.log('App is listening on PORT 3000')
});
