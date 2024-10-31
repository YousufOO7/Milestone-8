import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log("Submit data", data);
}

const handelUpdateProfile = data => {
    console.log("Profile data", data)
}

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      formTitle={'Sign UP'}
      handleSubmit={handleSignUpSubmit}
      ></ReusableForm>
      <ReusableForm 
      formTitle={'Update Profile'}
      submitBtnText='Update'
      handleSubmit={handelUpdateProfile}
      ></ReusableForm>
    </>
  )
}

export default App
