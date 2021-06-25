import Image from 'next/image';
import Link from 'next/Link';
import React, { useState, Component } from "react";
import { motion } from "framer-motion";
import EditorShowChart from 'material-ui/svg-icons/editor/show-chart';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
        //   clicked : false
            buttons: [
                {
                    id: 1,
                    name: 'Interview',
                    path : '/images/interview.png' 
                },
                {
                    id: 2,
                    name: 'Presentation',
                    path: '/images/presentation.png' 
                },
                {
                    id: 3,
                    name: 'Vlog',
                    path: '/images/vlog.png'
                },
                {
                    id: 4,
                    name: 'Demo',
                    path: '/images/demo.png' 
                }
            ]
        };
      }

      clickHandler() {
        this.setState({ clicked: true });
        <Image 
                    src = '/images/branch.png'
                    alt = "branch"
                    width = {300}
                    height = {300}
                    />
        console.log("clicked")
        };
        
    render() {
        return (  
            // <>
            
        
          <div class = "w-full xs:text-lg sm:text-xl md:text-2xl xs:mt-4 md:mt-5 lg:mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-2 sm:gap-4 md:gap-6 xl:gap-10 px-8 xxl:px-20"> 
            
            {this.buttons.map((b) => { 
            {/* return */}
                <button 
                    // value = {b.id}
                    // className='button1' 
                    // onClick={() => this.handleClick(1)}
                    > 
                    
                        <Image 
                            src = {b.path}
                            alt = {b.name}
                            width = {100}
                            height = {100}
                        />
                        {b.name}
                </button>
                
            })}
                

                {/* <button onClick={this.clicked ? this.clickHandler : this.clicked = false}>
                    <Image 
                        src= '/images/vlog.png'
                        alt = "vlog "
                        width = {100} 
                        height = {100} 
                    />
                  
                    <div> Vlog </div>
                </button>
                <button>
                    <Image 
                        src='/images/interview.png' 
                        alt = "interview "
                        width = {100} 
                        height = {100} 
                    />
                    <div> Interview </div>
                    <motion.button
                        whileHover={
                        <Image src = '/images/branch.png'/> 
                        }
                        whileTap={{ scale: 0.9 }}
                    />
                </button>
    
                <button>
                    <Image 
                        src='/images/presentation.png' 
                        alt = "presentation "
                        width = {100} 
                        height = {100} 
                    />
                    
                    <div> Presentation </div>
                </button>
    
                <button>
                    <Image 
                        src='/images/demo.png' 
                        alt = "demo "
                        width = {100} 
                        height = {100} 
                    />
                    <div> Demo</div>
                </button>*/}
         </div> 
        // {/* // </> */}
        );
    }
    }

    
 
export default Button;