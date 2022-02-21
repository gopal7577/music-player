import AudioData from "../AudioData/AudioData";
import ImagesData from "../ImagesData/ImagesData";
import MusicProgressBar from "../MusicProgressBar/MusicProgressBar";
import PlayerButtons from "../PlayerButtons/PlayerButtons";

const MusicContainer = () => {

    return<>
    <div className="music-container" id="music-container">
        <MusicProgressBar></MusicProgressBar>
        <AudioData></AudioData>
        <ImagesData></ImagesData>
        <PlayerButtons></PlayerButtons>

    </div>
    </>
}

export default MusicContainer;