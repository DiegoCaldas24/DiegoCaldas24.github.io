function getInfoDoctors() {
    const infoDoctors= document.querySelector(".bunisessHours");
    const doctorList = document.createElement("section");
    doctorList.classList.add("hourDoctor");
    
    infoDoctors.append(doctorList);
}