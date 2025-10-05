import VideoPlayer from "./components/VideoPlayer";
import SpolliteLogo from "./assets/images/SpotliteLogo.png";
function App() {
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Protected Video </h1>
      <VideoPlayer
        videoSrc="/Protected-Video-Test/videos/playlist.m3u8"
        posterSrc={SpolliteLogo}
      />
    </div>
  );
}

export default App;
