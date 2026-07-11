const DEFAULT_PIN = "1234";

function login(){

    let pin = document.getElementById("pin").value;

    if(pin === DEFAULT_PIN){

        alert("✅ সফলভাবে লগইন হয়েছে");

        window.location.href = "dashboard.html";

    }else{

        alert("❌ ভুল PIN। আবার চেষ্টা করুন।");

    }

}
