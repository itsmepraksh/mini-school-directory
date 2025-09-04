import { createContext, useState } from 'react';

export const schoolContext = createContext()

const Wrapper = (props) => {
    const [schoolData, setSchoolData] = useState(null)
  return (
    <schoolContext.Provider value={{schoolData,setSchoolData}}>
        {props.children}
    </schoolContext.Provider>
  )
}

export default Wrapper