# S3-Multer-Node-Express
This REST APIs setup is for Image file upload to AWS S3 bucket and delete those files using Node JS, Multer, ExpressJS.

# Installation
1. Download or Clone the code.
2. Open cmd/terminal and use < npm install > to install all the dependencies.
3. To install nodemon use command < npm i nodemon --save-dev >.
4. Place AWS S3 Bucket details in .env file
5. Use < npm test > to run this code.
6. Test url is http://localhost:5000/upload/upload-file for file upload
7. Test url is http://localhost:5000/upload/delete-file/<AWS-file-key> to delete file
8. Method POST.