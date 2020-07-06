//import react library
import React from 'react'

//import local css
import './BusinessList.css'

//import Business Component
import Business from '../Business/Business'

class BusinessList extends React.Component{
    render(){
        return (
        <div class="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
  
        </div>
        )
    }
}

export default BusinessList