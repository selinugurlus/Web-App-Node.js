 const express=require("express");
 const app=express();
 
 const userRoutes=require("./routes/users");
 
 app.set("view engine","ejs");

 app.use(express.static('public'));//açtığımız public klasöründeki img,css vb dosyalarını tarayıcıda göstermek için yapıyoruz.
 app.use(express.static('node_modules'));//npm i bootstrap ile indirdiğimiz  bootstrap kütüp. kullanmak için bukunduğu klasörü açık hale getiriyoruz.
 
 app.use(userRoutes);

 app.listen(3000,function()
 {
    console.log("listening on port 3000");
 });