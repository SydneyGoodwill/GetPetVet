/* eslint-disable no-unused-vars */
import React from 'react';
import moment from "moment";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import events from './events';
import ExampleControlSlot from './ExampleControlSlot';
import _ from 'lodash';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const propTypes = {};
const localizer = momentLocalizer(moment);

class CreateEventWithNoOverlap extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      events: _.cloneDeep(events),
      dayLayoutAlgorithm: 'no-overlap',
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    // eslint-disable-next-line curly
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      });
  }

  render() {
    return (
      <>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
            <br />
            The events are being arranged by `no-overlap` algorithm.
          </strong>
        </ExampleControlSlot.Entry>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
        />
      </>
    );
  }
}

CreateEventWithNoOverlap.propTypes = propTypes;

export default CreateEventWithNoOverlap;