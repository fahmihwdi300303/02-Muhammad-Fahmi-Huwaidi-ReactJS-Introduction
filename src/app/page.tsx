import Image from "next/image";
import Profile from "./components/Profile";
export default function Home() {
  return (
    <IDname></IDname>,
    <br></br>,
    <AboutPage></AboutPage>,
    <Profile></Profile>
    );

    function IDname() {
      return (
        <div>
          <h1>Muhammad Fahmi Huwaidi-2141720153</h1>
        </div>
      );
    }

    function AboutPage() {
      return (
        <>
          <h1>Tentang</h1>
          <p>Halo.<br />Apa kabar?</p>
        </>
      );
    }
}
