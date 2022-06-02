import  React, { Component } from  'react';

import  AutosService  from  './AutosService';

const  autosService  =  new  AutosService();

class  AutosList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            autos: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }


    componentDidMount() {
        var  self  =  this;
        autosService.getAutos().then(function (result) {
            console.log( result )
            self.setState({ autos:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        autosService.deleteAuto({pk :  pk}).then(()=>{
            var  newArr  =  self.state.autos.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({autos:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        autosService.getAutosByURL(this.state.nextPageURL).then((result) => {
            self.setState({ autos:  result.data, nextPageURL:  result.nextlink})
        });
    }

    render() {

        return (
        <div  className="content">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Mark</th>
                    <th>Year</th>
                    <th>Mileage</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.autos.map( c  =>
                    <tr  key={c.pk}>
                        <td>{c.pk}  </td>
                        <td>{c.title}</td>
                        <td>{c.mark}</td>
                        <td>{c.year}</td>
                        <td>{c.mileage}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                        <a  href={"/autos/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
    }
}
export  default  AutosList;
