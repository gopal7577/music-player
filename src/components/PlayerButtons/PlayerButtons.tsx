const PlayerButtons = () => {

    return<>
     <div className="navigation">
        <button id="prev" className="action-btn">
          <i className="fas fa-backward"></i>
        </button>
        <button id="play" className="action-btn action-btn-big">
          <i className="fas fa-play"></i>
        </button>
        <button id="next" className="action-btn">
          <i className="fas fa-forward"></i>
        </button>
      </div> 
    </>
}

export default PlayerButtons;