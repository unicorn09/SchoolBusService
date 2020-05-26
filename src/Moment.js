import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
 
const localizer = momentLocalizer(moment)
 
const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)