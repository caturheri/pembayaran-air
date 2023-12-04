function hitungTagihan(meterAwal, meterAkhir) {
  const pemakaian = meterAkhir - meterAwal;
  if (pemakaian <= 10) {
    return pemakaian * 2500;
  } else if (pemakaian <= 20) {
    return 10 * 2500 + (pemakaian - 10) * 5000;
  } else if (pemakaian <= 30) {
    return 10 * 2500 + 10 * 5000 + (pemakaian - 20) * 7000;
  } else {
    return 10 * 2500 + 10 * 5000 + 10 * 7000 + (pemakaian - 30) * 10000;
  }
}

function calculateTotal() {
  const meterAwal = parseFloat(document.getElementById("meterAwal").value) || 0;
  const meterAkhir =
    parseFloat(document.getElementById("meterAkhir").value) || 0;

  const total = hitungTagihan(meterAwal, meterAkhir);

  document.getElementById("total").value = `Rp. ${total.toFixed(2)}`;
}

document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pembayaran berhasil!");
  });
