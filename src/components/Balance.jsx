import img2 from "../assets/settings-cog-svgrepo-com.svg";
import img3 from "../assets/wallet-svgrepo-com.svg";

function Balance({ transactions }) {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-primary/10">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <span className="material-symbols-outlined block">
              <img src={img3} alt="billetera" className="w-10" />
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
            React Wallet
          </h1>
        </div>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-primary/20 rounded-full transition-colors">
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
            <img src={img2} alt="configuración" className="w-8" />
          </span>
        </button>
      </header>
      <div className="px-8 py-10 bg-slate-50/50 dark:bg-primary/5 flex flex-col items-center justify-center text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-primary/70 mb-2">
          Total Balance
        </p>
        <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
          ${total.toFixed(2)}
        </h2>
        <div className="mt-6 flex gap-8">
          <div className="text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold">
              Income
            </p>
            <p className="text-emerald-500 font-bold text-lg">+${income.toFixed(2)}</p>
          </div>
          <div className="w-px bg-slate-200 dark:bg-primary/10"></div>
          <div className="text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold">
              Expense
            </p>
            <p className="text-rose-500 font-bold text-lg">-${Math.abs(expense).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
