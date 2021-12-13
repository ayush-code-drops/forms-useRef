import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const intial = {
    name: "",
    isMarried: "",
    gender: "",
    email: ""
  };
  const ref = useRef("");
  const [data, setData] = useState(intial);
  const { name, isMarried, gender, email } = data;
  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;

    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(ref.current.files[0]);
  };
  return (
    <div className="App">
      <h1>Forms useRef</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          isMarried:
          <input
            type="checkbox"
            name="isMarried"
            checked={isMarried}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Gender:
          <select name="gender" value={gender} onChange={handleChange}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="D">Do not want to disclose</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          email:
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input ref={ref} type="file" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
