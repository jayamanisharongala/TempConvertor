import React,{Component} from'react'
 class TemparatureConverter extends Component{
     constructor(props){
         super(props)
         this.state={
            celsius:'',
            type:'',
            finalresult:''
         }
     }
    
     Celsius=(event)=>{
         this.setState({
             celsius:(event.target.value)
         })
     }
     Faranheit=(event)=>{
        this.setState({
        type:(event.target.value)
        })
    }
     
     conversion=(event)=>{
         const{celsius,type}=this.state;
         if(type==="cel")
         {
             this.setState({
                 finalresult:((celsius*9/5)+32)
             })
        }
         
         else
         {
             this.setState({
                 finalresult:((celsius -32)*5/9)

             })

         }
        
    }
    render(){
        const{celsius,type,finalresult}=this.state;
        return (
            <div>
                <h2 >TEMPARATURE CONVERTER</h2>
                <div>
                    <label >DEGREES:{"           "} </label>
                    <input value={celsius} onChange={this.Celsius} placeholder=" Enter Value"/>
                </div>
                <div>
                    <label >TYPE OF TEMPARATURE :</label>
                    <select id='select box' value={type} onChange={this.Faranheit} >
                        <option value="cel">Celsius Value</option>
                        <option value="far">Faranheit Value</option>
                    </select>
                </div>
                &nbsp;
                
                <div>
                    < button onClick={this.conversion }>CONVERT</button>
                </div>
                <div>
                <p >FinalResult:{finalresult}</p>
                </div>
            </div>
        )
    }
 }
 export default TemparatureConverter