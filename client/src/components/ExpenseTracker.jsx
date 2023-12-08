import axios from "axios";
import { useState } from "react";
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css';

const ExpenseTracker = ()=> {
    const [expenseList, setExpenseList] = useState([])  

      
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [select,setSelect] = useState({
        add:true,
        update:false,
        delete:false
    });

    const openUpdateModal =async ()=>{

        const getExpenseList = await axios.get('http://localhost:3001/expenses');

        if(getExpenseList.status == 200){
            console.log(getExpenseList.data);
            setExpenseList(getExpenseList.data);
            setModalIsOpen(true);
        }else{
            alert("No data found");
        }

    }

    const [expense, setExpense] = useState({
        createStamp: 0,
        description:"",
        category:"",
        amount:0
        //ToDo - add user id
    });

    const handelChange =(e)=>{
        setExpense({...expense, [e.target.name] : e.target.value});
    }

    const addExpense = async(e)=>{
        e.preventDefault();

        try {
            if(!expense.createStamp || !expense.description || !expense.category || !expense.amount){
                throw new Error("All fields must be field");
            }

            const axiosResponse = await axios.post('http://localhost:3001/expenses',{
                createStamp : new Date(expense.createStamp).getTime(),
                description : expense.description,
                category : expense.category,
                amount : expense.amount
            });

            if(axiosResponse.status == 201){
                alert("Expense added sucessfully");
            }else{
                alert("Expense added unscussful");
            }

        } catch (error) {
            alert(error.message);
        }

    }

    const updateExpense = async(e) =>{
        
    }


    return (
        <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg">
          <div className="flex space-x-4">
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e] py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#378c12" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
            </button>
            {/* Update */}
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e] py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800"
                onClick={openUpdateModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#14128c" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z"></path></svg>
            </button>
            <button className="bg-[#dddddd] hover:bg-[#dddddd9e] font-bold py-3 px-3 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#8c1a12" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
            </button>
          </div>
      
          {/* Add Expense */}
          <form className="mt-8 border p-8 rounded-md bg-white">
            <h2 className="text-2xl font-bold mb-4">
                {select.add && 'Create Expense'}
                {select.update && 'Update Expense'}
            </h2>
      
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Select Date and Time</label>
              <input type="datetime-local" className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" value="2018-06-12T19:30" name="createStamp" onChange={handelChange}/>
            </div>
      
            <div className="flex flex-col mt-4">
              <label className="text-gray-700 mb-2">Description</label>
              <textarea className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" rows="3" name="description" onChange={handelChange}></textarea>
            </div>
      
            <div className="flex flex-col mt-4">
              <label className="text-gray-700 mb-2">Category</label>
              <select className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" name="category" onChange={handelChange}>
                <option disabled selected>Select Categoery</option>
                <option value="groceries">groceries</option>
                <option value="utilities">utilities</option>
                <option value="rent">rent</option>
              </select>
            </div>
      
            <div className="flex flex-col mt-4">
              <label className="text-gray-700 mb-2">Amount</label>
              <input type="number" className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" name="amount" onChange={handelChange}/>
            </div>
      
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700" onClick={addExpense}>
              Add Expense
            </button>
          </form>

          {/* List of Expense */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="mymodal p-6 rounded-lg bg-white max-w-md mx-auto mt-20 shadow-md"
        overlayClassName=" fixed inset-0 bg-slate-800 "
        ariaHideApp={false}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-500">Expense List</h2>
          <button onClick={() => setModalIsOpen(false)} className="text-red-500">
            Close
          </button>
        </div>

        <ul className="list-disc pl-4">
          {expenseList.map((e,i) => (
           <li key={e.id} className="mb-2">
           {/* Display expense details here */}
           <span className="cursor-pointer" onClick={updateExpense(e)}>{e.description}- {new Date(e.createStamp).toLocaleString()}</span> 
         </li>
          ))}
        </ul>
      </Modal>
    </div>
        
      );
      
      
}

export default ExpenseTracker