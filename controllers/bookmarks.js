const Bookmark = require('../models/bookmark')


module.exports.index = async(req, res)=>{
    const bookmarks = await Bookmark.find({ user : req.user._id });
    res.render('bookmark/index', { bookmarks })
};

module.exports.newForm = (req, res)=>{
    res.render('bookmark/new')
};

module.exports.newBookmark = async (req,res) => {
    const newBookmark = req.body;
    const bookmark = new Bookmark(newBookmark);
    bookmark.user = req.user._id;
    await bookmark.save();
    res.redirect(`/bookmark/${bookmark._id}`)
};

module.exports.showPage = async(req, res)=>{
    const { id } = req.params;
    const bookmark = await Bookmark.findById(id);
    if(!bookmark){
        req.flash('error', 'Bookmark not found!');
        return res.redirect(`/bookmark`)
    }
    res.render('bookmark/show', { bookmark });
};

module.exports.editForm = async(req, res)=>{
    const { id } = req.params;
    const bookmark = await Bookmark.findById(id);
    if(!bookmark){
        req.flash('error', 'Bookmark not found!');
        return res.redirect(`/bookmark`)
    }
    res.render('bookmark/edit', { bookmark })
};

module.exports.editBookmark = async(req, res)=>{
    const { id } = req.params;
    const ediitedBookmark = req.body;
    const bookmark = await Bookmark.findByIdAndUpdate(id, { ...ediitedBookmark });
       if(!bookmark){
            req.flash('error', 'Bookmark not found!');
            return res.redirect(`/bookmark`)
    }

    req.flash('success', 'Campground successfully updated')
    res.redirect(`/bookmark/${bookmark._id}`);
};

module.exports.deleteBookmark = async(req, res)=>{
    const { id } = req.params;
    const delBookmark = await Bookmark.findByIdAndDelete(id);
    req.flash('success', `Successfully deleted the ${delBookmark.title.toUpperCase()} bookmark`);
    res.redirect('/bookmark');
};