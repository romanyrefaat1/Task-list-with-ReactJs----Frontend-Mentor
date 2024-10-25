import { createContext, useState } from "react";


const TemeContext = createContext()

const TemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)

    return (
        <TemeContext.Provider value={{isDark, setIsDark}}>{children}</TemeContext.Provider>
    )
}

export {TemeContext}
export default TemeProvider