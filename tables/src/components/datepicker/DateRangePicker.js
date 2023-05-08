import DateRangePicker from 'rsuite/DateRangePicker';
import './DateRangePicker.scss'

const DateSelector = ({ placeHolder, daysRange, dateValue, label, onDateUpdate, resetDate,identifier }) => {
    const { allowedMaxDays, combine, afterToday } = DateRangePicker;

    return (
        <div className='datepicker-container'>
            <span className='datepicker-label'>{label}</span>
            <DateRangePicker size='sm' showOneCalendar={true} editable={false} placeholder={placeHolder} value={dateValue}
                shouldDisableDate={combine(allowedMaxDays(daysRange), afterToday(daysRange))}
                onOk={(value) => onDateUpdate(value,identifier)} onClean={resetDate} character=' to '
            />
        </div>
    )
}

export default DateSelector