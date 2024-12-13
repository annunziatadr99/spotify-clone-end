import { useDispatch, useSelector } from "react-redux";
import { likeSong } from "../redux/likedSongsSlice";
import { setCurrentSong } from "../redux/currentSongSlice";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);
  const isLiked = likedSongs.includes(song.title);

  return (
    <div className="col text-center">
      <img
        className="img-fluid"
        src={song.album.cover_medium}
        alt="track"
        onClick={() => dispatch(setCurrentSong(song.title))}
      />
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
      <button onClick={() => dispatch(likeSong(song.title))}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default AlbumCard;
