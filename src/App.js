import "./App.css";

const fullName = "Udit Raj";
const occupation = "CTO @ Commerciax Infotech Pvt. Ltd.";
const bio =
  "I am a 23-year-old tech enthusiast from Bihar, India, currently based in Ahmedabad. With two immersive internships in Flutter and Android development, I've embarked on my journey as a software developer. Beyond coding, I'm driven by a passion for exploring cutting-edge technologies that shape the future. My interests span the intricacies of AI and ML, the mind-bending world of nanotech, the awe-inspiring realm of holograms, space mechanics, and biomechanics. I'm eager to dive deep into these fields and make a meaningful impact. Let's connect, collaborate, and innovate as we embark on this exciting tech adventure together.";

const tags = [
  {
    id: 1,
    name: "Artificial Intelligence",
    emoji: "❤️",
    color: "#0078d4",
    background: "#e0f4ff",
  },
  {
    id: 2,
    name: "Machine Learning",
    emoji: "💕",
    color: "#d4006e",
    background: "#ffe0e6",
  },
  {
    id: 3,
    name: "Nanotech",
    emoji: "😍",
    color: "#107c10",
    background: "#e3f1e5",
  },
  {
    id: 4,
    name: "Holograms",
    emoji: "🎶",
    color: "#d47b00",
    background: "#fff4e0",
  },
  {
    id: 5,
    name: "Flutter",
    emoji: "🪭",
    color: "#5c2d91",
    background: "#e5e0ff",
  },
  {
    id: 6,
    name: "Android",
    emoji: "🥹",
    color: "#b4009e",
    background: "#ffe0f0",
  },
  {
    id: 7,
    name: "Space Mechanics",
    emoji: "✨",
    color: "#0063b1",
    background: "#e0f0ff",
  },
  {
    id: 8,
    name: "Biomechanics",
    emoji: "💊",
    color: "#4b0082",
    background: "#e8e0ff",
  },
];

function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileImage />
      <ProfileCardContent />
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

function ProfileCardContent() {
  return (
    <div className="profile-card__content">
      <h1 className="profile-card__name">{fullName}</h1>
      <h2 className="profile-card__occupation">{occupation}</h2>
      <p className="profile-card__bio">{bio}</p>
      <Tags />
    </div>
  );
}

function Tags() {
  return (
    <div className="profile-card__tags">
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          name={tag.name}
          emoji={tag.emoji}
          color={tag.color}
          background={tag.background}
        />
      ))}
    </div>
  );
}

function Tag(props) {
  return (
    <span
      className="profile-card__tag"
      style={{
        color: props.color,
        backgroundColor: props.background,
      }}
    >
      {props.name} {props.emoji}
    </span>
  );
}

export default App;
