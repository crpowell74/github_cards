import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Card } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const handleClick = () => {
    setShow(!show);
    fetch("https://api.github.com/users/crpowell74")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  return (
    <div className="App">
      <button onClick={handleClick} type="button" className="btn btn-primary">
        Toggle User
      </button>

      {show ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <div>{user.bio}</div>
              <div>{user.location}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        " "
      )}
    </div>
  );
}
export default App;
