// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 // add variables for password parameter
  function as(){
     var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var arr2 = ['-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'];
  var arr3 = ['a','b','c','d','e','f','g', 'h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var idvalue ='';
  var n = $('#ss').val()-0;
// add variables to the generate list if selected
  var sp=0;
  var q=document.getElementsByTagName('input')[1]
  var w=document.getElementsByTagName('input')[2]
  var e=document.getElementsByTagName('input')[3]
  var r=document.getElementsByTagName('input')[4]
  if(q.checked){
    sp+=1;
  }
  if(w.checked){
    sp+=1;
  }
  if(e.checked){
    sp+=1;
  }
  if(r.checked){
    sp+=1;
  }
  if(sp==0){
    alert('false');
  }
var ch=n%sp;
if(q.checked){
      for(var i=0;i<(n-ch)/sp;i++){
        idvalue+=arr[Math.floor(Math.random()*26)];
    }
  }
  
  if(w.checked){
    for(var i=0;i<(n-ch)/sp;i++){
        idvalue+=arr3[Math.floor(Math.random()*26)];
    }
  }

  if(e.checked){
    for(var i=0;i<(n-ch)/sp;i++){
        idvalue+=arr2[Math.floor(Math.random()*18)];
    }
  }
 
  if(r.checked){
   idvalue+=ranNun((n-ch)/sp);
  }
 idvalue+=ranNun(ch);
$('#password').val(idvalue)

  }

  function ranNun(len){
    var number = ['0','1','2','3','4','5','6','7','8','9'];
    var result = '';
    for(var i = 0; i < len; i++){
        var data = Math.ceil(Math.random() * 9);
        result += number[data];
    }
    console.log(result);
    return result;
}
// randomize
function shuffle(arr) {
        let temp, length = arr.length;

       var n='';
        for (let i = 0; i < length; i++) {
          let index = Math.floor(Math.random() * (length));
          temp = arr[index];
          n+=temp;
        }
        return n;
      }
