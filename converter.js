const calculate = document.getElementById("calculate");
const output = document.getElementById("output");

calculate.addEventListener("click", () => {
  const fileSize = parseFloat(document.getElementById("fileSize").value);
  const fileType = document.getElementById("fileType").value;
  const internetSpeed = parseFloat(
    document.getElementById("Int-Speed").value
  );
  const intFormat = document.getElementById("int-speed-format").value;

  let fileSizeInBits;

  if (fileType === "Gigabytes") {
    fileSizeInBits = fileSize * 1024 * 1024 * 1024 * 8; // GB to bits
  } else if (fileType === "Megabytes") {
    fileSizeInBits = fileSize * 1024 * 1024 * 8; // MB to bits
  } else if (fileType === "Kilobytes") {
    fileSizeInBits = fileSize * 1024 * 8; // KB to bits
  } else {
    fileSizeInBits = fileSize * 1024 * 1024 * 8; // default to MB if unknown
  }

  let speedBps;
  if (intFormat === "gbps") {
    speedBps = internetSpeed * 1_000_000_000; // Gbps to bps
  } else if (intFormat === "mbps") {
    speedBps = internetSpeed * 1_000_000; // Mbps to bps
  } else if (intFormat === "Kbps") {
    speedBps = internetSpeed * 1_000; // Kbps to bps
  } else {
    speedBps = internetSpeed * 1_000_000; // default Mbps
  }

  // Calculate transfer time in seconds
  const transferTime = fileSizeInBits / speedBps;


  output.innerHTML = `Estimated Time : ${transferTime} Seconds`

});


// Temparature js

const tempConversion = document.getElementById("convert");
const tempOutput = document.getElementById("tempOutput");

tempConversion.addEventListener("click", () => {

  const userTemp = parseFloat(document.getElementById("tempReading").value);
  let convertedTp;

  const tempType = document.getElementById("temp-type").value;

  if (tempType === "cel") {
    convertedTp = (userTemp * 9 / 5) + 32;
    tempOutput.innerHTML = `The temparature is ${convertedTp} °F`
  } else if (tempType === "Fah") {
    convertedTp = (userTemp - 32) * 5 / 9;
    tempOutput.innerHTML = `The temparature is ${convertedTp} °C`
  };


});



// scientific js

const scientificBtn = document.getElementById("convertScientificNo");
const scientificOutput = document.getElementById("scintificOutput");

scientificBtn.addEventListener("click", () => {
  const userValue = parseFloat(document.getElementById("ScientificValue").value);

  if (isNaN(userValue)) {
    scientificOutput.innerHTML = "Please enter a valid number";
    return;
  }

  const scientificValue = userValue.toExponential(4);
  scientificOutput.innerHTML = `Scientific Notation: ${scientificValue}`;
});


// Metric Prefix Converter
const convertMetricBtn = document.getElementById("convertMetric");
const metricOutput = document.getElementById("metricOutput");

convertMetricBtn.addEventListener("click", () => {
  const value = parseFloat(document.getElementById("metricValue").value);
  const fromFactor = parseFloat(document.getElementById("from").value);
  const toFactor = parseFloat(document.getElementById("to").value);

  if (isNaN(value)) {
    metricOutput.innerHTML = "Please enter a valid number.";
    return;
  }

  // Converting to base unit then to target unit
  const baseValue = value * fromFactor;
  const convertedValue = baseValue / toFactor;

  metricOutput.innerHTML = `Converted Value: <span>${convertedValue}</span>`;
});

// --- Tab Switching Logic ---
const tabButtons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll("#file, #temp, #Scientific, #metric");

// Hide all except first on load
sections.forEach((sec, i) => {
  if (i !== 0) sec.style.display = "none";
});
tabButtons[0].classList.add("active");

// Add click event to each tab button
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");

    // Hide all sections
    sections.forEach(sec => sec.style.display = "none");

    // Remove active class from all buttons
    tabButtons.forEach(b => b.classList.remove("active"));

    // Show the right section
    if (tabId === "file") {
      document.getElementById("file").style.display = "block";
    } else if (tabId === "temp") {
      document.getElementById("temp").style.display = "block";
    } else if (tabId === "sci") {
      document.getElementById("Scientific").style.display = "block";
    } else if (tabId === "metric") {
      document.getElementById("metric").style.display = "block";
    }

    // Mark this button active
    btn.classList.add("active");
  });
});
