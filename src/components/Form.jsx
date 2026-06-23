function Transacciones({
  texto,
  setTexto,
  monto,
  setMonto,
  transactions,
  addTransaction,
}) {
  return (
    <main className="w-full p-6 flex flex-col justify-center items-center z-30">
      <p className="font-bold">Nueva Transacción</p>
      <form
        onSubmit={addTransaction}
        className="flex flex-col mt-2 gap-3 w-full max-w-xs"
      >
        <label htmlFor="concepto" className="text-gray-400">
          Concepto
        </label>
        <input
          id="concepto"
          type="text"
          placeholder="Ej. Salario, Pizza, Renta..."
          className="outline-none border border-gray-300 drop-shadow-md p-2 rounded-lg"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <label htmlFor="monto" className="text-gray-400">
          Monto{" "}
          <span className="text-[12px]">
            (negativo- gasto, positivo - ingreso)
          </span>
        </label>
        <input
          id="monto"
          type="number"
          placeholder="0.00"
          className="outline-none border border-gray-300 drop-shadow-md p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <button
          type="submit"
          className="bg-[#5045e6] text-white p-4 rounded-xl drop-shadow-lg active:bg-[#3a2fdf] mt-1"
        >
          Agregar Transacción
        </button>
      </form>

      <div className="w-full max-w-xs mt-4">
        <p className="px-3 font-semibold">Historial</p>
      </div>
      {transactions.length === 0 && (
        <p className="text-gray-400">
          No hay movimientos registrados. ¡Agrega uno!
        </p>
      )}
      {transactions.length > 0 && (
        <section className="w-full p-4 flex flex-col items-center justify-center z-40 gap-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center mt-2 px-5 border border-gray-300 py-3 rounded-lg shadow-sm w-full"
            >
              <p>{transaction.text}</p>
              <p
                className={`font-semibold ${
                  transaction.monto >= 0 ? "text-[#19ca8c]" : "text-[#e74c3c]"
                }`}
              >
                ${transaction.monto.toFixed(2)}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Transacciones;
