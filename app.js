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
        summary: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. " +
            "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. " +
            "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. " +
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, " +
            "consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable " +
            "source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero," +
            " written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, " +
            "Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced " +
            "below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact" +
            "original form, accompanied by English versions from the 1914 translation by H. Rack",
        img: "/images/0.jpg",
        id: "0"
    },
    {
        title: "test title",
        author: "test author",
        summary: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. " +
            "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. " +
            "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. " +
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, " +
            "consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable " +
            "source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero," +
            " written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, " +
            "Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced " +
            "below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact" +
            "original form, accompanied by English versions from the 1914 translation by H. Rack",
        img: "/images/1.jpg",
        id: "1"
    }
]

var ids = [0, 1]

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/about_us', (req, res) => {
    res.render('about_us', { posts });
});

app.post('/', (req, res) => {
    posts.push({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        content: req.body.content,
        img: req.body.img,
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
        img: req.body.img,
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