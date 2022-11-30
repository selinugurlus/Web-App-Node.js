 const express=require("express");
 const app=express();

 app.set("view engine","ejs");
 app.use(express.static('public'));//açtığımız public klasöründeki img,css vb dosyalarını tarayıcıda göstermek için yapıyoruz.
 app.use(express.static('node_modules'));//npm i bootstrap ile indirdiğimiz  bootstrap kütüp. kullanmak için bukunduğu klasörü açık hale getiriyoruz.
 const data=[
    {id: 1,name:"iphone 14",price:30000,isActive:true,isHome:true,imageUrl:"img1.jpg"},
    {id: 2,name:"iphone 13",price:20000,isActive:false,isHome:true,imageUrl:"img2.jpg"},
    {id: 3,name:"iphone 12",price:10000,isActive:true,isHome:false,imageUrl:"img3.jpg"}
 ];

 app.use("/products/:id",function(req,res){
   const product=data.find(p=>p.id==req.params.id);//kullanıcının gönderdiği id bilgisi ile datadan o idli ürünü geri döndürür.
    res.render("product-details",product);
 });

 
 app.use("/products",function(req,res){

    res.render("products",{ list: data});
 });

 app.use("/",function(req,res){
    res.render("index",{ list: data});
 });


 app.listen(3000,function()
 {
    console.log("listening on port 3000");
 });