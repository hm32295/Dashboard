let dashboard = document.getElementById("dashboard");

let courses =document.getElementById("courses");

let files = document.getElementById("files");

let frinds =document.getElementById("frinds");

let plans =document.getElementById("plans");
let profile =document.getElementById("profile");

let projects =document.getElementById("projects");


let setting =document.getElementById("setting");



let lDashboard = document.getElementById("l-dashboard");
let lCourses = document.getElementById("l-courses");
let lFiles = document.getElementById("l-files");

let lFrinds = document.getElementById("l-frinds");
let lPlans = document.getElementById("l-plans");
let lProfile = document.getElementById("l-profile");
let lProjects = document.getElementById("l-projects");
let lSetting = document.getElementById("l-setting");

let ulList = document.getElementById("ul-list")

const defultPage = () =>{
    courses.style.display = "none";
    courses.classList.remove("hidden");
    dashboard.style.display = "none";
    dashboard.classList.remove("hidden");
    files.style.display = "none";
    files.classList.remove("hidden");
    frinds.style.display = "none";
    frinds.classList.remove("hidden");
    plans.style.display = "none";
    plans.classList.remove("hidden");
    profile.style.display = "none";
    profile.classList.remove("hidden");
    projects.style.display = "none";
    projects.classList.remove("hidden");
    setting.style.display = "none";
    setting.classList.remove("hidden");

    lSetting.classList.remove("active");
    lDashboard.classList.remove("active");
    lCourses.classList.remove("active");
    lFiles.classList.remove("active");
    lFrinds.classList.remove("active");
    lProjects.classList.remove("active");
    lProfile.classList.remove("active");
    lPlans.classList.remove("active");
}



lDashboard.onclick = ()=>{
    defultPage();
    dashboard.style.display = "flex";
    lDashboard.className = "active"

}
lSetting.onclick = ()=>{
    defultPage();
    setting.style.display = "flex";
    lSetting.className = "active"

}
lPlans.onclick = ()=>{
    defultPage();
    plans.style.display = "flex";
    lPlans.className = "active"

}
lProfile.onclick = ()=>{
    defultPage();
    profile.style.display = "flex";
    lProfile.className = "active"

}
lProjects.onclick = ()=>{
    defultPage();
    projects.style.display = "flex";
    lProjects.className = "active"

}
lCourses.onclick = ()=>{
    defultPage();
    courses.style.display = "flex";
    lCourses.className = "active"

}
lFiles.onclick = ()=>{
    defultPage();
    files.style.display = "flex";
    lFiles.className = "active"

}
lFrinds.onclick = ()=>{
    defultPage();
    frinds.style.display = "flex";
    lFrinds.className = "active"

}


