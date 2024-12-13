import { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";

const PageHome = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async (artistName) => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
        );
        if (response.ok) {
          const { data } = await response.json();
          setSongs((prevSongs) => [...prevSongs, ...data.slice(0, 4)]);
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchSongs("queen");
    fetchSongs("katyperry");
    fetchSongs("eminem");
  }, []);

  return (
    <div className="container">
      <div className="row">
        {songs.map((song) => (
          <AlbumCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default PageHome;
