import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'
import './styles/global.css'

const App = () => {
  return (
    <div className="app-container">
      <Sidebar isOpen={false} />
      <div className="main-area">
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
