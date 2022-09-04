import { useState, useEffect } from "react"
const useFetch =  (url)=>{

    const [data,setData] = useState(null)
    const [errors , setErrors] = useState(false)
    const [isPending , setisPending] = useState(true)

    useEffect (() =>{
        const abortCont = new AbortController();
        setTimeout(()=>{
            fetch (url, {signal: abortCont.signal})
        
            .then (res =>{
               if(!res.ok){
               throw Error('could not fetch data');
               }
               return res.json();
            }).then( data =>{
                setisPending(false)
                setErrors(null)
                setData(data)
            })
            .catch( err =>{
                if(err.name==="AbortError")
                {
                    console.log('error abort')
                }
           else{
            setErrors(err.message)
            setisPending(false)
           }
            
            })  
        },1000);
        return () => abortCont.abort(   )
    },[url])

   return{data, isPending , errors}

}

export default useFetch