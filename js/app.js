const fill = document.getElementById("loadingFill");
const percent = document.getElementById("percent");
const text = document.getElementById("loadingText");

let p = 0;

const msg = [
    "Initializing System...",
    "Loading Database...",
    "Connecting Firebase...",
    "Loading Dashboard...",
    "Almost Ready..."
];

const timer = setInterval(() => {
    p++;

    // এলিমেন্টগুলো চেক করা (যাতে এরর না আসে)
    if (fill) fill.style.width = p + "%";
    if (percent) percent.innerHTML = p + "%";

    // মেসেজ আপডেট
    if(p == 20) text.innerHTML = msg[1];
    if(p == 40) text.innerHTML = msg[2];
    if(p == 60) text.innerHTML = msg[3];
    if(p == 80) text.innerHTML = msg[4];

    if(p >= 100){
        clearInterval(timer);
        
        // নিশ্চিত করুন আপনার প্রজেক্টে 'dashboard.html' ফাইলটি আছে
        // অথবা আপনার ড্যাশবোর্ডের সঠিক পাথ দিন
        window.location.href = "dashboard.html"; 
    }
}, 30);
