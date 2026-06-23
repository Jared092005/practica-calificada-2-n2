import { useState } from "react";
import "./index.css";
import Balance from "./components/Balance.jsx";
import Formulario from "./components/FormularioTransacciones.jsx";
// import Transacciones from "./components/Form.jsx";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [texto, setTexto] = useState("");
  const [monto, setMonto] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();

    if (texto.trim() === "") {
      alert("Debes escribir algo");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text: texto.trim(),
      monto: Number(monto),
    };

    setTransactions((current) => [...current, newTransaction]);
    console.log("Nueva transacción:", newTransaction);
    setTexto("");
    setMonto("");
  };

  const deleteTransaction = (id) => {
    setTransactions((current) => current.filter((transaction) => transaction.id !== id));
  };

  return (
    <>
      <div className="min-h-screen px-3">
        <div className="bg-black/20 absolute inset-0 z-10"></div>
        <main className="bg-white z-20 rounded-3xl mt-8 relative">
          <Balance transactions={transactions} />
          <Formulario
            texto={texto}
            setTexto={setTexto}
            monto={monto}
            setMonto={setMonto}
            transactions={transactions}
            addTransaction={addTransaction}
            deleteTransaction={deleteTransaction}
          />
        </main>
      </div>
    </>
  );
}

export default App;
