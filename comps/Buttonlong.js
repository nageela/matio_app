import Image from 'next/image';
import React, { Component } from 'react';

class Buttonlong extends Component {

    constructor(props) {

        super(props);

        this.state = {
                clicked: false,
                intButtonId: null

        }
    }
    eventhandler(event) {
        if (event.target.id == "interview"){
            console.log(event.target.id);
            <Image 
                src = '/images/interview_branch.png'
                width = {400}
                height = {400}
            />
        }
        else if (event.target.id == "demo"){
            console.log(event.target.id);
            <Image 
                src = '/images/demo_branch.png'
                width = {400}
                height = {400}
            />
        }
        else if (event.target.id == "presentation"){
            console.log(event.target.id);
            <Image 
                src = '/images/presentation_branch.png'
                width = {400}
                height = {400}

            />
        }
        else if (event.target.id == "vlog"){
            console.log(event.target.id);
            <Image 
                src = '/images/vlog_branch.png'
                width = {400}
                height = {400}
            />
        }
    }
    
    render() {
        return (  
            <div className = "w-full xs:text-lg sm:text-xl md:text-2xl xs:mt-4 md:mt-5 lg:mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-2 sm:gap-4 md:gap-6 xl:gap-10 px-8 xxl:px-20"> 
                <button id = "interview" onClick = {this.eventhandler}>
                    <Image 
                        src = '/images/interview.png'
                        width = {100}
                        height = {100}
                    />

                    <div>Interview</div>
                </button>

                <button id= "demo" onClick = {this.eventhandler}>
                    <Image 
                        src = '/images/demo.png'
                        width = {100}
                        height = {100}
                    />
                    <div>Demo</div>
                </button>

                <button id = "presentation" onClick = {this.eventhandler}>
                    <Image 
                        src = '/images/presentation.png'
                        width = {100}
                        height = {100}
                    />
                    <div>Presentation</div>
                </button>

                <button id = "vlog" onClick = {this.eventhandler}> 
                    <Image 
                        src = '/images/vlog.png'
                        width = {100}
                        height = {100}
                    />
                    <div>Vlog</div>
                </button>
             </div>
        )}
}

export default Buttonlong;