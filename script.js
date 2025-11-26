async function loadProduct() {
  try {
    const response = await fetch("products.json");
    const data = await response.json();

    document.getElementById("output").innerHTML =
      "Product Name: " + data[0].name;
  } catch (error) {
    document.getElementById("output").innerHTML =
      "<span style='color:red'>Error loading product data.</span>";
  }
}

loadProduct();
