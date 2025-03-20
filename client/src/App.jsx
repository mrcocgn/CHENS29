import Login from "./supabase/login"
import Logout from "./supabase/logout"
import UserProfile from "./supabase/userProfile"

function App() {

  return (
    <>
      <Login />
      <Logout />
      <UserProfile />
    </>
  )
}

export default App;
