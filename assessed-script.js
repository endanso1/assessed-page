  // Step 1: Assessed BOE Data
const assessedData = {
  "40325141031": {
    boe_no: "40325141031",
    status: "Assessed",
    pdf_date: "07/03/2025 17:55:31",
    amount: "3,013.56 GHS",
    watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    tracking:"Declaration Tracking",
    
  }
};

// Step 2: Get Query Param
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Step 3: Display BOE Info
function displayAssessedDetails() {
  const boeNumber = getQueryParam("boe_no");
  if (!boeNumber) {
    // alert("No BOE number provided!");
    return;
  }

  const details = assessedData[boeNumber];
  if (details) {
    document.getElementById("boe_no").textContent = `${details.boe_no} / 00`;
    document.getElementById("status").textContent = details.status;
    document.getElementById("pdf_date").textContent = details.pdf_date;
    document.getElementById("amount").textContent = details.amount;
    document.getElementById("watermark").textContent = details.watermark;
    document.getElementById("tracking").textContent = details.tracking;
  } 
}

// Step 4: Call on Page Load
displayAssessedDetails();
