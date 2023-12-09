import { useNavigate } from "react-router-dom";

const Home = () =>{
    const route = useNavigate();

    const redirectToExpTracker = () => {
        route("/expe-tracker");
    }
    return (
        <>
            <main className="w-full min-h-screen select-none">
                <div className="w-full h-130 flex flex-col items-center justify-center">
                    <p className="font-light text-green-600 text-8xl">Simple way</p>
                    <p className="font-light text-8xl">to manage <span className="text-green-600">personal finances</span></p>
                    <button onClick={redirectToExpTracker} className="mt-10 bg-green-600 text-white p-3 rounded-md">Get started for free</button>
                </div>
                <div className="w-full h-150">
                    <div className="w-full h-96 px-24 flex items-center justify-evenly">
                        <div className="w-[40%] rounded-md shadow-md overflow-hidden h-[80%]">
                            <img className="w-full h-full" src="https://moneylover.me/img/details/Transaction@4x.png" alt="" />
                        </div>
                        <div className="w-[40%] h-full flex flex-col justify-center gap-2">
                            <p className="font-normal text-5xl text-slate-700">Simple money tracker</p>
                            <p className="font-light text-slate-500">It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                        </div>
                    </div>
                    <div className="w-full h-96 px-24 flex items-center justify-evenly">
                        <div className="w-[40%] h-full flex flex-col justify-center gap-2">
                            <p className="font-normal text-5xl text-slate-700">Painless budgeting</p>
                            <p className="font-light text-slate-500">It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                        </div>
                        <div className="w-[40%] rounded-md shadow-md overflow-hidden h-[80%]">
                            <img className="w-full h-full" src="https://moneylover.me/img/details/budget@4x.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-96 px-24 flex items-center justify-evenly">
                        <div className="w-[40%] rounded-md shadow-md overflow-hidden h-[80%]">
                            <img className="w-full h-full" src="https://moneylover.me/img/details/REPORT@4x.png" alt="" />
                        </div>
                        <div className="w-[40%] h-full flex flex-col justify-center gap-2">
                            <p className="font-normal text-5xl text-slate-700">The whole picture in one place</p>
                            <p className="font-light text-slate-500">One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;