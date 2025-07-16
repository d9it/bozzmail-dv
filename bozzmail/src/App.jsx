import AppRoute from './router'
import { AuthProvider } from './hook/useAuth.jsx'

const App = () => {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  )
}

export default App;
