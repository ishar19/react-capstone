import News from "../components/News";
import Notes from "../components/Notes";
import Timer from "../components/Timer";
import UserInfo from "../components/UserInfo";
import Weather from "../components/Weather";

export default function Display() {
  return (
    <>
      <UserInfo />
      <Notes />
      {/* <Weather /> */}
      {/* <News /> */}
      <Timer />
    </>
  );
}
