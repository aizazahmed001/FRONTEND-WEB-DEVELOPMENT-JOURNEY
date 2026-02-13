function determineDriveStatus(){
   let age= 34;
   if(age === undefined){
      return "Age is not defined";
   }
   console.log("Checking Drive Status");

   if(age>18){
      return "Eligible to drive";
   }
   else if(age === 18){
      return "Eligible to drive with restrictions";
   }
   else{
      return "Not eligible to drive";
   }  
}

console.log(determineDriveStatus());
// Output: "Eligible to drive"

function greeting(name){
   console.log(`Welcome to the system, ${name} !`);
}
greeting("AHMED");