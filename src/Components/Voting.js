import React from 'react';
import { useState } from 'react';
import './Voting.css';

function Voting(props){
    const [count, setCount] = useState(0);
    const onVoteClick1= () => {
        alert("Are You SUre !!! You want vote To BJP")
        setCount(count+1);
    }
    const [count1, setCount1] = useState(0);
    const onVoteClick2= () => {
        alert("Are You SUre !!! You want vote To INC")
        setCount1(count1+1);
    }
    const [count2, setCount2] = useState(0);
    const onVoteClick3= () => {
        alert("Are You SUre !!! You want vote To AAP")
        setCount2(count2+1);
    }
    const [count3, setCount3] = useState(0);
    const onVoteClick4= () => {
        alert("Are You SUre !!! You want vote To SP ")
        setCount3(count3+1);
    }
    return(
        <div className='voting'>
            <div className='titile'>
                <h1>Voting For Demo Purpose</h1>
            </div>
            <div className='box'>
                <div className='card'>
                    <img src='https://toppng.com/uploads/preview/bjp-logo-png-bjp-logo-in-11562869869mp8vi612yw.png'/>
                    <h3>{props.name1}</h3>
                    <h4>{props.t1}</h4>
                    <p>{count}</p>
                    <button onClick={onVoteClick1}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png'/>
                    <h3>{props.name2}</h3>
                    <h4>{props.t2}</h4>
                    <p>{count1}</p>
                    <button onClick={onVoteClick2}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://m.media-amazon.com/images/I/71Ng4IC65-L._AC_UF1000,1000_QL80_.jpg'/>
                    <h3>{props.name3}</h3>
                    <h4>{props.t3}</h4>
                    <p>{count2}</p>
                    <button onClick={onVoteClick3}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://as1.ftcdn.net/v2/jpg/01/75/66/98/1000_F_175669813_8aeFF3yv0jPqja0oz45oDvZn4UJOW7hV.jpg'/>
                    <h3>{props.name4}</h3>
                    <h4>{props.t4}</h4>
                    <p>{count3}</p>
                    <button onClick={onVoteClick4}>Vote</button>
                </div>
            </div>
        </div>
    )
}
export default Voting;