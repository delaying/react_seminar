import { useEffect, useState } from "react";

function StateExample(){
    const [loading, setLoading]= useState(true);
    const [formData, setFormdata]= useState('no data');
    
    const data = 'new data';

    useEffect(()=>{
        let timer = setTimeout(()=>{ 
            setLoading(false); 
            setFormdata(data+formData); 
        }, 4000);

        return ()=>{ clearTimeout(timer) }
    },[loading]);

    return(
        <div>
            <span>로딩중: {String(loading)}</span>
            <span>결과: {formData}</span>
        </div>
    )
}

export default StateExample;