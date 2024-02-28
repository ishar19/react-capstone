import { useState } from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];
export default function Movies() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("movies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  console.log(selected);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
        }}
      >
        {genres.map((genres) => {
          return (
            <MovieBox
              key={genres}
              data={genres}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "12px",
          marginBottom: "12px",
          gap: "12px",
        }}
      >
        {selected.map((item) => {
          return (
            <MovieChip
              key={item}
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      {selected.length < 3 ? <p>Minimum 3 categories required</p> : <></>}
      <button onClick={handleClick}>Next Page</button>
    </>
  );
}
