import Image from 'next/image';
import React, { Component } from 'react';
import Eventhandler from '../comps/Eventhandler';

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
                '/images/demo_branch.png'],
                clicked: false
            }
        
    }
    
        eventhandler(event) {
        
            // {this.state.event.map((e, index) => (
                
            //     i == index ?
            //         <Image 
            //             src = {this.state.event[index]}
            //             width = {100}
            //             height = {100}
            //         />
            //     :
            //         null
            // ))}
            console.log(event.target.id);
        }
    
       handleClick = () => {
            this.setState({ clicked: true} );
        }
        
      render() {
          
        return (  
            <div class = "w-full xs:text-lg sm:text-xl md:text-2xl xs:mt-4 md:mt-5 lg:mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-2 sm:gap-4 md:gap-6 xl:gap-10 px-8 xxl:px-20"> 
                {this.state.buttonName.map((name, index) => (
                        <button id = {name} onClick = {this.eventhandler}>
                            {/* {this.state.clicked ? this.eventhandler(index) : null} */}
                                {<Image 
                                src = {this.state.path[index]}
                                width = {100}
                                height = {100}
                                />}
                            <div> {name} </div> 
                        </button>
                ))}
             </div>
        )}
}

export default Buttons;