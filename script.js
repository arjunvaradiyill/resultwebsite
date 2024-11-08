// Sample data of students with roll numbers and result PDFs
const students = {
    "1": { name: "AFEEF RAHMATHULLA M T", pdf: "https://drive.google.com/file/d/161M2d8cV3HpKtXZBtVnRuJsGCOiTuepn/view?usp=drive_link" },
    "2": { name: "ANSHAM AHMED", pdf: "https://drive.google.com/file/d/1-d6Zye_L4Lvhs8PpBmU8qhkUwl4NKQ6f/view?usp=drive_link" },
};

function fetchResult() {
    const rollNumber = document.getElementById("roll-number").value.trim();
    const resultDisplay = document.getElementById("result-display");
    resultDisplay.innerHTML = ""; // Clear previous result

    if (students[rollNumber]) {
        const student = students[rollNumber];
        resultDisplay.innerHTML = `
            <div class="result-item">
                <p>Student Name: <strong>${student.name}</strong></p>
                <a href="${student.pdf}" download class="download-btn">Download PDF</a>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = "<p class='error-message'>Roll number not found. Please check and try again.</p>";
    }
}
