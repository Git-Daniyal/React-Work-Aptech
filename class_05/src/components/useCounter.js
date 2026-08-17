import {useState} from 'react'

function useCounter( initialValue = 0 ){

const [count, SetCount] = useState(initialValue);
function Increament(){
    SetCount(count + 2)
}
function Decreament(){
    SetCount(count - 1)
}

return [count,Increament,Decreament]

}
export default useCounter;
