import { useEffect,useState } from "react"
export  function getStorageValue(key,defaultValue){
    const saved=localStorage.getItem(key)
    const title=JSON.parse(saved)
  console.log(title,defaultValue)
  return title || defaultValue
  }
  export function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{
      return getStorageValue(key,defaultValue)
    })
  }


