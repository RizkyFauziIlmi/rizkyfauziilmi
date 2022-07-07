import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCss3, FaJava, FaJs, FaPython  } from 'react-icons/fa'
import { Heading  } from '@chakra-ui/react';
import { SiCplusplus, SiHtml5, SiPhp } from 'react-icons/si';
import ClampLines from 'react-clamp-lines'

export default function Skills() {
    return(
        <React.Fragment>
            <VerticalTimeline lineColor='#D6EFED'>
                <VerticalTimelineElement
                    contentStyle={{ background: '#FAEA48', color: '#3330E4' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FAEA48' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black' ,background: '#3330E4', color: '#FAEA48' }}
                    icon={<FaPython />}
                >
                    <Heading as='h3' fontSize='lg'>Python</Heading>
                    <Heading as='h6' fontSize={'sm'}>Learn the Basics of Programming and Try to be Familiar with the Syntax</Heading>
                    <ClampLines
                        text={"I chose python programming language as my first language because according to my research python has a syntax that is friendly for beginners. I once made how the solar system works by implementing physics formulas and using libraries to render graphs."}
                        lines={1.5}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#EB4747', color: '#ABC9FF' }}
                    contentArrowStyle={{ borderRight: '7px solid  #EB4747' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#EB4747', color: '#D6EFED' }}
                    icon={<FaJava />}
                >
                    <Heading as='h3' fontSize='lg'>Java</Heading>
                    <Heading as='h6' fontSize={'sm'}>Explore the Concept of Classes and Objects</Heading>
                    <ClampLines
                        text={"When I first learned java I really experienced something abstract different from python where in java everything is based on classes and objects, it really made it easier for me to understand the concept of MVC when learning web development."}
                        lines={1.5}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#242F9B', color: '#DBDFFD' }}
                    contentArrowStyle={{ borderRight: '7px solid  #242F9B' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#242F9B', color: '#DBDFFD' }}
                    icon={<SiCplusplus />}
                >
                    <Heading as='h3' fontSize='lg'>C++</Heading>
                    <Heading as='h6' fontSize={'sm'}>Learn Algorithms to Solve a Problem</Heading>                    
                    <ClampLines
                        text={"I once made a system for booking hotels, ordering menus, and even imitating the ATM system even though it was only based on the terminal, not the GUI."}
                        lines={1.8}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#F15412', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #F15412' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#F15412', color: '#EEEEEE' }}
                    icon={<SiHtml5 />}
                >
                    <Heading as='h3' fontSize='lg'>HTML</Heading>
                    <Heading as='h6' fontSize={'sm'}>Getting Interested in Web Development</Heading>
                    <ClampLines
                        text={"I started to learn how websites are made and how they work, I learned a lot of html elements and how to use them properly."}
                        lines={1.7}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#47B5FF', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #47B5FF' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#47B5FF', color: '#EEEEEE' }}
                    icon={<FaCss3 />}
                >
                    <Heading as='h3' fontSize='lg'>CSS</Heading>
                    <Heading as='h6' fontSize={'sm'}>Learn How to Decorate the Page to Make it More Attractive</Heading>
                    <ClampLines
                        text={"I learned a lot of css properties, and it became more interesting when I learned about the concept of flex and grid which I think is very powerful if you understand how to use them. Here I also learn some css frameworks such as bootstrap, tailwind. I also studied CSS preprocessor like SASS to make my css syntax more effective and orderly."}
                        lines={2}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#FFC107', color: '#343A40' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFC107' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#FFC107', color: '#fff' }}
                    icon={<FaJs />}
                >
                    <Heading as='h3' fontSize='lg'>Javascript</Heading>
                    <Heading as='h6' fontSize={'sm'}>Make the Page More Interactive, and Get to Know Something Very Powerful</Heading>
                    <ClampLines
                        text={"I learned javascript from the basics, it's not too difficult to learn because I already know several programming languages ​​such as Python, Java, and C++. Continuing to learn to manipulate the DOM with Javascript and try frameworks like JQuery to make it easier for me to manipulate the DOM. and continue to get acquainted with advanced javascript and learn how to consume APIs. After I studied further, it turns out that Javascript is not limited to the scope of the client but can also be on the server side. I started learning node JS, Express, Up to some Front end Framework like React. which has the impression of all in one."}
                        lines={2.5}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: '#336699', color: '#333333' }}
                    contentArrowStyle={{ borderRight: '7px solid  #336699' }}
                    iconStyle={{ boxShadow: '2px 2px 2px black', background: '#336699', color: '#333333' }}
                    icon={<SiPhp />}
                >
                    <Heading as='h3' fontSize='lg'>PHP</Heading>
                    <Heading as='h6' fontSize={'sm'}>Know More About Back End</Heading>
                    <ClampLines
                        text={"I learned more about the backend by learning the php programming language, this language is very simple because we can write html elements directly in the php file. I learned how to CRUD and make back end features like login system. Next, I learned the concept of web MVC, which is a method for creating applications by separating the code into three parts, namely Model, View, and Controller. and continue to learn the framework like Laravel. but I prefer to use Javascript compared to php as the front end or backend."}
                        lines={2}
                        ellipsis="..."
                        moreText="Read more..."
                        lessText="Read less..."
                        innerElement="p"
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </React.Fragment>
    )
}