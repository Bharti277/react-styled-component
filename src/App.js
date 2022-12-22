import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    fetch("http://localhost:4040/students").then((result) => {
      result.json().then((res) => setData(res));
    });
  }, []);


  const saveHandler = () => {
    console.log("I am clicked");
    let post_data = {name, email, mobile}
    fetch("http://localhost:4040/api/courses", {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(post_data)
    }).then((result) => {
      result.json().then((res) => setData(res))
    })
  }

  return (
    <div className="App">
      <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <svg
            className="w-8 h-8 mr-2 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">
            Garden
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <h2 className="text-4xl">Hello</h2>
      <table border="1">
       <thead>
       <tr>
          <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        </tr>
       </thead>
        <tbody>
          {data.map((val) => (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>




        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} /> <br /> <br />
        <button type="button" onClick={saveHandler}>save new user</button>
    </div>
  );
}

export default App;
