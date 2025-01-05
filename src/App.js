import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <div className="profile-card__img">
          <img src="user.jpeg" alt="John Doe" />
        </div>
        <div className="profile-card__content">
          <h1 className="profile-card__name">Udit Raj</h1>
          <h2 className="profile-card__occupation">
            CTO @ Commerciax Infotech Pvt. Ltd.
          </h2>
          <p className="profile-card__bio">
            I am a 23-year-old tech enthusiast from Bihar, India, currently
            based in Ahmedabad. With two immersive internships in Flutter and
            Android development, I've embarked on my journey as a software
            developer. Beyond coding, I'm driven by a passion for exploring
            cutting-edge technologies that shape the future. My interests span
            the intricacies of AI and ML, the mind-bending world of nanotech,
            the awe-inspiring realm of holograms, space mechanics, and
            biomechanics. I'm eager to dive deep into these fields and make a
            meaningful impact. Let's connect, collaborate, and innovate as we
            embark on this exciting tech adventure together.
          </p>
          <ul className="profile-card__tags">
            <li className="profile-card__tag">Artificial Intelligence ❤️</li>
            <li className="profile-card__tag">Machine Learning 💕</li>
            <li className="profile-card__tag">Nanotech 😍</li>
            <li className="profile-card__tag">Holograms 🎶</li>
            <li className="profile-card__tag">Flutter 🪭</li>
            <li className="profile-card__tag">Android 🥹</li>
            <li className="profile-card__tag">Space Mechanics ✨</li>
            <li className="profile-card__tag">Biomechanics 💊</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
