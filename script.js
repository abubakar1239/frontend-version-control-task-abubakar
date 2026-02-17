const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const input =document.querySelector(".input")
 const input2 =document.querySelector(".input2")
     const input3 =document.querySelector(".input3")
     const input4=document.querySelector(".input4")
form.addEventListener('submit', function (event) {
   // Prevent actual form submission
  popup.style.display = 'flex'; // Show pop-up

    
});

function closePopup() {
  popup.style.display = 'none';
     input.value="";
     input2.value="";
     input3.value="";
     input4.value="";
}