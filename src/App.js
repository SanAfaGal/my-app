import React, { useState } from "react";
import Table from "./components/Table.js";
import "./App.css";

var data = [
  { product: "Producto 1", amount: 5, value: 250, total: 1250 },
  { product: "Producto 2", amount: 10, value: 100, total: 1000 },
  { product: "Producto 3", amount: 4, value: 500, total: 2000 },
];

function App() {
  const [details, setDetails] = useState({
    product: "",
    value: "",
    amount: "",
    total: "",
  });

  const setTotal = () => {
    details.total = details.value * details.amount;
  };

  const showProduct = () => {
    var productSaved =
      "Producto registrado correctamente\n" +
      "   Producto: " +
      details.product +
      "\n" +
      "   Cantidad: " +
      details.amount +
      "\n" +
      "   Valor: $" +
      details.value +
      "\n" +
      "   Total: $" +
      details.total;

    alert(productSaved);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    setTotal();
    e.preventDefault();
    showProduct();
  };

  return (
    <div className="App">
      <div className="py-3 container">
        <h1>Formulario</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="product" className="form-label">
              Seleccionar un producto:
            </label>
            <select
              name="product"
              className="form-select"
              onChange={handleChange}
              required
            >
              <option></option>
              <option value="1">Producto 1</option>
              <option value="2">Producto 2</option>
              <option value="3">Producto 3</option>
            </select>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <input
                  name="value"
                  type="number"
                  className="form-control"
                  placeholder="Valor"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  name="amount"
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="submit"
              value="Registrar producto"
              className="btn btn-primary"
            />
          </div>
        </form>
        <br />
        <p>Información de ejemplo</p>
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
