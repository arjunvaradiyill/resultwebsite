// Sample data of students with roll numbers and result PDFs
const students = {
    "1": { name: "AJAY JITHESH", pdf: "https://drive.google.com/file/d/1aPGXjJFPAlXv_eoUBvSZaR4VMxqnCG_e/view?usp=drive_link" },
    "2": { name: "AMEEN ABOOBACKER", pdf: "https://drive.google.com/file/d/1zo4wO_cfs5UfrscuBtFIw5tSV7lbjK-i/view?usp=drive_link" },
    "3": { name: "ESHAAN K SAJAN", pdf: "https://drive.google.com/file/d/1ID0XskOtIAM-cTSvzSnHpNfnA3IXoDEC/view?usp=drive_link" },
    "4": { name: "IHSAN K V", pdf: "https://drive.google.com/file/d/1RgENeYqAJJRRS0mDymj7JNh1tnuqT9DJ/view?usp=drive_link" },
    "5": { name: "LAZEEKH C H", pdf: "https://drive.google.com/file/d/12KXUbl7rimrOWbDh4iRpo9lCrjE5M2xF/view?usp=drive_link" },
    "6": { name: "MOHAMMAD", pdf: "https://drive.google.com/file/d/1Ufw4qZzCoLYBlcJaYy2ZkAUiQa8rYxVH/view?usp=drive_link" },
    "7": { name: "MOHAMMED KUTTY PEREYIL", pdf: "https://drive.google.com/file/d/1rzeD_VCyjluPHFVdKfB8H6f5R8sxDkAo/view?usp=drive_link" },
    "8": { name: "MUHAMMED AWWAB P", pdf: "https://drive.google.com/file/d/1UsEO9mv2T35Q_73zmLo1A8V8tY-RiksD/view?usp=drive_link" },
    "9": { name: "MUHAMMED FEBIN KAPPIL", pdf: "https://drive.google.com/file/d/1xKA3gWSPmXITV4NNmgq8eWYz8gKMu5pE/view?usp=drive_link" },
    "10": { name: "NABEEL MOHAMMED K T", pdf: "https://drive.google.com/file/d/1mf-azGExgjn9K2Mu-f3uxMDRwWvZ45jE/view?usp=drive_link" },
    "11": { name: "NASIH V L", pdf: "https://drive.google.com/file/d/1WiVspaOvEOy79LJEJqYoz4ha7v5HIvZ5/view?usp=drive_link" },
    "12": { name: "SHAHEEN A K", pdf: "https://drive.google.com/file/d/1X8BY5XcrFrCCsSziO4ZjCBv5ggdb4XVp/view?usp=drive_link" },
    "13": { name: "YAHYA V", pdf: "https://drive.google.com/file/d/1g1SMaAEXc4KftmssYR_CrxubEtdoM_wT/view?usp=drive_link" },
    "14": { name: "ZENIN NAVAS HAMZA", pdf: "https://drive.google.com/file/d/1vjT6OeDWRKkqkmyHncRw8qpIPBj3AxlD/view?usp=drive_link" },
    "15": { name: "ASIYATH SANA", pdf: "https://drive.google.com/file/d/1wmsqEJXM8NMP5-uS_Je3TFAT9I1gCF2t/view?usp=drive_link" },
    "16": { name: "AYISHA FAIHA C", pdf: "https://drive.google.com/file/d/1p1LzIi4cM5qPUY-lwESoj3Qeuj9uWaPe/view?usp=drive_link" },
    "17": { name: "FATHIMA NADHASHA K V", pdf: "https://drive.google.com/file/d/1sXE9--tOAoUlX-jiN_83-M1pWHFFr3Ht/view?usp=drive_link" },
    "18": { name: "FATHIMA RIDHA", pdf: "https://drive.google.com/file/d/1dnds29uja2CBigMWtF8BOTPoPEdOjWhy/view?usp=drive_link" },
    "19": { name: "FIDHA P", pdf: "https://drive.google.com/file/d/1w9x9jFHfdtv2qWqW8uRsExojBtijQIS7/view?usp=drive_link" },
    "20": { name: "LAMIYA FATHIMA MUBARAK", pdf: "https://drive.google.com/file/d/1xczgWziLTG5CcqSYAyizVJSQ-3m1rqFc/view?usp=drive_link" },
    "21": { name: "LINA MOIDUPPA", pdf: "https://drive.google.com/file/d/1lC09yAoYERb7ALv6l88Ybh-ezfYgQ96S/view?usp=drive_link" },
    "22": { name: "LIYA K P", pdf: "https://drive.google.com/file/d/1VVdcidSj9YcvS79s-sqXEuz9qcgdoaoD/view?usp=drive_link" },
    "23": { name: "NAZMIYA THAHSEEN", pdf: "https://drive.google.com/file/d/1eGUqeUG7G76PsMLWwI8G9Z1wD-Bf9fou/view?usp=drive_link" },
    "24": { name: "NIYA NAVAS", pdf: "https://drive.google.com/file/d/1V_SStyjUyZy70s131njGwRurrArmBaLk/view?usp=drive_link" },
    "25": { name: "REEM", pdf: "https://drive.google.com/file/d/1YEw45cjbdsb_Cc1ph6xjIg93hz5ohFAb/view?usp=drive_link" },
    "26": { name: "RIZA SHAJI", pdf: "https://drive.google.com/file/d/1dHan0Tudsm0XFT6agXIqVE_VBOPp-xIP/view?usp=drive_link" },
    "27": { name: "SAHRISH ABDUL NASAR", pdf: "https://drive.google.com/file/d/1m88p7UXzQjqr-dWcHs5LpLaP_K-EmtLN/view?usp=drive_link" },
    "28": { name: "SHAHLA FIRDAUS", pdf: "https://drive.google.com/file/d/1uNBjPFP1ic9AkzAJU0Jcmb9izjb_sPsp/view?usp=drive_link" },
    "29": { name: "WAFA HIND WAFIA K T", pdf: "https://drive.google.com/file/d/1bUCMSL9tnodffJjrQfKAIRSbdesFmyQK/view?usp=drive_link" },
    "30": { name: "YUMNA", pdf: "https://drive.google.com/file/d/1y-_rrmxtjCSccmmPbYZdRfKESKdhVHOO/view?usp=drive_link" },
    "31": { name: "ZEHA A M", pdf: "https://drive.google.com/file/d/1XYs7rSHQqsaq0ZfgQpcBZ9osRuHSQ6MO/view?usp=drive_link" }
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
