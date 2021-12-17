import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      n:'',
      p:'',
      order:false,
      remis:false,
      resultata:0
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  toggleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  factorial=(x) =>{
    if (x === 0) {
        return 1;
    }
    else {
        return x * this.factorial(x - 1);
    }
}
  onSubmitForm() {
    console.log(this.state)
    const y =this.state.n-this.state.p;
    const y1 = (Number(this.state.n)+Number(this.state.p))-1;
    console.log(y1);
    var resultat;
    if(this.state.order===false && this.state.remis===true && y>0 ){
      resultat=(Math.pow(this.state.n,this.state.p))}
    else if(this.state.order===false && this.state.remis===false && y>0 ){
      resultat=(this.factorial(this.state.n)/this.factorial(y))}
    else if(this.state.order===false && this.state.remis===false && y===0 ){
      resultat=(this.factorial(this.state.n))}
    else if(this.state.order===true && this.state.remis===false && y>0 ){
       resultat=(this.factorial(this.state.n)/(this.factorial(this.state.p)*this.factorial(y))) }
    else if(this.state.order===true && this.state.remis===true && y>0 ){
       resultat=this.factorial(y1)/(this.factorial(this.state.p)*this.factorial((this.state.n)-1))}
      else{resultat='pas possilble '}
       this.setState({resultata:resultat})
    }
   render() {
    return (
      <div className="test">
        <div>
          <label>
            <input
              className="cb"
              name="n"
              type="number"
              placeholder="la valeur de n"
              value={this.state.n}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className="cb"
              name="p"
              placeholder="la valeur de p"
              type="number"
              value={this.state.p}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
        <input className="cb" name='order'value={this.state.order} defaultChecked={this.state.ordre} type='checkbox' onClick={this.toggleChange}/> <span>l'ordre est impotant?</span>
        </div><div>
        <input className="cb" name='remis'value={this.state.remis} defaultChecked={this.state.remis} type='checkbox' onClick={this.toggleChange}/> <span>la remis est permis?</span>
        </div>
        <div>
            <button className="cb" onClick={this.onSubmitForm}>calcuer</button>
        </div>
        <div>
            <p>le nombre de possibilité:  {this.state.resultata}</p>
        </div>
      </div>
    );
  }
}

export default SimpleForm;
