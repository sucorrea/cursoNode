const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.userMiddleware = (req, res, next) => {
    let info = { name: 'Sueli', id: 123 };
    req.userInfo = info;
    next();
}

exports.index = async (req, res) => {

    let responseJson = {
        pageTitle: 'Home',
        posts: []
    };

    const posts = await Post.find();
    responseJson.posts = posts;

    res.render('home', responseJson);
}