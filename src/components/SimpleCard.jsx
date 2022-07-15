import React, { Component } from 'react'
import pic from '../irene.jpg'
import Description from  './Description'
import Title from './Title'
import Image from './Image'


function SimpleCard (){
    return(
      <div> 
        <Card/>
      </div>
    )
}

export default SimpleCard;

class Card extends Component{
  render(){
    return(
      <div className='simplecard'>
        <Image pic={pic}/>
        <Title name="Irene Ockrah Anyim"/>
        <Description msg="Software Developer Trainee//MA Peace,Security and Intelligence//MPhil in Leadership//Certificate in Public Policy Management//YALI Alumna//BSc. Sports and Exercise Science"/>
      </div>
    );
  }
}
