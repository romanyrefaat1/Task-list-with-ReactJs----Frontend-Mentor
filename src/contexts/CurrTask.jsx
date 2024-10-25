import { createContext, useState } from "react";

const CurrTaskContext = createContext()

const CurrTaskProvider = ({children}) => {
    const [currTask, setCurrTask] = useState({
        text: ``,
        tags: {
            isCompleted: false,
            userTags: []
        }
    })

    return (
        <CurrTaskContext.Provider value={{currTask , setCurrTask}}>
            {children}
        </CurrTaskContext.Provider>
    )
}

export {CurrTaskContext}
export default CurrTaskProvider