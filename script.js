const searchPatient = () => {
    const input = document.getElementById("patientName").value.trim().toLowerCase();
    const resultBox = document.getElementById("patientResult");

    if (!input || input === "") {
        resultBox.innerHTML = `<div class="no-results">Enter John Doe to display mock patient record.</div>`;
        return;
    }

    if ("john doe".startsWith(input.toLowerCase())) {
        resultBox.innerHTML = `
            <div class="patient-card">
                <div class="patient-info">
                    <strong>Name:</strong> John Doe &nbsp;&nbsp;
                    <strong>DOB:</strong> 01/01/1990
                </div>
                <a class="select-button" href="session.html?patient=John%20Doe">[ Select ]</a>
            </div>
        `;
    } else if (input === "") {
        resultBox.innerHTML = `<div class="no-results">Enter John Doe to display mock patient record.</div>`;
    } else {
        resultBox.innerHTML = `<div class="no-results">No matching patient found. Try searching for John Doe.</div>`;
    }
}

const submitSession = () => {
    const name = document.getElementById("patientName").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const goals = document.getElementById("goals").value.trim();
    const followup = document.querySelector('input[name="followup"]:checked')?.value || "Yes";

    if (name === "") {
        alert("Please enter a patient name.");
        return;
    }

    if (notes === "") {
        alert("Please enter treatment notes.");
        return;
    }

    window.location.href = `confirm.html?name=${encodeURIComponent(name)}&notes=${encodeURIComponent(notes)}&goals=${encodeURIComponent(goals)}&followup=${encodeURIComponent(followup)}`;
}

const showAppointments = () => {
    const name = document.getElementById("appointmentPatientName").value.trim().toLowerCase();
    const dob = document.getElementById("appointmentPatientDOB").value.trim();
    const resultBox = document.getElementById("appointmentsResult");

    if (name === "john doe" && dob === "1990-01-01") {
        resultBox.innerHTML = `
            <div class="appointment-section">
                <h3>Upcoming Appointments</h3>
                <div class="appointment-card">
                    <strong>Therapist:</strong> Dr. Smith<br>
                    <strong>Date:</strong> June 10, 2026<br>
                    <strong>Time:</strong> 10:00 AM
                </div>
                <div class="appointment-card">
                    <strong>Therapist:</strong> Dr. Brown<br>
                    <strong>Date:</strong> June 24, 2026<br>
                    <strong>Time:</strong> 2:00 PM
                </div>
            </div>

            <div class="appointment-section">
                <h3>Past Appointments</h3>
                <div class="appointment-card">
                    <strong>Therapist:</strong> Dr. Smith<br>
                    <strong>Date:</strong> May 15, 2026<br>
                    <strong>Time:</strong> 11:30 AM
                </div>
                <div class="appointment-card">
                    <strong>Therapist:</strong> Dr. Brown<br>
                    <strong>Date:</strong> April 20, 2026<br>
                    <strong>Time:</strong> 9:00 AM
                </div>
            </div>
        `;
    } else {
        resultBox.innerHTML = `<div class="no-results">No appointments found. Try searching for John Doe with DOB 1990-01-01.</div>`;
    }
}
