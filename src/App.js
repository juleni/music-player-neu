import "./App.css";

function App() {
  return (
    <div className="content">
      <div className="top-bar">
        <span class="material-symbols-outlined">expand_more</span>
        <span>Now playing</span>
        <span class="material-symbols-outlined">more_horiz</span>
      </div>
      <div className="image-wrapper">
        <div className="music-image">
          <img src="/assets/sample.jpg" alt="" />
        </div>
      </div>
      <div className="music-titles">
        <p className="name">Actual Playing Song name</p>
        <p className="artist">Artist name</p>
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
        <span class="material-symbols-outlined" id="repeat">
          repeat
        </span>
        <span class="material-symbols-outlined" id="prev">
          skip_previous
        </span>
        <div className="play-pause">
          <span class="material-symbols-outlined">play_arrow</span>
        </div>
        <span class="material-symbols-outlined" id="next">
          skip_next
        </span>
        <span class="material-symbols-outlined" id="shuffle">
          shuffle
        </span>
      </div>
      <audio src="/assets/sample.mp3" className="main-song"></audio>
    </div>
  );
}

export default App;
