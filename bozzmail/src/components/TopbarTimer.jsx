import React, {useEffect,useState} from 'react'
import moment from 'moment';

const TopbarTimer = () => {

    // State for current time
    const [currentTime, setCurrentTime] = useState(Date.now());

    // Update time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000 * 60); 

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='text-13px font-medium text-secondary-text flex items-center justify-center'>
        <p>{moment(currentTime).format('MMMM DD, YYYY')}</p>
        <p className='px-4'>·</p>
        <p>{moment(currentTime).format('h:mm A')}</p>
    </div>
  )
}

export default TopbarTimer