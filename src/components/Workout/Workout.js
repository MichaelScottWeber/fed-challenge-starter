import React from "react";
import DurationIcon from "../../img/DurationIcon.svg";
import DistanceIcon from "../../img/DistanceIcon.svg";
import PlaylistIcon from "../../img/PlaylistIcon.svg";
import "../Workout/Workout.css";

const Workout = ({ data, selected, handleSelectedWorkout }) => {
    const formatDistance = (num) => {
        const nfObject = new Intl.NumberFormat("en-US");
        return nfObject.format(num);
    };

    const renderDuration = () => {
        if (data.duration) {
            return (
                <div className='duration-container'>
                    <img src={DurationIcon} alt='' />
                    <p>{data.duration}</p>
                </div>
            );
        }
    };

    const renderDistance = () => {
        if (data.distance) {
            return (
                <div className='distance-container'>
                    <img src={DistanceIcon} alt='' />
                    <p>{`${formatDistance(data.distance)} M`}</p>
                </div>
            );
        }
    };

    const renderPlaylistOverlay = () => {
        if (data.playlist) {
            return (
                <div className='playlist-overlay'>
                    <span>{data.playlist.length}</span>
                    <p>WORKOUTS</p>
                    <img src={PlaylistIcon} alt='' />
                </div>
            );
        }
    };

    return (
        <div
            className={selected ? "Workout selected" : "Workout"}
            onClick={() => handleSelectedWorkout(data.name)}
        >
            <div className='img-container'>
                <div>
                    {renderPlaylistOverlay()}
                    <img
                        className='thumb-img'
                        src={data.thumbImg}
                        alt={data.name}
                    />
                </div>
            </div>
            <div className='info-container'>
                <div>
                    <div className='title-container'>
                        <h2>{data.name}</h2>
                        <img
                            className='trainer-img'
                            src={data.trainerImg}
                            alt={`Trainer for the ${data.name} workout`}
                        />
                    </div>
                    <div className='stats-container'>
                        <div className='stats'>
                            {renderDuration()}
                            {renderDistance()}
                        </div>
                    </div>
                </div>
                <div className='link-container'>
                    {selected ? <a href={data.detailsUrl}>VIEW DETAILS</a> : ""}
                </div>
            </div>
        </div>
    );
};

export default Workout;
