// Sample data of students with roll numbers and result PDFs
const students = {
    "1": { name: "AJAY JITHESH", pdf: "https://drive.google.com/file/d/1dOPPhsVoIvnsd2HZOuxt7eh4b90OdnMW/view?usp=drive_link" },
    "2": { name: "AMEEN ABOOBACKER", pdf: "https://drive.google.com/file/d/1f80d-xX2O8CSeLmeAQuJugrCANIIpKoH/view?usp=drive_link" },
    "3": { name: "ESHAAN K SAJAN", pdf: "https://drive.google.com/file/d/1cDoWlpFLnnoXCQOIwWuMSRM576Irf3_H/view?usp=drive_link" },
    "4": { name: "IHSAN K V", pdf: "https://drive.google.com/file/d/1X3Jf70CXXJ6HkxvWgmQy4QFKsfBCbDkc/view?usp=drive_link" },
    "5": { name: "LAZEEKH C H", pdf: "https://drive.google.com/file/d/1YwoqEoFSHapN1BigtmZspyp-_Fbu-hm7/view?usp=drive_linkink" },
    "6": { name: "MOHAMMAD", pdf: "https://drive.google.com/file/d/14c0IVbAJDmFpwh6tCvlBQx5uZMzeTndJ/view?usp=drive_link" },
    "7": { name: "MOHAMMED KUTTY PEREYIL", pdf: "https://drive.google.com/file/d/1E5Bau7xTHd_gZGagL1aDOG6W5K13gI9e/view?usp=drive_link" },
    "8": { name: "MUHAMMED AWWAB P", pdf: "https://drive.google.com/file/d/17pRetRDhP8C1BIKyxsVAfAx5rpqxuDhu/view?usp=drive_link" },
    "9": { name: "MUHAMMED FEBIN KAPPIL", pdf: "https://drive.google.com/file/d/13A8YgaLbF7CPHrqEUqDu39fZAb6uQYbK/view?usp=drive_link" },
    "10": { name: "NABEEL MOHAMMED K T", pdf: "https://drive.google.com/file/d/1WmRvMnm7BkXwM5W4e722qDpZzmMu6Kuj/view?usp=drive_link" },
    "11": { name: "NASIH V L", pdf: "https://drive.google.com/file/d/1IkMFf_1Eq1DCIu08_jbUCMMxFL0W7f9H/view?usp=drive_link" },
    "12": { name: "SHAHEEN A K", pdf: "https://drive.google.com/file/d/1jhYoQLjaZV3ksE8pf3dFLNafQSiY7brt/view?usp=drive_link" },
    "13": { name: "YAHYA V", pdf: "https://drive.google.com/file/d/1mOJp-Om35GSZLYVVTtHAsehlswDmUH6u/view?usp=drive_link" },
    "14": { name: "ZENIN NAVAS HAMZA", pdf: "https://drive.google.com/file/d/1YRpr4l_gzh4Bnbo6L3dwR0TsKmOZbqw3/view?usp=drive_link" },
    "15": { name: "ASIYATH SANA", pdf: "https://drive.google.com/file/d/1bqIUqBo2HB3D0s5X4KczTGwg6YsxfOrS/view?usp=drive_link" },
    "16": { name: "AYISHA FAIHA C", pdf: "https://drive.google.com/file/d/1n4rJGjVLYCF0k83io8fEtERj1vGdGYA4/view?usp=drive_link" },
    "17": { name: "FATHIMA NADHASHA K V", pdf: "https://drive.google.com/file/d/1ewaQ-nPpUMCn7_aRhncKpUOpPkIbZXGN/view?usp=drive_link" },
    "18": { name: "FATHIMA RIDHA", pdf: "https://drive.google.com/file/d/1etVnS45Zdx6T-xaf5WIxxgdsQ5tj5q34/view?usp=drive_link" },
    "19": { name: "FIDHA P", pdf: "https://drive.google.com/file/d/1A1LZDpUKztBzuiUcySvk76XN9YtTE_RB/view?usp=drive_link" },
    "20": { name: "LAMIYA FATHIMA MUBARAK", pdf: "https://drive.google.com/file/d/1vyGtKRz1o73XLrifVVbg9q64QJXlFjFg/view?usp=drive_link" },
    "21": { name: "LINA MOIDUPPA", pdf: "https://drive.google.com/file/d/1-c9XwxJ8MufB_LHyXIqhWn6UIfnX3dKW/view?usp=drive_link" },
    "22": { name: "LIYA K P", pdf: "https://drive.google.com/file/d/1Wx16TXtM-pD1bNTrhCaYHkquDU5ZPvbI/view?usp=drive_link" },
    "23": { name: "NAZMIYA THAHSEEN", pdf: "https://drive.google.com/file/d/1-lad37Cxk0sTNnc1REFzpnonOj6FrYdR/view?usp=sharing" },
    "24": { name: "NIYA NAVAS", pdf: "https://drive.google.com/file/d/1TcTp8CoD1PZLxHT1-Hmho69svG-sqVt0/view?usp=drive_link" },
    "25": { name: "REEM", pdf: "https://drive.google.com/file/d/1P4VdlKBPLHQlX62xmbzQH4n-htzdz4LK/view?usp=drive_link" },
    "26": { name: "RIZA SHAJI", pdf: "https://drive.google.com/file/d/1fDlLynsUpNWThVWJ3ZJb4BroQfR7Oal4/view?usp=drive_link" },
    "27": { name: "SAHRISH ABDUL NASAR", pdf: "https://drive.google.com/file/d/1qu9IVWfTtN8gejxChqPpQ_R8RMQBs8aV/view?usp=drive_link" },
    "28": { name: "SHAHLA FIRDAUS", pdf: "https://drive.google.com/file/d/1qu9IVWfTtN8gejxChqPpQ_R8RMQBs8aV/view?usp=drive_link" },
    "29": { name: "WAFA HIND WAFIA K T", pdf: "https://drive.google.com/file/d/1r1IOdNPUHDhFq7cZ0jVw-IGvTesZohZR/view?usp=drive_link" },
    "30": { name: "YUMNA", pdf: "https://drive.google.com/file/d/1SnXfLdDyr-CNavnz_KLJn9lGi2QLJ9bN/view?usp=drive_link" },
    "31": { name: "ZEHA A M", pdf: "https://drive.google.com/file/d/1H-wJztnovPY2DPHb6ErblnxVIj6smIUM/view?usp=drive_link" }
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
                <a href="${student.pdf}" download class="download-btn">Download Your Report  Report</a>
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
