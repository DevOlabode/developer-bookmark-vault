const Bookmark = require('../models/bookmark');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/developerBookmarks')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error"));
db.once('open', () =>{
  console.log('Database connected');
});

const dummyBookmark = [
  {
    title: "MDN JavaScript Reference",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    category: "Frontend",
    tags: ["javascript", "docs", "reference"],
    notes: "The go-to place for understanding JS behavior.",
  },
  {
    title: "CSS Tricks Flexbox Guide",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    category: "Frontend",
    tags: ["css", "flexbox", "layout"],
    notes: "Always use this when stuck on Flexbox layout.",
  },
  {
    title: "FreeCodeCamp DSA Course",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    category: "Learning",
    tags: ["algorithms", "javascript", "data-structures"],
    notes: "Free hands-on coding for interview prep.",
  },
  {
    title: "MongoDB Docs",
    url: "https://www.mongodb.com/docs/",
    category: "Database",
    tags: ["mongodb", "docs", "nosql"],
    notes: "Use this to find MongoDB methods and operators.",
  },
  {
    title: "Node.js Streams Guide",
    url: "https://nodejs.org/en/docs/guides/backpressuring-in-streams/",
    category: "Backend",
    tags: ["node", "streams", "backend"],
    notes: "Good guide on handling large files in Node.js.",
  },
  {
    title: "DevDocs.io",
    url: "https://devdocs.io/",
    category: "Tools",
    tags: ["docs", "reference", "multilang"],
    notes: "Superfast, offline-friendly documentation browser.",
  },
  {
    title: "Regex 101",
    url: "https://regex101.com/",
    category: "Tools",
    tags: ["regex", "testing", "patterns"],
    notes: "Interactive regex tester with explanation.",
  },
  {
    title: "EJS Docs",
    url: "https://ejs.co/",
    category: "Templating",
    tags: ["ejs", "templating", "views"],
    notes: "For understanding how EJS templating works.",
  },
  {
    title: "Render Deployment Guide",
    url: "https://render.com/docs/deploy-node-express-app",
    category: "Deployment",
    tags: ["render", "deploy", "backend"],
    notes: "Steps for deploying full-stack apps to Render.",
  },
  {
    title: "Awesome Node.js GitHub Repo",
    url: "https://github.com/sindresorhus/awesome-nodejs",
    category: "Backend",
    tags: ["node", "libraries", "awesome-list"],
    notes: "Curated list of useful Node.js libraries.",
  }
]


// Bookmark.insertMany(dummyBookmark);

// Seed the database
async function seedDB() {
  try {
    await Bookmark.deleteMany({});
    await Bookmark.insertMany(dummyBookmark);
    console.log("🌱 Database seeded successfully");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();