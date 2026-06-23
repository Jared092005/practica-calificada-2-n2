import imgRecibo from "../assets/receipt-outline-svgrepo-com.svg";

function Formulario({
  texto,
  setTexto,
  monto,
  setMonto,
  transactions,
  addTransaction,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-slate-100 dark:border-primary/10 dark:divide-primary/10">
        <section className="p-8">
          <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl rounded-full bg-[#ea5b13] p-0.5 w-8 text-white text-center">
              +
            </span>
            Nueva Transacción
          </h3>
          <form className="space-y-5" onSubmit={addTransaction}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">
                Concepto
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-primary/20 bg-white dark:bg-input-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                placeholder="Ej. Alquiler"
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">
                Monto
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-bold">
                  $
                </span>
                <input
                  className="w-full h-12 pl-8 pr-4 rounded-lg border border-slate-200 dark:border-primary/20 bg-white dark:bg-input-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="0.00"
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
              </div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 italic">
                (Positivo = ingreso, negativo = gasto)
              </p>
            </div>
            <button className="w-full h-12 bg-[#ea5b13] hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
              <span className="material-symbols-outlined">+</span>
              Agregar Transacción
            </button>
          </form>
        </section>

        <div className="w-full max-w-xs mt-4">
          <p className="px-3 font-semibold">Historial</p>

          {transactions.length === 0 && (
            <div className="ml-4 mt-2 w-110 border-2 border-dashed border-slate-100 dark:border-primary/5 rounded-lg p-8 flex flex-col items-center justify-center text-slate-300 dark:text-slate-700">
              <span className="material-symbols-outlined text-3xl mb-1">
                <img src={imgRecibo} alt="recibo" className="w-6" />
              </span>
              <p className="text-xs">No hay más transacciones</p>
            </div>
          )}

          {transactions.length > 0 && (
            <section className="w-full p-4 flex flex-col items-center justify-center z-40 gap-3">
              {transactions.map((transaction) => {
                const isPositive = transaction.amount >= 0;

                return (
                  <div
                    key={transaction.id}
                    className={`flex justify-between items-center mt-2 px-5 py-3 rounded-lg shadow-sm w-full border-y border-r border-gray-300 ${
                      isPositive
                        ? "border-l-4 border-l-[#19ca8c]"
                        : "border-l-4 border-l-[#e74c3c]"
                    }`}
                  >
                    <p className="font-medium">{transaction.text}</p>
                    <p
                      className={`font-semibold ${isPositive ? "text-[#19ca8c]" : "text-[#e74c3c]"}`}
                    >
                      ${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Formulario;
