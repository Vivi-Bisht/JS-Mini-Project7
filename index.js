let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");


function generateQR(){
   if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
   }
   else{
        alert("Enter text or URl");
   }
}

document.querySelector("#butt").addEventListener("click",generateQR)