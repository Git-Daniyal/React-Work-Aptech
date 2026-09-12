// React se useState hook import kar rahe hain
import { useState } from "react";

// App naam ka component bana rahe hain
function App() {
  // sessionStorage se saved name read kar rahe hain
  //
  // "name" key ke andar agar koi value hai,
  // to woh value name state mein aa jayegi
  //
  // Agar value nahi hai, to empty string use hogi
  const [name, setName] = useState(
    sessionStorage.getItem("name") || ""
  );

  // Yeh function name ko sessionStorage mein save karega
  const saveName = () => {
    // "name" key ke andar name ki value save kar rahe hain
    sessionStorage.setItem("name", name);

    // Save hone ke baad message show kar rahe hain
    alert("Name save ho gaya!");
  };

  // Yeh function name ko delete karega
  const deleteName = () => {
    // sessionStorage se "name" key delete kar rahe hain
    sessionStorage.removeItem("name");

    // React state ko bhi empty kar rahe hain
    setName("");

    // Delete hone ke baad message show kar rahe hain
    alert("Name delete ho gaya!");
  };

  // Component ka UI return kar rahe hain
  return (
    <div>

      {/* User ka saved name screen par show hoga */}
      <h2>Hello, {name}</h2>

      {/* User is input box mein apna naam likhega */}
      <input
        type="text"
        placeholder="Apna naam likho"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {/* Button click karne par saveName function chalega */}
      <button onClick={saveName}>
        Save Name
      </button>

      {/* Button click karne par deleteName function chalega */}
      <button onClick={deleteName}>
        Delete Name
      </button>
    </div>
  );
}

// App component ko export kar rahe hain
export default App;