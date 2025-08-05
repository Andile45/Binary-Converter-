const calculate = document.getElementById("calculate");
const output = document.getElementById("output");

calculate.addEventListener("click", () => {
  const fileSize = parseFloat(document.getElementById("fileSize").value());
  const fileType = document.getElementById("fileType").value();
  const internetSpeed = parseFloat(
    document.getElementById("Int-Speed").value()
  );
  const intFormat = document.getElementById("int-speed-format").value();

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
  if (intFormat === "Gbps") {
    speedBps = internetSpeed * 1_000_000_000; // Gbps to bps
  } else if (intFormat === "Mbps") {
    speedBps = internetSpeed * 1_000_000; // Mbps to bps
  } else if (intFormat === "Kbps") {
    speedBps = internetSpeed * 1_000; // Kbps to bps
  } else if (intFormat === "bps") {
    speedBps = internetSpeed; // already bps
  } else {
    speedBps = internetSpeed * 1_000_000; // default Mbps
  }

  // Calculate transfer time in seconds
  const transferTime = fileSizeInBits / speedBps;
  output.innerHTML = `Estimated Time : ${transferTime}`

});
