const Collection = require('../models/collection');
const Bookmark = require('../models/bookmark');

module.exports.newBookmarkForm = async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findOne({ _id: id, owner: req.user._id });

    if (!collection) {
        req.flash('warning', 'Collection not found or you do not have permission to add bookmarks');
        return res.redirect('/collections');
    }

    res.render('collectionBookmarks/new', { collection });
};

module.exports.newBookmark = async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    const newBookmark = new Bookmark({
        ...req.body,
        owner : req.user._id
    });
    collection.bookmarks.push(newBookmark);
    await collection.save();
    await newBookmark.save();
    req.flash('success', `Successfully created a bookmark in the ${collection.name.toUpperCase()} collection`);
    res.redirect(`/collections/${collection._id}`);
};

module.exports.showPage = async(req, res)=>{
    const { id, bookmarksId } = req.params;
    const collection = await Collection.findById(id);
    if(!collection){
        req.flash('warning', 'Collection not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    const bookmark = await Bookmark.findById(bookmarksId);
    if(!bookmark){
        req.flash('warning', 'Bookmark not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    res.render('collectionBookmarks/show', { collection, bookmark });
};

module.exports.editForm = async(req, res)=>{
    const { id, bookmarksId } = req.params;
    const collection = await Collection.findById(id);
    if(!collection){
        req.flash('warning', 'Collection not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    const bookmark = await Bookmark.findById(bookmarksId);
    if(!bookmark){
        req.flash('warning', 'Bookmark not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    res.render('collectionBookmarks/edit', { collection, bookmark });
};

module.exports.editBookmark = async(req, res)=>{
    const { id, bookmarksId } = req.params;

    const cleanId = id.trim();
    const cleanBookmarkId = bookmarksId.trim();

    const collection = await Collection.findById(cleanId);
    const bookmark = await Bookmark.findById(cleanBookmarkId);
    if(!collection){
        req.flash('warning', 'Collection not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    if(!bookmark){
        req.flash('warning', 'Bookmark not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    const ediitedBookmark = req.body;
    console.log(req.body)
    await Bookmark.findByIdAndUpdate(bookmark._id , {...ediitedBookmark});
    req.flash('success', `Successfully updated a bookmark in the ${collection.name.toUpperCase()} collection`);
    res.redirect(`/collections/${collection._id}/bookmarks/${bookmark._id}`);
};

module.exports.deleteBookmark = async(req,res)=>{
    const { id, bookmarksId } = req.params;
    const collection = await Collection.findById(id);
    const bookmark = await Bookmark.findById(bookmarksId);
        if(!collection){
        req.flash('warning', 'Collection not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    if(!bookmark){
        req.flash('warning', 'Bookmark not found!');
        return res.redirect(`/collections/${collection._id}`)
    }
    await Bookmark.findByIdAndDelete(bookmark._id);

    req.flash('success', `Successfully deleted the ${bookmark.title.toUpperCase()} bookmark`)
    res.redirect(`/collections/${collection._id}`);
}
