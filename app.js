module.exports = app => {
    app.sessionStore ={
       async get(key){

       },
       async set(key,value,maxAge){
          
            console.log(key,value,maxAge);
            return 1
       },
       async destroy (key){

       }
   }
}