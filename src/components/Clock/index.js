import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, updateDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      updateDate(new Date())
    }, 1000)
    console.log('Effect is executed and Interval is scheduled')
    return () => {
      clearInterval(timerId)
      console.log('clear interval executed')
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{date.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}
export default Clock
