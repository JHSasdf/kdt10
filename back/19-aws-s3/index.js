const express = require('express');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const multer = require('multer');
const multerS3 = require('multer-s3'); // aws s3에 이미지를 업로드하기 위한 multer 설정
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// aws 설정
aws.config.update({
    accessKeyId: process.env.AWS_S3_KEY_ID,
    secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
    region: process.env.AWS_S3_REGION
})

// aws s3 인스턴스 생성
const s3 = new aws.S3();

app.set('view engine', 'ejs');
app.set('views', './views');

// multer 설정 - aws
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: 'public-read', // 파일 접근 권한 (public-read로 해야 업로드 된 파일이 공개됨)
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동감지
        metadata: function(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb) {
            cb(null, Date.now().toString() + "-" + file.originalname);
        }
    })
})

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/upload', upload.array('files'), function(req, res) {
    console.log(req.files);
    res.send(req.files);
});

app.listen(process.env.PORT, function() {
    console.log(`http://localhost:${process.env.PORT}`)
});