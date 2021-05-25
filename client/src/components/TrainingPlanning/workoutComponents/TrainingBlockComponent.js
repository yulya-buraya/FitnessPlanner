import React from "react"
import "../../../styles/training.css"

export const TrainingBlockComponent = ({exercise}) => {
    return (
        <div className="training-item">
            <iframe className="training-video" src={exercise.link}
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
                title="YouTube video player">
            </iframe>
            <p className="video-name">{ exercise.name }</p>
        
        </div>
    );
}
