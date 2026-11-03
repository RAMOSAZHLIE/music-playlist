import "./style.css";


 const songs = [
  [
    "Rapstar",
    "Flow G",
    "https://placehold.co/300x300?text=Rapstar"
  ],
  [
    "Lawaran",
    "J Roa",
    "https://placehold.co/300x300?text=Lawaran"
  ],
  [
    "4 AM",
    "HELLMERRY",
    "https://placehold.co/300x300?text=4+AM"
  ],
  [
    "Viva La Raza",
    "Uncle Dags",
    "https://placehold.co/300x300?text=Viva+La+Raza"
  ],
  [
    "Nag-Iisang Muli",
    "Cup of Joe",
    "https://placehold.co/300x300?text=Nag-Iisang+Muli"
  ]
];


function App() {
  
  return (
    <div className="app">

      <aside>
        <h2>♫ MyMusic</h2>
        <p>⌂ Home</p>
        <p>⌕ Search</p>
        <p>♡ Liked Songs</p>
      </aside>

      <main>

        <header>
          <input placeholder="Search songs or artists..." />
          <span>Jaja ♡</span>
        </header>

        <section className="hero">
          <img src={songs[0][2]} />

          <div>
            <small>PLAYLIST</small>
            <h1>My Favorite Songs</h1>
            <p>A collection of songs I love.</p>
          </div>
        </section>

        <div className="controls">
          <div className="play">▶</div>
          <span>♡</span>
          <span>•••</span>
        </div>

        {songs.map((s, i) => (
          <div className="song" key={s[0]}>

            <span>{i + 1}</span>

            <div className="title">
              <img src={s[2]} />

              <div>
                <b>{s[0]}</b>
                <small>{s[1]}</small>
              </div>
            </div>

            <span>My Favorites</span>
            <span>♡</span>

          </div>
        ))}

      </main>
    </div>
  );
}

export default App;
