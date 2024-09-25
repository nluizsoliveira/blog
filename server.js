const express = require('express')
const path = require('path')

const app = express();
app.listen(8080);

const publicFolder = path.join(__dirname, 'public');

app.use('/', express.static(publicFolder))
app.get('/',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'about.html')
        )
    }
)

app.get('/about',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'about.html')
        )
    }
)

app.get('/blog',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'blog.html')
        )
    }
)

app.get('/resume',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'resume.html')
        )
    }
)

app.get('/experience',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'experience.html')
        )
    }
)

app.get('/projects',
    function(req, res){
        res.sendFile(
            path.join(publicFolder, 'projects.html')
        )
    }
)