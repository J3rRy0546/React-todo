import "./App.css";

function Button() {
  return (
    <div>
      <button>test</button>
      <button>another test</button>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Button2({ color = "blue", text = "Button2" }) {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}

function AdminPanel() {
  return <h2>Admin Panel</h2>;
}

function UserPanel() {
  return <h2>User Panel</h2>;
}
// const h1Style = {
//   color: "blue",
// };

const user = {
  name: "basnata",
  age: 10,
  imgUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97",
  roles: ["admin", "user"],
  isAdmin: null,
};

function App() {
  return (
    <>
      <h1 style={{ color: "red" }} className="main-heading">
        Hello {`${user.name} ${user.age}`}
      </h1>

      <img src={user.imgUrl} width="100px" />
      {user.isAdmin ? <AdminPanel /> : <UserPanel />}

      <Button />
      {/* <Button />
      <Button />
      <Button /> */}
      <Button2   />
    </>
  );
}

export default App;
