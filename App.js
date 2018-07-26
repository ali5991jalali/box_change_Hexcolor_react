import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import validator from 'validator';


class App extends React.Component{



state={

color:'',
fixed_color:'white',
errors:[],
valid:false

}



changeval(e){

let target=e.target;
let name=target.name;
let value=target.type==='checkbox' ? target.checked:target.value;

this.setState({[name]:value})

}


btnclick(){

let {color}=this.state;
let errors=[];

if(validator.isEmpty(color)){

    errors.push('color box is empty')

}else if(!validator.isHexColor(color)){

    errors.push('color is not in correct format')

}


this.setState({errors});


if(errors.length>0){
    
    this.setState({valid:false,fixed_color:'white'})
}else{

    this.setState({valid:true,fixed_color:color})
}


}


render(){


   

return (<div className="container" style={{paddingTop:'100px'}}>

<div className="row">
<div className="col-lg-6 col-md-6" style={{height:'160px',border:'1px solid black',background:`${this.state.fixed_color}`}}></div>

<div className="col-lg-6 col-md-6" style={{height:'160px',paddingTop:'60px'}}>

<div className="form-group">
<input type="text" name="color" className="form-control" value={this.state.color} onChange={this.changeval.bind(this)} placeholder={this.props.color}/>
</div>

</div>
</div>

<div className="row" style={{marginTop:'70px',textAlign:'center',paddingLeft:'50%'}}>

<button type="button" className="btn btn-primary" onClick={this.btnclick.bind(this)}>show</button>

</div>


<ul>

{this.state.errors.length>0 ? this.state.errors.map((error,index)=><li key={index} style={{color:'red'}}>{error}</li>) :null}

</ul>

</div>)



}



}





App.defaultProps={color:"please enter color"}



export default App;