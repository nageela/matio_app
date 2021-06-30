import Image from 'next/image';
import React, { useState, Component } from "react";

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
                buttonName: ['Interview', 'Presentation', 'Vlog', 'Demo'],
                path: [ '/images/interview.png' ,
                    '/images/presentation.png', 
                    '/images/vlog.png',
                    '/images/demo.png'],
                event:['/images/interview_branch.png' ,
                '/images/presentation_branch.png', 
                '/images/vlog_branch.png',
                '/images/demo_branch.png']
        }
      }
    eventhandler(name) {
            switch(name){
                case name == 'Interview':
                    <Image 
                        src = '/images/interview_branch.png'
                        width = {100}
                        height = {100}
                        />
                    
                case 'Presentation':
                    <Image 
                        src = '/images/presentation_branch.png'
                        width = {100}
                        height = {100}
                        />
                case 'Vlog':
                    <Image 
                        src =  '/images/vlog_branch.png'
                        width = {100}
                        height = {100}
                        />
                case 'Demo':
                    <Image 
                        src = '/images/demo_branch.png'
                        width = {100}
                        height = {100}
                        />
        }
    }
      render() {
        return (  
            <div class = "w-full xs:text-lg sm:text-xl md:text-2xl xs:mt-4 md:mt-5 lg:mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-2 sm:gap-4 md:gap-6 xl:gap-10 px-8 xxl:px-20"> 
                {this.state.buttonName.map((name, index) => (
                        <button onClick = {this.eventhandler(name)}> 
                            {<Image 
                                src = {this.state.path[index]}
                                width = {100}
                                height = {100}
                                />
                            }
                            <div>{name} </div> 
                        </button>
                ))}
             </div>
        )}
}

export default Buttons;