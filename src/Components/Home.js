import React from 'react';
import {Table,Container,Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const Home = props => {
    const promptList=["Student Body Elections IITR 2022","CR Elections 2022 ME"];
    return (
        <Container>
            <Table style={{margin:"5vh"}} striped bordered hover variant ="dark">
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>List</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>{
                    promptList.map((el,index)=>{
                     return   (<tr key={index}>
                            <td>
                               {index+1} 
                            </td>
                            <td>{el}</td>
                            <td>
                                {" "}
                            <Button onClick={()=>props.changeCandidates(el)}>Vote Now</Button>
                            </td>
                        </tr>);
                    })
                    
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;