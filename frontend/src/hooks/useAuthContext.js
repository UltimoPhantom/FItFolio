import  { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(AuthContext)

    if(!context)
        throw Error('Must be used within Provider!')

    return context
}    