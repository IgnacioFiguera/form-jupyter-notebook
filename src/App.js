
import React, {useState, useEffect} from 'react'

function App() {

  const [name, setName] = useState("");
  const [data, setData] = useState ([{}])

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
      try {
        //GET
        fetch("https://httpbin.org").then(
          res => res
        ).then(
          data => {
            setData(data)
            if (data != null) {
              setName("");
              alert("Everything ok")
            } else {
              alert("Bad Request")
            }
            console.log(data)
          }
        )
/*
        //POST 1
        fetch("/postMember/"+name, {
          method: 'POST'
        }).then(
          res => res.json()
        ).then(
          data => {
            setData(data)
            if (data != null) {
              setName("");
              alert("Everything ok")
            } else {
              alert("Bad Request")
            }
            console.log(data)
          }
        )

        //POST Multiple
        fetch("/postMembers", {
          method: 'POST',
          body: JSON.stringify({
            form: {name: name}
          })
        }).then(
          res => res.json()
        ).then(
          data => {
            setData(data)
            if (data != null) {
              setName("");
              alert("Everything ok")
            } else {
              alert("Bad Request")
            }
            console.log(data)
          }
        )
*/
        /* let res = fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            mobileNumber: mobileNumber,
          }),
        });*/
      } catch (err) {
        console.log(err);
      }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Year:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default App;
