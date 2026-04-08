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
