import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      n:'',
      p:'',
      k:'',
      order:false,
      remis:false,
      resultata:'',
      type:'',
      avec:'',
      isK: false,
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

  factorial=(num) =>{
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  AddK =()=>{

  }

  onSubmitForm() {
    console.log(this.state)
    const y =this.state.n-this.state.p;
    const y1 = (Number(this.state.n)+Number(this.state.p))-1;
    console.log(y1);
    var resultat;
    var remi;
    var typ;
    if(this.state.order===true && this.state.remis===true && y>0 ){
      resultat=(Math.pow(this.state.n,this.state.p))
      typ='Arrangement'; remi ="avec remis "}
    else if(this.state.order===true && this.state.remis===false && y>0 ){
      resultat=(this.factorial(this.state.n)/this.factorial(y)) ;typ='Arrangement' ;remi ="sans remis "}
    else if(this.state.order===true && this.state.remis===false && y===0 ){
      resultat=(this.factorial(this.state.n)) ;typ='Permutation' ;remi ="sans remis "}
      else if(this.state.order===true && this.state.remis===true && y===0){
           this.setState({isK:!this.state.isK});
           if(this.state.k>this.state.n){resultat=" k> n c'est imposible"}else{
           resultat=(this.factorial(this.state.n)/this.factorial(this.state.k)) ;typ='Permutation' ;remi ="avec remis "
      }this.setState({k:''})}
    else if(this.state.order===false && this.state.remis===false && y>0 ){
       resultat=(this.factorial(this.state.n)/(this.factorial(this.state.p)*this.factorial(y))) ;typ='Combinaison' ;remi ="sans remis "}
    else if(this.state.order===false && this.state.remis===true && y>0 ){
       resultat=this.factorial(y1)/(this.factorial(this.state.p)*this.factorial((this.state.n)-1));typ='Combinaison' ;remi ="avec remis "}
      else{resultat='imposible de calcule' ; typ = 'error'}
       this.setState({resultata:resultat ,type:typ ,avec:remi})
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
        <div>{this.state.isK? 
        <label>Dans le cas où il existerait plusieurs répétitions k d’un même objet parmi les n objets
            <input
              className="cb"
              name="k"
              placeholder="la valeur de k"
              type="number"
              value={this.state.k}
              onChange={this.onInputchange}
            />
          </label> : null}
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
          <p>le type de calcule est : {this.state.type} {this.state.avec} </p>
        </div>
        <div>
            <p>le nombre de possibilité:  {this.state.resultata}</p>
        </div>
      </div>
    );
  }
}

export default SimpleForm;
