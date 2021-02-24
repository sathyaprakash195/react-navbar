import React , {useState} from 'react'

export default function Navbar() {
    const[navstatus , setnavstatus]=useState(0)
    const[divwidth , setdivwidth]=useState('0px')


    function opennav()
    {
        if(navstatus==0)
        {
            setdivwidth('100%')
            setnavstatus(1)
        }else{
            setdivwidth('0px')
            setnavstatus(0)
        }
    }

    return (
        <div>
           

            <div className='maindiv' style={{width:divwidth}}>
                <button onClick={opennav}><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact US</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}
