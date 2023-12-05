import { useState, useEffect } from "react";

const ExpenseTracker = () => {
    let checkUser = JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<checkUser.length;i++){
        console.log(checkUser[i].email,"checkuser")
    }
    
  const userId = ""; // Replace with actual user identifier from authentication
  const localStorageKey = "currentUser";

  const [users, setUsers] = useState({});
  const [categories, setCategories] = useState(["Groceries", "Utilities", "Rent", "Other"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [newExpense, setNewExpense] = useState({
    date: "",
    description: "",
    category: "Groceries",
    amount: "",
  });

  useEffect(() => {
    // Load user data from localStorage on component mount
    const savedUsers = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    setUsers(savedUsers);
  }, [localStorageKey]);

  const handleInputChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!newExpense.date || !newExpense.description || !newExpense.amount) {
      alert("Please fill in all fields.");
      return;
    }

    // Ensure 'expenses' key exists in the user object
    const currentUser = users[userId] || { expenses: [] };
    const updatedExpenses = [...currentUser.expenses, newExpense];
    
    
    setUsers((prevUsers) => ({ ...prevUsers, [userId]: { expenses: updatedExpenses } }));

    
    localStorage.setItem(localStorageKey, JSON.stringify({ ...users, [userId]: { expenses: updatedExpenses } }));

    setNewExpense({
      date: "",
      description: "",
      category: "Groceries",
      amount: "",
    });
  };

  const deleteExpense = (index) => {
  
    const currentUser = users[userId] || { expenses: [] };
    const updatedExpenses = [...currentUser.expenses];
    updatedExpenses.splice(index, 1);

    // Update the user object in the state
    setUsers((prevUsers) => ({ ...prevUsers, [userId]: { expenses: updatedExpenses } }));

    // Save user data to localStorage after deletion
    localStorage.setItem(localStorageKey, JSON.stringify({ ...users, [userId]: { expenses: updatedExpenses } }));
  };

  return (
    <div>
      <h2>Expense Tracker</h2>

      <div>
        <label>Date:</label>
        <input type="date" name="date" value={newExpense.date} onChange={handleInputChange} />
      </div>

      <div>
        <label>Description:</label>
        <input type="text" name="description" value={newExpense.description} onChange={handleInputChange} />
      </div>

      <div>
        <label>Category:</label>
        <select name="category" value={newExpense.category} onChange={handleInputChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Amount:</label>
        <input type="number" name="amount" value={newExpense.amount} onChange={handleInputChange} />
      </div>

      <button onClick={addExpense}>Add Expense</button>

      <h3>Expense List</h3>

      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <ul>
        {users[userId]?.expenses
          .filter((expense) => selectedCategory === "All" || expense.category === selectedCategory)
          .map((expense, index) => (
            <li key={index}>
              <span>Date: {expense.date}</span>
              <span>Description: {expense.description}</span>
              <span>Category: {expense.category}</span>
              <span>Amount: ${expense.amount}</span>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
