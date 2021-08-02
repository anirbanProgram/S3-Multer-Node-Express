const s3 = require('../config/s3.config')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    upload_multiple_file: (req, res) => {
        try {
            const s3Client = s3.s3Client;
            const params = s3.uploadParams;
            var ResponseData = [];
            req.files.map((item) => {

                params.Key = item.originalname;
                params.ContentType = item.mimetype;
                params.Body = item.buffer;

                s3Client.upload(params, function (err, data) {
                    if (err) {
                        res.json({ "error": true, "Message": err });
                    } else {
                        ResponseData.push(data);
                        if (ResponseData.length == req.files.length) {
                            res.status(200).send({ "success": true, "Message": "File Uploaded SuceesFully", Data: ResponseData });
                        }
                    }
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    delete_file: async (req, res) => {
        try {
            var params = {
                Bucket: process.env.BUCKET,
                Key: req.params.key
            };
            s3.s3Client.deleteObject(params, function (err, data) {
                if (data)
                    console.log("Remove image from bucket.", data);
                else
                    console.log("Something is wrong !");

            });
            res.status(200).send({ success: true, msg: 'File deleted successfully.' });
        } catch (err) {
            res.status(400).send(err)
        }
    }


}















