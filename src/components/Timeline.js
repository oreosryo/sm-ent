import React, {Component} from 'react';
import TimeEvent from './TimeEvent';
import timelineData from '../data/timelineData';

class Timeline extends Component {
    render() {
        let timelineEvents = [];
        let data = timelineData;
        var isLast;

        for (var i = 0; i < data.length; i++)
        {
            isLast = (i === (data.length-1));
            timelineEvents.push(
                <TimeEvent
                    id={data[i].title}
                    title={data[i].title}
                    content={data[i].content}
                    key={i}
                    isLast={isLast}
                    images={data[i].images}
                />
            );
        }

        return (
            <div id="timeline-container">
                <div className="title">
                    Timeline
                </div>
                {timelineEvents}
            </div>
        );
    }
}

export default Timeline;