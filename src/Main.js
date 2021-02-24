import React, { useState , useEffect } from 'react'

export default function Main() {

    var quizdata = [

        {
            question: 'Which framework is related JS',
            a: '.net',
            b: 'flask',
            c: 'react',
            d: 'django',
            correct: 'c'
        },
        {
            question: 'Which is not a programming language',
            a: 'html',
            b: 'pythopn',
            c: 'java',
            d: 'js',
            correct: 'a'
        },
        {
            question: 'which is not a framework',
            a: 'react',
            b: 'javascript',
            c: 'angular',
            d: 'django',
            correct: 'b'
        },
        {
            question: 'css stands for',
            a: 'cascading style state',
            b: 'cascading style sheet',
            c: 'cascading sheet of style',
            d: 'none',
            correct: 'b'
        }

    ]
    const[qno , setqno]=useState(0)
    const [currentq, setcurrentq] = useState()
    const [a_value, seta_value] = useState()
    const [b_value, setb_value] = useState()
    const [c_value, setc_value] = useState()
    const [d_value, setd_value] = useState()
    const [s_value , setsvalue] = useState()
    const[score , setscore]=useState(0)
    useEffect(() => {
        setcurrentq(quizdata[qno].question)
        seta_value(quizdata[qno].a)
        setb_value(quizdata[qno].b)
        setc_value(quizdata[qno].c)
        setd_value(quizdata[qno].d)
    }, [])

    function gotonext()
    {
        if(qno<quizdata.length)
        {
            if(s_value==quizdata[qno].correct)
            {
                setscore(score+1)
            }
            
            setqno(qno+1)
            setcurrentq(quizdata[qno].question)
            seta_value(quizdata[qno].a)
            setb_value(quizdata[qno].b)
            setc_value(quizdata[qno].c)
            setd_value(quizdata[qno].d)
        }
        
        else{
            alert('Your score is '+score)
        }
        
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h1>React Quiz</h1>
                    <h1>{currentq}</h1>
                     
                     
                        <div onChange={(e)=>{setsvalue(e.target.value)}}>
                         <input type="radio" name='answer' value='a'/>a .{a_value} <br/>
                         <input type="radio" name='answer' value='b'/>b .{b_value} <br/>
                         <input type="radio" name='answer' value='c'/>c .{c_value} <br/>
                         <input type="radio" name='answer' value='d'/>d .{d_value} <br/>
                        </div>
                     
                     <button onClick={gotonext}>submit</button>
                       

                </div>
                </div>
            </div>
    )
}
