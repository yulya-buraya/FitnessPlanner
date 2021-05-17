import React from "react"
import "../../../styles/training.css"

export const TrainingBlockComponent = () => {
    return (
        <div className="training-item">
            <iframe className="training-video" src="https://www.youtube.com/embed/-p0PA9Zt8zk"
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
                title="YouTube video player">
            </iframe>
            <p className="video-name">Разминка</p>
        </div>
    );
}
