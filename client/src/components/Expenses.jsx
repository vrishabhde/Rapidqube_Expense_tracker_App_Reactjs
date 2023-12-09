import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Expenses = () => {
    const [menu, setMenu] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const route = useNavigate();
    const openMenu = () => {
        setMenu((prevState) => !prevState);
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("etUserId"));
        if(userId){
            const getExpenses = async() => {
                try {
                    const axiosRequest = await axios.get(`http://localhost:3001/expenses?userId=${userId}`);
                    
                    const axiosResponse = axiosRequest.data;
                    if(axiosRequest.status === 200){
                        setExpenses(axiosResponse);
                    }
                } catch (error) {
                    
                }
            }
            getExpenses();
        }
    }, []);

    const redirectToExpTracker = () => {
        route("/expe-tracker");
    }
    const expensesVariant = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1.1
        }
    }

    const transitions = {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8,
    }

    const svgVariants = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            rotate: 360
        }
    }

    const svgTransitions = {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
        duration: 0.5
    }
    return (
        <>
            <main className="w-full min-h-screen">
                <div className="w-full min-h-screen flex flex-wrap pt-5 gap-5 pl-16 justify-start">
                    {expenses?.length ? (<>
                        {expenses.map((expense, i) => (
                            <div key={i} className="w-60 h-[400px] rounded-md shadow-lg">
                                <div className="w-full h-[20%] border-b border-gray-100 flex items-center px-2">
                                    <p className="text-3xl font-normal text-slate-700">{expense?.category}</p>
                                </div>
                                <div className="w-full h-[55%] px-2">
                                    <p className="text-base font-normal text-slate-600">{expense?.description}</p>
                                </div>
                                <div className="w-full h-[25%] border-t border-t-gray-100 flex items-center justify-around">
                                    <p className="text-sm font-normal text-slate-700">{new Date(expense?.createStamp).toLocaleString()}</p>
                                    <p className="text-sm font-bold text-slate-700">Rs. {expense?.amount}</p>
                                </div>
                            </div>
                        ))}
                    </>) : (<>
                        <p className="m-auto">No data found. You can add an expense to begin!</p>
                    </>)}
                </div>
                <motion.div onClick={openMenu} variants={expensesVariant} initial="initial" animate="animate" transition={transitions} className="fixed bottom-14 right-14 w-[60px] h-[60px] rounded-full shadow-2xl cursor-pointer bg-blue-500 flex items-center justify-center">
                    <svg className={`${menu ? "rotate-[135deg] duration-300" : "rotate-[-90deg] duration-300"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2f2f2" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
                </motion.div>
                {menu && (<>
                    <motion.div variants={expensesVariant} initial="initial" animate="animate" transition={transitions} className="fixed right-14 bottom-32 w-[60px] h-[150px] flex flex-col justify-evenly">
                        <div className="w-full h-[60px] rounded-full">
                            <motion.div onClick={redirectToExpTracker} variants={svgVariants} initial="initial" animate="animate" transition={svgTransitions} className="w-[95%] h-[95%] shadow-2xl rounded-full flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5e5555" viewBox="0 0 256 256"><path d="M112,72a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h64A8,8,0,0,1,112,72Zm-8,104H80V152a8,8,0,0,0-16,0v24H40a8,8,0,0,0,0,16H64v24a8,8,0,0,0,16,0V192h24a8,8,0,0,0,0-16Zm48,0h64a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Zm64,16H152a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-61.66-90.34a8,8,0,0,0,11.32,0L184,83.31l18.34,18.35a8,8,0,0,0,11.32-11.32L195.31,72l18.35-18.34a8,8,0,0,0-11.32-11.32L184,60.69,165.66,42.34a8,8,0,0,0-11.32,11.32L172.69,72,154.34,90.34A8,8,0,0,0,154.34,101.66Z"></path></svg>
                            </motion.div>
                        </div>
                        <div className="w-full h-[60px] rounded-full">
                            <motion.div onClick={redirectToExpTracker} variants={svgVariants} initial="initial" animate="animate" transition={svgTransitions} className="w-[95%] h-[95%] shadow-2xl rounded-full flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5e5555" viewBox="0 0 256 256"><path d="M240,100.68a15.86,15.86,0,0,0-4.69-11.31L166.63,20.68a16,16,0,0,0-22.63,0L115.57,49.11l-58,21.77A16.06,16.06,0,0,0,47.35,83.23L24.11,222.68A8,8,0,0,0,32,232a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L235.31,112A15.87,15.87,0,0,0,240,100.68Zm-69.87,92.19L55.32,212l47.37-47.37a28,28,0,1,0-11.32-11.32L44,200.7,63.13,85.86,118,65.29,190.7,138ZM104,140a12,12,0,1,1,12,12A12,12,0,0,1,104,140Zm96-15.32L131.31,56l24-24L224,100.68Z"></path></svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </>)}
            </main>
        </>
    )
}

export default Expenses;