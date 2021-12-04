import './Start.css';
import cloud from "./cloud.png";
import mountain from "./mountain.png";
import cupid_s from "./cupid-s.png";

function Start() {
  return (
    <div id="start" class="top-container">
        <img id="cloud-top" src={cloud} alt="Cloud picture" />
        <h1>Cupid.</h1>
        <h2 id="programmer-text">Not your usual platform.</h2>
        <a id="enter" class="button" href="/mainpage" role="button">Enter <img class="cupid" src={cupid_s} alt=">>" /></a>
        <img id="cloud-bottom" src={cloud} alt="Cloud picture" />
        <img id="mountain" src={mountain} alt="Mountain picture" />
    </div>
  );
}

export default Start;