import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveContext } from '@/components/ActiveContextProvider'
import { scrollProp } from '@/components/ActiveContextProvider'

export const NavViewer = (pageName:scrollProp,threshold=0.5)=>{
const {ref,inView}=useInView({
    threshold
  })
  const {setActiveNav}=useActiveContext()
  

  useEffect(()=>{
    if(inView){
      setActiveNav(pageName)
    }
  },[inView,setActiveNav,pageName])

return { ref,};
}