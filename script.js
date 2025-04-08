function calculateTotal() {
  const values = {
    note2000: 2000,
    note500: 500,
    note200: 200,
    note100: 100,
    note50: 50,
    note20: 20,
    note10: 10,
    note5: 5,
    note2: 2,
    note1: 1
  };

  let total = 0;
  for (let id in values) {
    let count = parseInt(document.getElementById(id).value) || 0;
    total += count * values[id];
  }

  document.getElementById("result").innerText = `Total: ₹${total}`;
}