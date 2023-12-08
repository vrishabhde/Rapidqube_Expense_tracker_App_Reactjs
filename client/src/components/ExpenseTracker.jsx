const ExpenseTracker = ()=> {

    return(
        <>
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e] py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#378c12" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
            </button>
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e] py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#14128c" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z"></path></svg>
            </button>
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e]  font-bold py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#8c1a12" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
            </button>

            {/* add Expense */}
            <form  className="h-[500px] w-[350px] flex flex-col justify-between border border-white-500 rounded-md p-4 ">
                <input type="datetime-local" value="2018-06-12T19:30"/>
            </form>

        </>
    )
}

export default ExpenseTracker