# URL Shortener
a web app can shorten an URL to five letters random ID.
You can find the uploaded web site at https://damp-sea-27845.herokuapp.com/


# Installation in your local device

### Run below command in terminal, need node.js and mongodb installed first

clone repository to your local computer
```
$ git clone https://github.com/Sean-Yu-PoHsiang/URL_Shortener.git
```
install node-modules with npm
```
$ npm install
```
executing data base
```
[~/mongodb/bin] $ ./mongod --dbpath [~/mongodb-data]
```
executing server
```
$ npm run start
```
terminal show message success
```
App is running on http://localhost:3000
mongodb connected
```
now you can browse the website on
```
http://localhost:3000
```

# Build with
- node.js v10.15.0
- express.js v4.17.1
- express-handlebars v5.1.0
- body-parser v1.19.0
- mongoose v5.10.6
- mongodb v4.4.1

## Author
Sean Yu