import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import '../css/TimeEvent.css';

class TimeEvent extends Component {
    render(){
        return (
            <div>
                <div id={this.props.id} className="time-event">
                    <div className="content-container">
                        <div className="line-dot"></div>
                        <div className={"line-container " + ((this.props.isLast) ? "last" : "")} >
                            <div className="title">{this.props.title}</div>
                            <div className="time-event-content-container">
                                <div className="content">
                                    {this.props.content}
                                </div>
                                <Gallery images={this.props.images} enableImageSelection={false}></Gallery>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default TimeEvent;