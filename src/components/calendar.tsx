import { Calendar, momentLocalizer } from 'react-big-calendar'
import events from '@/lib/events'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const MyCalendar = (props: any) => (
  <div className='relative self-center mt-10 lg:w-full text-black text-sm bg-white rounded-xl border-0 border-black py-5 lg:p-10 w-[85vw]'>
    <Calendar
      localizer={localizer}
      events={events}
      dayLayoutAlgorithm="no-overlap"
      defaultView='agenda'
      startAccessor="start"
      views={["agenda", "day", "month"]}
      endAccessor="end"
      showMultiDayTimes
      style={{ height: "60vh" }}
    />
  </div>
)