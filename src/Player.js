import { useEffect, useState } from "react";
import "./Player.css";

function Player(url) {
  const songs = [
    {
      name: "Yesterday",
      artist: "The Beatles",
      img: "/assets/yesterday.jpg",
      audio: "/assets/yesterday.mp3",
    },
    {
      name: "I'm A Loser",
      artist: "The Beatles",
      img: "/assets/beatles-for-sale.jpg",
      audio: "/assets/im-a-loser.mp3",
    },
    {
      name: "About A Girl",
      artist: "Nirvana",
      img: "/assets/nirvana-unplugged.jpg",
      audio: "/assets/about-a-girl.mp3",
    },
    {
      name: "No Reply",
      artist: "The Beatles",
      img: "/assets/beatles-for-sale.jpg",
      audio: "/assets/no-reply.mp3",
    },
  ];

  const [songIndex, setSongIndex] = useState(0);
  const [songName, setSongName] = useState();
  const [artistName, setArtistName] = useState();
  const [imageName, setImageName] = useState();
  const [audioURL, setAudioURL] = useState(songs[songIndex].audio);
  // const [playing, toggle] = useAudio(audioURL);
  const [audio, setAudio] = useState(new Audio(audioURL));
  const [playing, setPlaying] = useState(false);

  function toggle() {
    setPlaying(!playing);
  }

  function setSong() {
    setSongName(songs[songIndex].name);
    setArtistName(songs[songIndex].artist);
    setImageName(songs[songIndex].img);
    setAudioURL(songs[songIndex].audio);
    setAudio(new Audio(songs[songIndex].audio));
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    setSong();
  }, [songIndex]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  function prevSong() {
    if (songIndex > 0) {
      if (playing) toggle();
      setSongIndex(songIndex - 1);
    }
  }

  function nextSong() {
    if (songIndex < songs.length - 1) {
      if (playing) toggle();
      setSongIndex(songIndex + 1);
    }
  }

  return (
    <div className="content">
      <div className="top-bar">
        <span className="material-symbols-outlined">expand_more</span>
        <span>Now playing</span>
        <span className="material-symbols-outlined">more_horiz</span>
      </div>
      <div className="image-wrapper">
        <div className="music-image">
          <img src={imageName} alt="" />
        </div>
      </div>
      <div className="music-titles">
        <p className="name">{songName}</p>
        <p className="artist">{artistName}</p>
      </div>
      <div className="progress-details">
        <div className="progress-bar">
          <span></span>
        </div>
        <div className="time">
          <span className="current">0:00</span>
          <span className="final">3:54</span>
        </div>
      </div>
      <div className="control-btn">
        <span className="material-symbols-outlined" id="repeat">
          repeat
        </span>
        <span
          onClick={prevSong}
          className="material-symbols-outlined"
          id="prev"
        >
          skip_previous
        </span>
        <div className="play-pause">
          <span onClick={toggle} className="material-symbols-outlined">
            {!playing ? "play_arrow" : "pause"}
          </span>
        </div>
        <span
          onClick={nextSong}
          className="material-symbols-outlined"
          id="next"
        >
          skip_next
        </span>
        <span className="material-symbols-outlined" id="shuffle">
          shuffle
        </span>
      </div>
    </div>
  );
}

export default Player;
