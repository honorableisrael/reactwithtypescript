import * as React from 'react';
export interface Props {
    
}
 
export interface State {
    name?:string,
    information?:string,
    userInfo?:Array<any>
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
    onchange=(e:React.FormEvent<HTMLInputElement>)=>{
        this.setState({
           [e.currentTarget.name]:e.currentTarget.value,
        })
    }
    render() { 
    const { name,information } = this.state
        console.log(information)
        return (  
            <div>
                Name:<input type="text" value={name} name="name"  onChange={this.onchange}/>
                <p><input type="text" value={information} name="information" onChange={this.onchange} /></p>
                <p></p>
            </div>
        );
    }
}
 
export default AddListForm;