const express = require('express');
const app = express();

app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

var posts = [
    {
        title: "test title",
        author: "test author",
        summary: "test summary",
        content: "test content",
        id: "0"
    },
    {
        title: "test title",
        author: "test author",
        summary: "test summary",
        content: "test content",
        id: "1"
    }
]

var ids = [0, 1]

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.post('/', (req, res) => {
    posts.push({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        content: req.body.content,
        id: ids.length
    })
    var tempId = ids.length;
    ids.push(tempId);   
    res.redirect('/');
})

app.post('/edit', (req, res) => {
    var id = req.body.id;
    var newObj = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        content: req.body.content,
        id: req.body.id
    }
    posts.splice(id, 1, newObj);
    var url = '/post/' + id;
    res.redirect(url);
})

app.get('/delete/:id', (req, res) => {
    var id = req.params.id;
    posts[id] = 0;
    res.redirect('/');
})

app.get('/post/:id', (req, res) => {
    var postObject = posts[req.params.id];
    res.render('post', { postObject });
})

app.listen(3000);