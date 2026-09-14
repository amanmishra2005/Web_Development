import ClockHeading from './Components/Clock_Heading';
import ClockSlogan from './Components/Clock_Slogan';
import ClockTime from './Components/Current_Time';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <ClockTime></ClockTime>
  </center>
}

export default App
