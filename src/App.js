import { useState } from "react";
import "./index.css";
import tags from "./lib/data/tags_data.js";
import Switch from "./components/switch/Switch.js";

const fullName = "Udit Raj";
const occupation = "CTO @ Commerciax Infotech Pvt. Ltd.";
const bio =
  "I am a 23-year-old tech enthusiast from Bihar, India, currently based in Ahmedabad. With two immersive internships in Flutter and Android development, I've embarked on my journey as a software developer. Beyond coding, I'm driven by a passion for exploring cutting-edge technologies that shape the future. My interests span the intricacies of AI and ML, the mind-bending world of nanotech, the awe-inspiring realm of holograms, space mechanics, and biomechanics. I'm eager to dive deep into these fields and make a meaningful impact. Let's connect, collaborate, and innovate as we embark on this exciting tech adventure together.";

function App() {
  const [isToggled, setIsToggled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <ProfileCard
        isToggled={isToggled}
        onToggle={() => setIsToggled(isToggled ? false : true)}
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}

function ProfileCard({ isToggled, onToggle, isDarkMode, onDarkModeToggle }) {
  return (
    <div className={`profile-card ${isDarkMode ? "dark-mode" : ""}`}>
      <ProfileImage />
      <ProfileCardContent isToggled={isToggled} />
      <div className="profile-card__switches">
        <div className="profile-card__switch">
          <label className="switch-label">Show Level</label>
          <Switch isToggled={isToggled} onToggle={onToggle} />
        </div>
        <div className="profile-card__switch">
          <label className="switch-label">Dark Mode</label>
          <Switch isToggled={isDarkMode} onToggle={onDarkModeToggle} />
        </div>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="profile-card__img">
      <img src="user.jpeg" alt="John Doe" />
    </div>
  );
}

function ProfileCardContent({ isToggled }) {
  return (
    <div className="profile-card__content">
      <h1 className="profile-card__name">{fullName}</h1>
      <h2 className="profile-card__occupation">{occupation}</h2>
      <p className="profile-card__bio">{bio}</p>
      <Tags showLevel={isToggled} />
    </div>
  );
}

function Tags({ showLevel = true }) {
  return (
    <div className="profile-card__tags">
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} showLevel={showLevel} />
      ))}
    </div>
  );
}

function Tag({ tag, showLevel }) {
  return (
    <span
      className="profile-card__tag"
      style={{
        color: tag.color,
        backgroundColor: tag.background,
      }}
    >
      {tag.name} {showLevel ? getLevelEmoji(tag.level) : tag.emoji}
    </span>
  );
}

function getLevelEmoji(level) {
  return level === "Beginner" ? "👶🏽" : level === "Intermediate" ? "👍🏽" : "💪🏽";
}

export default App;
