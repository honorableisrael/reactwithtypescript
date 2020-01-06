import * as React from 'react';
import { userInfo } from 'os';

export interface Props {
    
}
export interface State {
    name?:string,
    information?:string,
    userInfo?:any
}
export interface UserInfo
    {
        name?:String,
        information:String
    }

class AddListForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            name:'',
            information:'',
            userInfo:[]
          };
    }
    onSendForm = ()=>{
        const { name,information } = this.state
        const newPerson = {
            name,
            information
        }
        if(this.state.userInfo){
            this.setState((state,props)=>({
                userInfo:[...this.state.userInfo,newPerson]
            }))    
        }
        console.log(this.state.userInfo)
    }
    onchange=(e:React.FormEvent<HTMLInputElement>)=>{
        this.setState({
           [e.currentTarget.name]:e.currentTarget.value,
        })
    }
    render() { 
    const { name,information,userInfo } = this.state
        console.log(userInfo)
        return (  
            <div>
                <p>Name:<input type="text" value={name} name="name"  onChange={this.onchange}/></p>
                <p>User details<input type="text" value={information} name="information" onChange={this.onchange} /></p>
                <input type="button" onClick={this.onSendForm} value="Submit"/>
                <div>
                    {
                    userInfo.map((item:UserInfo)=>(
                    <div key={Math.random()}>
                    <div>Firstname : {item.name} </div>
                    <div>Other Information : {item.information}</div>
                    </div>
                    ))
                    }
                    </div>
            </div>
        );
    }
}
 
export default AddListForm;