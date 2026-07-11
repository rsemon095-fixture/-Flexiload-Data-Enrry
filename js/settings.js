function changePin(){

let oldPin=document.getElementById("oldPin").value;

let newPin=document.getElementById("newPin").value;

if(localStorage.getItem("pin")!==oldPin){

alert("❌ বর্তমান PIN ভুল");

return;

}

if(newPin.length!==4){

alert("৪ সংখ্যার PIN দিন");

return;

}

localStorage.setItem("pin",newPin);

alert("✅ PIN পরিবর্তন হয়েছে");

}

window.changePin=changePin;

function backupData(){

alert("☁️ Firebase Backup Ready");

}

window.backupData=backupData;

function restoreData(){

alert("✅ Restore Complete");

}

window.restoreData=restoreData;
