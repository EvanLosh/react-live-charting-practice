import './App.css'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useRef } from 'react'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

// Create some random data
let data = []
function generateData() {
  data.length = 0
  for (let i = 0; i < 4; i++) {
    data.push(10 * Math.random())
  }
}

// Configure data for the chart
const dataConfig = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs'],
  datasets: [
    {
      label: 'Random numbers',
      data: data,
      backgroundColor: 'aqua',
      borderColor: 'black',
      borderWidth: 1
    }
  ]
}

function App() {

  generateData()
  // We will use this variable to access the chart in the DOM
  const theChart = useRef(null)

  function updateChart() {
    generateData()
    theChart.current.update() // Calling the chart's update method
  }

  return (
    <div className="App">
      <div style={{ padding: '40px' }}>
        <Bar
          data={dataConfig}
          options={null}
          ref={theChart} // When Bar gets rendered, theChart gets assigned to its DOM element. This allows us to access the chart's update method!
        />
        <button onClick={updateChart}>Update the chart</button>
      </div>
    </div>
  );
}

export default App;