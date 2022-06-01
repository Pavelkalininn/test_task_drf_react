import  React, { Component } from  'react';

import  AutosService  from  './AutosService';
const  autosService  =  new  AutosService();

class  AutoCreateUpdate  extends  Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setTextInputRef = element => {      this.textInput = element;    };
	}



	componentDidMount(){
	const { match: { params } } =  this.props;
	if(params  &&  params.pk)
        {
            autosService.getAuto(params.pk).then((c)=>{
                this.refs.title.value  =  c.title;
                this.refs.mark.value  =  c.mark;
                this.refs.year.value  =  c.year;
                this.refs.mileage.value  =  c.mileage;
            })
        }
    }

	handleCreate(){
	autosService.createAuto(
		{
		"title":  this.refs.title.value,
		"mark":  this.refs.mark.value,
		"year":  this.refs.year.value,
		"mileage":  this.refs.mileage.value
		}).then((result)=>{
				alert("Auto created!");
		}).catch(()=>{
				alert('There was an error! Please re-check your form.');
		});
    }

    handleUpdate(pk){
        autosService.updateAuto(
            {
            "pk":  pk,
            "title":  this.refs.title.value,
            "mark":  this.refs.mark.value,
            "year":  this.refs.year.value,
            "mileage":  this.refs.mileage.value
            }
        ).then((result)=>{

            alert("Auto updated!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }

	handleSubmit(event) {
	const { match: { params } } =  this.props;
	if(params  &&  params.pk){
		this.handleUpdate(params.pk);
	}
	else
	{
		this.handleCreate();
	}
	event.preventDefault();
    }

	render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Title:</label>
              <input className="form-control" type="text" ref={this.setTextInputRef} />

            <label>
              Mark:</label>
              <input className="form-control" type="text" ref={this.setTextInputRef}/>

            <label>
              Year:</label>
              <input className="form-control" type="text" ref={this.setTextInputRef} />

            <label>
              Mileage:</label>
              <input className="form-control" type="text" ref={this.setTextInputRef} />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
  }

}
export default AutoCreateUpdate;