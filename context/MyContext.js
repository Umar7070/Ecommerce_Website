import React from 'react'
import { createContext } from 'vm'
export const myProvider= createContext()

const MyContext = ({children}) => {
  return (
    <>
    <myProvider.myProvider value={{}}>
        {children}

    </myProvider.myProvider>
      
    </>
  )
}

export default MyContext
