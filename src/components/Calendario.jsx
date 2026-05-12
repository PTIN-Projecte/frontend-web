import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import EventoCalendario from './EventoCalendario'

const Calendario = ({ eventos }) => {
  return (
    <div className="calendario-custom">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={eventos}
        locale={esLocale}
        
        eventContent={(eventInfo) => (
          <EventoCalendario info={eventInfo} />
        )}
        
        slotLabelWidth="80px" 
        slotDuration="03:00:00"      
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }}

        allDaySlot={false}
        slotMinTime="00:00:00" 
        slotMaxTime="24:00:00"
        expandRows={true}            
        stickyHeaderDates={true}     
        
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,dayGridMonth'
        }}
        height="100%"

        slotLabelContent={(arg) => (
          <div style={{ textAlign: 'right', paddingRight: '15px', color: '#8e8e93', fontSize: '12px', fontWeight: '500' }}>
            {arg.text}
          </div>
        )}
      />
    </div>
  )
}

export default Calendario