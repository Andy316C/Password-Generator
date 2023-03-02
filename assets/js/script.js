// 
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var com = prompt("Please Enter:\n L for an A-Z password OR \n N for a Numbered password OR\n B for Both");
  if(com === "L"){
    var lengths = prompt("How many letters would you like to have");
    while(!parseInt(lengths)){
      // console.log("failed");
      lengths = prompt("Please enter the number of letters you would like");
    }
    while(lengths < 8 || lengths > 128){
    lengths= prompt("Please Enter a value Between 8 and 128");
    }
    var specialChar =  prompt("Would you like to include special characters:\n Y = yes N= no");
    var upperLower = prompt("Please Enter: \nU for upper case OR \nL for lower case OR B for both");
    var alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var alphabet1= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','$','&','*','%','?'];
    var alpw="";
    var pw=0;
      for( var i=0;i < lengths; i++){
        if(specialChar === "Y"){
            pw= Math.floor(Math.random() * alphabet1.length);
            if(upperLower === "U"){
                alpw += alphabet1[pw].toUpperCase();
            }else if(upperLower == "B"){
                if(i % 2){
                  alpw += alphabet1[pw].toUpperCase();
                  }else{
                  alpw += alphabet1[pw];
                  }
                }else{
                alpw += alphabet1[pw];
              }
          }else{
            if(upperLower === "U"){
              pw= Math.floor(Math.random() * alphabet.length);
              alpw += alphabet[pw].toUpperCase();
            }else if(upperLower === "B"){
              if(i % 2){
                pw= Math.floor(Math.random() * alphabet.length);
                alpw += alphabet[pw].toUpperCase();
              }else{
                pw= Math.floor(Math.random() * alphabet.length);
                alpw += alphabet[pw];
              }
            }else{
              pw= Math.floor(Math.random() * alphabet.length);
              alpw += alphabet[pw];
            }
          }
        }
        return alpw;

  }else if (com === "N"){
      var lengths = prompt("How many Numbers would you like to have");
      while(!parseInt(lengths)){
          console.log("failed");
          lengths = prompt("Please enter the amount of numbers you would like");
      }
      while(lengths < 8 || lengths > 128){
        lengths= prompt("Please Enter a number between 8 and 128");
      }
      var specialChar =  prompt("Would you like to include special characters with your numbers:\n Y= Yes N= No \n Default is No unless specified");
      var alphabet1= ['!','@','#','$','&','*','%','?','_',"+"];
          var alpw="";
          for( var i=0;i < lengths; i++){
            var pw= Math.floor(Math.random() * 10);
            if(specialChar === "Y"){
              if(i % 2){
                var stringNum= pw.toString();
              }else{
                var stringNum=  alphabet1[pw];
              }
            }else{
              var stringNum= pw.toString();
            }
            alpw += stringNum;
          }
          console.log(alpw);
          return alpw;
  }else if(com === "B"){
  
    var lengths = prompt("How many characters would you like to have");
    while(!parseInt(lengths)){
      // console.log("failed");
      lengths = prompt("Please enter the number of characters you would like");
    }
    while(lengths < 8 || lengths > 128){
      lengths= prompt("Please Enter a number between 8 and 128");
    }
    var specialChar =  prompt("Would you like to include special characters:\n Y= yes N= no\n Default is No unless specified");
    var alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var alphabet1= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','$','&','*','%','?'];
    
      // console.log(lengths)
        var alpw="";
        for( var i=0;i < lengths; i++){
          
          var pw  = Math.floor(Math.random() * 10);
          var pw1 = Math.floor(Math.random() * alphabet.length);
          var pw2 = Math.floor(Math.random() * alphabet1.length);
          
          if(specialChar === "Y"){
            if(i % 2){
              var stringNum= alphabet1[pw2];
            }else{
              var stringNum= pw;
            }
          }else{
            if(i % 2){
              var stringNum= alphabet[pw1];
            }else{
              var stringNum= pw;
            }
          }
          console.log(stringNum);
          alpw += stringNum;
        }
        return alpw;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

