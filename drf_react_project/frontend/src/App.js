import  { React } from  'react';
import { BrowserRouter, Route, Routes } from  'react-router-dom'
import  AutosList  from  './Auto/AutosList'
import  AutoCreateUpdate  from  './Auto/AutoCreateUpdate'
import  './App.css';

const  BaseLayout  = () => (
    <div  className="container-fluid">
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
            <a  className="navbar-brand"  href=".">Django React Demo</a>
            <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
            <div  className="navbar-nav">
                <a  className="nav-item nav-link"  href="/">AUTOS</a>
                <a  className="nav-item nav-link"  href="/auto">CREATE AUTO</a>
            </div>
        </div>
        </nav>
        <div  className="content">
            <Routes>
                <Route  path="/"  exact  element={<AutosList />} />
                <Route  path="/auto/:pk"  element={<AutoCreateUpdate />}  />
                <Route  path="/auto/"  exact  element={<AutoCreateUpdate />}  />
            </Routes>
        </div>
    </div>
)


function  App() {

//    const makeAPICall = async (url) => {
//        try {
//          const response = await fetch(url, {mode:'cors'});
//          const data = await response.json();
//          const result = await data.results;
//          //console.log( result )
//          return data;
//        }
//        catch (e) {
//          console.log(e)
//        }
//    }
//    useEffect(() => {
//        makeAPICall('http://localhost:8000/api/v1/cars/');
//    }, [])

    return (
    <BrowserRouter>
        <BaseLayout/>
    </BrowserRouter>
    );

}
export  default  App;