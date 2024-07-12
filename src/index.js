//--------------manipulation DOM for API LOCAL-----------------------
async function getInfoDb() {
    const response = await fetch("http://localhost:3000/doctors");
    const doctors = await response.json();
    doctors.map((doctor) =>
      getInfoDoctors(
        doctor.names,
        doctor.experience,
        doctor.speciality,
        doctor.image
      )
    );
  }
  

function getInfoDoctors(names, experienceM, specialityM, imageURL) {
    const infoDoctors= document.querySelector(".doctors");
    const doctorList = document.createElement("div");
    doctorList.classList.add("doctor");
    const imageDoctor = document.createElement("img");
    imageDoctor.setAttribute("src", imageURL);
    doctorList.append(imageDoctor);
    //h2
    const name = document.createElement("h2");
    name.textContent = names;
    doctorList.append(name);
    const speciality = document.createElement("h2");
    speciality.textContent = "--Especialidad--\n "+ specialityM;
    doctorList.append(speciality);
    const experience = document.createElement("h2");
    experience.textContent = "---Experiencia---" +experienceM;
    doctorList.append(experience);
    //img
    //end rendering
    infoDoctors.append(doctorList);
}

getInfoDb()