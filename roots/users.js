
 const express=require("express");
 const router = express.Router();

 const db=require("../data/db");

 router.use("/products/:id", async function(req,res){
    try{
       const [product,] = await db.execute("select* from products where id=?",[req.params.id]);
       res.render("product-details",{
         a: product[0]
      });
   }
   catch(err){
       console.log(err);
 
   }
    
  });
 
  
  router.use("/products", async function(req,res){
 
    try{
       const [products,] = await db.execute("select* from products where isActive=1");
       res.render("products",{
         list: products
      });
   }
   catch(err){
       console.log(err);
 
   }
  });
 
  router.use("/",async function(req,res){
    //async - await (await asenkron func. ile çağrılır.)
     try{
         const [products,] = await db.execute("select* from products where isHome=1 and isActive=1");
         res.render("index",{
           list: products
        });
     }
     catch(err){
         console.log(err);
 
     }
  });

  module.exports=router;
 