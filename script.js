function estimatePi(button) {
  const iterations = 20;
  let estimate = 0;
  let output = document.getElementById("output");
  let table = document.getElementById("myTable");

  // Initialize iteration counter
  let i = 0;

  // Hide button so that multiple intervals cannot be started
  button.style.display = "none";

  // Use setInterval to add a row every second (1000 ms)
  let interval = setInterval(() => {
    if (i >= iterations) {
      clearInterval(interval); // Stop when all iterations are done
      return;
    }

    let term = (-1) ** i * (1 / (2 * i + 1));
    estimate += term;
    let piEstimate = 4 * estimate;
    let error = Math.abs(Math.PI - piEstimate);

    // Create a new table row (tr)
    let newRow = document.createElement("tr");

    // Create three table data cells (td)
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    // Set the text content of the cells
    cell1.textContent = `${i + 1}`;
    cell2.textContent = `${piEstimate.toFixed(10)}`;
    cell3.textContent = `${error.toFixed(10)}`;

    // Append the cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);

    // Append the row to the table
    table.appendChild(newRow);

    i++; // Increment the iteration counter
  }, 1000); // 1000 milliseconds = 1 second
}
