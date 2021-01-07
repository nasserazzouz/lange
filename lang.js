let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "مبرمج نصرالدين";
    welcome.innerHTML = "مرحبا بكم  في صفحة  نصرالدين";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا اتعلم الجافا سكريبت";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "Coder nacer";
    welcome.innerHTML = "Welcome to website of nacer";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "   I am  learning js ";
    contact.innerHTML = "Contact us";

}


}