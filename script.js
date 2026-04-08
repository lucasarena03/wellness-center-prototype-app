function searchPatient() {
    const input = document.getElementById("patientName").value.trim().toLowerCase();
    const resultBox = document.getElementById("patientResult");

    if (input === "john doe") {
        resultBox.innerHTML = `
            <div class="patient-card">
                <div class="patient-info">
                    <strong>Name:</strong> John Doe &nbsp;&nbsp;
                    <strong>DOB:</strong> 01/01/1990
                </div>
                <button class="select-btn" onclick="location.href='session.html'">[ Select ]</button>
            </div>
        `;
    } else if (input === "") {
        resultBox.innerHTML = `<div class="no-results">Please enter a patient name.</div>`;
    } else {
        resultBox.innerHTML = `<div class="no-results">No matching patient found. Try searching for John Doe.</div>`;
    }
}

function submitSession() {
    const notes = document.getElementById("notes").value.trim();
    const goals = document.getElementById("goals").value.trim();
    const followup = document.querySelector('input[name="followup"]:checked')?.value || "Yes";

    if (notes === "") {
        alert("Please enter treatment notes.");
        return;
    }

    localStorage.setItem("sessionNotes", notes);
    localStorage.setItem("sessionGoals", goals);
    localStorage.setItem("sessionFollowup", followup);

    window.location.href = "confirm.html";
}
