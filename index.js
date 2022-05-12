var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer')
const upload = multer({dest: "uploads/"});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// upfile
// {"name":"9Nzx_CDLTio.jpeg","type":"image/jpeg","size":1253503}
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file);
  res.json({
    "name":req.file.originalname,
    "type":req.file.mimetype,
    "size":req.file.size
  });
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
