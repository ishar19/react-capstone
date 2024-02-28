export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div
      style={{
        background: " #5746EA ",
        width: "25vw",
        padding: "16px",
        color: "white",
      }}
    >
      <p>{info.name}</p>
      <p>{info.username}</p>
      <p>{info.email}</p>
      {movies.map((item) => {
        return (
          <div
            style={{
              background: "#9F94FF",
              borderRadius: "12px",
              marginBottom: "8px",
              padding: "6px",
              textAlign: "center",
            }}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
