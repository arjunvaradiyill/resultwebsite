// Sample data of students with roll numbers and result PDFs
const students = {
    "1": { name: "AJAY JITHESH", pdf: "https://drive.google.com/file/d/161M2d8cV3HpKtXZBtVnRuJsGCOiTuepn/view?usp=drive_link" },
    "2": { name: "AMEEN ABOOBACKER", pdf: "https://drive.google.com/file/d/1-d6Zye_L4Lvhs8PpBmU8qhkUwl4NKQ6f/view?usp=drive_link" },
    "3": { name: "ESHAAN K SAJAN", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "4": { name: "IHSAN K V", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "5": { name: "LAZEEKH C H", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "6": { name: "MOHAMMAD", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "7": { name: "MOHAMMED KUTTY PEREYIL", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "8": { name: "MUHAMMED AWWAB P", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "9": { name: "MUHAMMED FEBIN KAPPIL", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "10": { name: "NABEEL MOHAMMED K T", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "11": { name: "NASIH V L", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "12": { name: "SHAHEEN A K", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "13": { name: "YAHYA V", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "14": { name: "ZENIN NAVAS HAMZA", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "15": { name: "ASIYATH SANA", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "16": { name: "AYISHA FAIHA C", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "17": { name: "FATHIMA NADHASHA K V", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "18": { name: "FATHIMA RIDHA", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "19": { name: "FIDHA P", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "20": { name: "LAMIYA FATHIMA MUBARAK", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "21": { name: "LINA MOIDUPPA", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "22": { name: "LIYA K P", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "23": { name: "NAZMIYA THAHSEEN", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "24": { name: "NIYA NAVAS", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "25": { name: "REEM", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "26": { name: "RIZA SHAJI", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "27": { name: "SAHRISH ABDUL NASAR", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "28": { name: "SHAHLA FIRDAUS", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "29": { name: "WAFA HIND WAFIA K T", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "30": { name: "YUMNA", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" },
    "31": { name: "ZEHA A M", pdf: "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=drive_link" }
};

// Function to fetch and display the result based on roll number input
function fetchResult() {
    const rollNumber = document.getElementById("roll-number").value.trim(); // Get the roll number from input
    const resultDisplay = document.getElementById("result-display");
    resultDisplay.innerHTML = ""; // Clear previous result

    // Check if the roll number exists in the data
    if (students[rollNumber]) {
        const student = students[rollNumber];
        resultDisplay.innerHTML = `
            <div class="result-item">
                <p>Student Name: <strong>${student.name}</strong></p>
                <a href="${student.pdf}" download class="download-btn">Download Your Progress Report</a>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = "<p class='error-message'>Roll number not found. Please check and try again.</p>";
    }
}

// Adding event listener to the search button to ensure the JS loads properly
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-btn");
    searchButton.addEventListener("click", fetchResult);
});
