import React, { Component } from 'react';
import Image from 'next/image';

export default class Eventhandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
                event:[
                    '/images/interview_branch.png' ,
                    '/images/presentation_branch.png', 
                    '/images/vlog_branch.png',
                    '/images/demo_branch.png'
                ]
        }
      }
      handle(name){
        if (name == "Interview"){
            return (  
              <Image 
                  src = '/images/interview_branch.png'
                  width = {100}
                  height = {100}
                  />
            )
          }
          else if(name == "Presentation"){
              return (
                  <Image 
                      src = '/images/presentation_branch.png'
                      width = {100}
                      height = {100}
                  />
              )
          }
          else if(name == "Vlog"){
              return (
                  <Image 
                      src =  '/images/vlog_branch.png'
                      width = {100}
                      height = {100}
                  />
              )
          }
          else if(name == 'Demo') {
              return (
                  <Image 
                      src = '/images/demo_branch.png'
                      width = {100}
                      height = {100}
                  />
              )
          }
  }
      
    render() {
        return (

                {handle}
               
        )
    }
}
