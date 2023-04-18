


function validateform(){

    const name = document.forms["massage-form"]["fullname"].value; 
    const birthDate = document.forms["massage-form"]["birthdate"].value;  
    const gender = document.forms["massage-form"]["gender"].value;  
    const massage = document.forms["massage-form"]["massage"].value; 
    if (name =="" || birthDate == "" || gender == "" || massage == ""){
      alert("tidak boleh ada yang kosong");
      return false;
  }

  setSenderUI(name, birthDate, gender, massages);

  return false;
}
//menampilkan value input
function setSenderUI(name, birthDate, gender, massage) {
     
     document.getElementById("sender-fullname").innerHTML = name;
     document.getElementById("sender-birthdate").innerHTML = birthDate; 
     document.getElementById("sender-gender").innerHTML = gender;
     document.getElementById("sender-massage").innerHTML = massage;
 } 

