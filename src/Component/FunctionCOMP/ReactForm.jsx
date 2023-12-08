import React, { useEffect, useState } from "react";

let count = 0;

export default function ReactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState();
  const [Show, setshow] = useState(false);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    let res = await fetch("https://course-api.com/react-tours-project");
    let datas = await res.json();
    // setdata(datas);
    console.log(datas);
  };

  const handlename = (e) => {
    setname(e.target.value);
    // console.log(e.target.value);
  };

  const handleage = (e) => {
    setage(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handleadd = (e) => {
    e.preventDefault();
    setshow(true);
  };

  count++;

  return (
    <div>
      <h1>Form</h1>

      <form>
        <h1>rendering : {count}</h1>
        <label>Name</label>
        <input
          onChange={(e) => handlename(e)}
          type="text"
          placeholder="Enter Your Name"
          value={name}
        />
        <br />
        <br />
        <label>Email</label>
        <input
          onChange={(e) => handleemail(e)}
          type="text"
          placeholder="Enter Your email"
          value={email}
        />

        <br />
        <br />
        <label>Age</label>

        <input
          onChange={(e) => handleage(e)}
          type="Number"
          placeholder="Enter u r age "
          value={age}
        />

        <br />
        <br />
        <button onClick={(e) => handleadd(e)}>Submit</button>
      </form>

      <>
        <h1>NAME : {name}</h1>
        <h1>AGE : {age}</h1>
        <h1>EMAIL : {email}</h1>
      </>
    </div>
  );
}
