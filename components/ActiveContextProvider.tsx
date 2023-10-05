'use client'

import React ,{useState,createContext, useContext} from 'react'
import { links } from '@/lib/data'
export type scrollProp = typeof links[number]['name']

type ActiveContextProp={
    activeNav:scrollProp;
    setActiveNav: React.Dispatch<React.SetStateAction<scrollProp>>;

}


 const ActiveContext = createContext<ActiveContextProp | null >(null)
export const useActiveContext=()=>{
    const context = useContext(ActiveContext)

    if(context===null){
        throw new Error (
            "use this whithin provider"
        )
    }
    return context
}



const ActiveContextProvider = ({children}:{children:React.ReactNode}) => {
    const [activeNav,setActiveNav]=useState<scrollProp>('Home')

  return <ActiveContext.Provider value={{
    activeNav,setActiveNav
  }}>
    {children}
  </ActiveContext.Provider>
}

export default ActiveContextProvider