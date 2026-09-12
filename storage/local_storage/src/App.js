// React se useState hook import kar rahe hain
import { useState } from "react";

// App naam ka component bana rahe hain
function App() {
  // localStorage se pehle saved name read kar rahe hain
  //
  // Agar "name" key mein data milta hai,
  // to woh name state mein aa jayega
  //
  // Agar data nahi milta,
  // to empty string use hogi
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  // Yeh function name ko localStorage mein save karega
  const saveName = () => {
    // "name" key ke andar user ka naam save kar rahe hain
    localStorage.setItem("name", name);

    // Save hone ke baad message show kar rahe hain
    alert("Name localStorage mein save ho gaya!");
  };

  // Yeh function name delete karega
  const deleteName = () => {
    // localStorage se "name" key delete kar rahe hain
    localStorage.removeItem("name");

    // React state ko bhi empty kar rahe hain
    setName("");

    // Delete hone ke baad message show kar rahe hain
    alert("Name delete ho gaya!");
  };

  // Component ka UI return kar rahe hain
  return (
    <div>
      {/* App ka heading */}
      <h1>Local Storage Example</h1>

      {/* Saved name screen par show kar rahe hain */}
      <h2>Hello, {name}</h2>

      {/* User yahan apna naam likhega */}
      <input
        type="text"
        placeholder="Apna naam likho"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {/* Is button par click karne se saveName function chalega */}
      <button onClick={saveName}>
        Save Name
      </button>

      {/* Is button par click karne se deleteName function chalega */}
      <button onClick={deleteName}>
        Delete Name
      </button>
    </div>
  );
}

// App component ko export kar rahe hain
export default App;