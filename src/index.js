import React from 'react';
import ReactDOM from 'react-dom';
// import myIcon from './download.png';
import Header from './Header';
import Footer from './Footer';
import MainComponent from './MainComponent';


//  var React= require('react');
//  var ReactDOM= require('react-dom')







function Page() {
    return (
        <div>
            <Header />
            <MainComponent />
            <img src="./images/palpasa_cafe.jpg" alt="Palpasa"  />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));

    // const date = new Date();
    // const hours = new date.getHours()

    // let timeOfDay;

    // if(hours<12){
    //     timeOfDay="Morning";
    // }else if(hours>=12 && hours<17){
    //    timeOfDay="Afternoon"
    // }else{
    //     timeOfDay="night"
    // }
