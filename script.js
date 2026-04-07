function searchPatient() {
    let name = document.getElementById("patientName").value;

    if(name !== ""){
        document.getElementById("patientResult").innerHTML =
        "<p>Patient: " + name + "</p>" +
        "<button onclick=\"location.href='session.html'\">Record Session</button>" +
        "<button onclick=\"location.href='session.html'\">Edit Goals</button>";
    }
}

function submitSession(){
    let notes = document.getElementById("notes").value;

    if(notes === ""){
        alert("Please enter treatment notes");
        return;
    }

    localStorage.setItem("sessionNotes", notes);

    window.location.href = "confirm.html";
}