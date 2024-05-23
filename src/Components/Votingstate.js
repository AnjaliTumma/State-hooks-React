import React from "react";
import { Component } from "react";
import './Votingstate.css';
import { render } from "@testing-library/react";

class Votingstate extends Component{
    constructor(props){
        super(props)
        this.data=props
        this.state={
            count:0,
            count1:0,
            count2:0,
            count3:0
        }
    }
    onVoteClick1(){
        alert("Are You SUre !!! You want vote To JD")
        this.setState({count:this.state.count+1})
    }
    onVoteClick2(){
        alert("Are You SUre !!! You want vote To BSP")
        this.setState({count1:this.state.count1+1})
    }
    onVoteClick3(){
        alert("Are You SUre !!! You want vote To SWA")
        this.setState({count2:this.state.count2+1})
    }
    onVoteClick4(){
        alert("Are You SUre !!! You want vote To SHS")
        this.setState({count3:this.state.count3+1})
    }

render(){
    return(
        <div className='voting'>
            <div className='titile'>
                <h1>Voting For Demo Purpose</h1>
            </div>
            <div className='box'>
                <div className='card'>
                    <img src='https://static.vecteezy.com/system/resources/previews/011/619/898/original/jd-logo-jd-design-blue-and-red-jd-letter-jd-letter-logo-design-initial-letter-jd-linked-circle-uppercase-monogram-logo-vector.jpg'/>
                    <h3>{this.data.name1}</h3>
                    <h4>{this.data.t1}</h4>
                    <p>{this.state.count}</p>
                    <button onClick={() => this.onVoteClick1()}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi9ivvHxXchi1t5XnR7nHUpIsS-h0zYUiSRStdWVkiuXcKggZW8zcY5W0ED5f48Xa9ns&usqp=CAU'/>
                    <h3>{this.data.name2}</h3>
                    <h4>{this.data.t2}</h4>
                    <p>{this.state.count1}</p>
                    <button onClick={() => this.onVoteClick2()}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/e/e9/Logo_of_the_Rastriya_Swatantra_Party.svg'/>
                    <h3>{this.data.name3}</h3>
                    <h4>{this.data.t3}</h4>
                    <p>{this.state.count2}</p>
                    <button  onClick={() => this.onVoteClick3()}>Vote</button>
                </div>
                <div className='card'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/800px-Logo_of_Shiv_Sena.svg.png'/>
                    <h3>{this.data.name4}</h3>
                    <h4>{this.data.t4}</h4>
                    <p>{this.state.count3}</p>
                    <button  onClick={() => this.onVoteClick4()}>Vote</button>
                </div>
            </div>
        </div>
    );
}
}
export default Votingstate;