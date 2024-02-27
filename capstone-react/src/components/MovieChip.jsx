/* eslint-disable react/prop-types */
export default function MovieChip({ data, setSelected }) {
  const handleClick = () => {
    setSelected((prev) => prev.filter((item) => item !== data));
  };
  return (
    <div style={{ background: "green", padding: "12px", borderRadius: "20px" }}>
      {data}&nbsp; &nbsp; <span onClick={handleClick}>X</span>
    </div>
  );
}
