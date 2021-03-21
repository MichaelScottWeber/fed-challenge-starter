import React, { Component } from "react";
import Workout from "../Workout/Workout";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "../WorkoutContainer/WorkoutContainer.css";
import TwentyMinutesToTonedThumb from "../../img/20-minutes-to-toned-thumb.jpg";
import TwentyMinutesToTonedTrainer from "../../img/20-minutes-to-toned-trainer.jpg";
import CharlesRaceThumb from "../../img/charles-race-thumb.jpg";
import CharlesRaceTrainer from "../../img/charles-race-trainer.jpg";
import FullBodyHiitThumb from "../../img/full-body-hiit-thumb.jpg";
import FullBodyHiitTrainer from "../../img/full-body-hiit-trainer.jpg";
import KafueRiverThumb from "../../img/kafue-river-thumb.jpg";
import KafueRiverTrainer from "../../img/kafue-river-trainer.jpg";
import LakeInniscarraThumb from "../../img/lake-inniscarra-thumb.jpg";
import LakeInniscarraTrainer from "../../img/lake-inniscarra-trainer.jpg";
import PerformanceSeriesThumb from "../../img/performance-series-thumb.jpg";
import PerformanceSeriesTrainer from "../../img/performance-series-trainer.jpg";
import ShredAndBurnThumb from "../../img/shred-and-burn-thumb.jpg";
import ShredAndBurnTrainer from "../../img/shred-and-burn-trainer.jpg";
import SlowPullsThumb from "../../img/slow-pulls-thumb.jpg";
import SlowPullsTrainer from "../../img/slow-pulls-trainer.jpg";

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll("img");
    console.log(imgElements);
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class WorkoutContainer extends Component {
    state = {
        loading: true,
        selectedWorkout: "",
        workouts: [
            {
                name: "Lake Inniscarra, Ireland—Pyramid",
                duration: "30:53",
                distance: 6248,
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: LakeInniscarraThumb,
                trainerImg: LakeInniscarraTrainer,
            },
            {
                name: "Performance Series",
                playlist: [1, 2, 3, 4, 5, 6, 7, 8, 9], // This would be an array of the actual playlist info
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: PerformanceSeriesThumb,
                trainerImg: PerformanceSeriesTrainer,
            },
            {
                name: "Slow Pulls and Fast Intervals",
                duration: "44:13",
                distance: 9948,
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: SlowPullsThumb,
                trainerImg: SlowPullsTrainer,
            },
            {
                name: "20 Minutes to Toned",
                playlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // This would be an array of the actual playlist info
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: TwentyMinutesToTonedThumb,
                trainerImg: TwentyMinutesToTonedTrainer,
            },
            {
                name: "Charles Race, Boston, Massachusetts",
                duration: "36:22",
                distance: 8648,
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: CharlesRaceThumb,
                trainerImg: CharlesRaceTrainer,
            },
            {
                name: "Full-Body HIIT Series",
                playlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // This would be an array of the actual playlist info
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: FullBodyHiitThumb,
                trainerImg: FullBodyHiitTrainer,
            },
            {
                name: "Kafue River, Zambia—Power Stroke Pyramid",
                duration: "22:22",
                distance: 4660,
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: KafueRiverThumb,
                trainerImg: KafueRiverTrainer,
            },
            {
                name: "Shred & Burn Series",
                playlist: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                ], // This would be an array of the actual playlist info
                detailsUrl: "", // This would be a path to the actual workout details
                thumbImg: ShredAndBurnThumb,
                trainerImg: ShredAndBurnTrainer,
            },
        ],
    };

    handleLoadingChange = () => {
        this.setState({
            loading: !imagesLoaded(this.listElement),
        });
    };

    handleSelectedWorkout = (workout) => {
        this.setState({ selectedWorkout: workout });
    };

    renderLoadingScreen = () => {
        if (!this.state.loading) {
            return null;
        }
        return <LoadingScreen />;
    };

    render() {
        const workoutList = this.state.workouts.map((workout) => {
            return (
                <Workout
                    key={workout.name}
                    data={workout}
                    selected={workout.name === this.state.selectedWorkout}
                    handleSelectedWorkout={this.handleSelectedWorkout}
                    handleLoadingChange={this.handleLoadingChange}
                />
            );
        });

        return (
            <div>
                {this.renderLoadingScreen()}
                <ul
                    className={
                        this.state.loading
                            ? "WorkoutContainer hide"
                            : "WorkoutContainer"
                    }
                    ref={(element) => {
                        this.listElement = element;
                    }}
                >
                    {workoutList}
                </ul>
            </div>
        );
    }
}

export default WorkoutContainer;
