import React, { Component } from 'react';
import { Button, Card, Carousel, Menu, Icon, Row, Col} from 'antd';

import '../CSS/main.css';

export default class MainApp extends Component {
    constructor(){
        super();
        this.state = {
            current: '1'
        }
    }
    handleClick(e){
        console.log('click ', e);
        this.setState({
          current: e.key.toString(),
        });
      }
    render(){
        return(
            <div>
                <Menu
                theme='dark'
                onClick={this.handleClick.bind(this)}
                className='navBar'
                defaultOpenKeys={['1']}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{position: 'fixed', top: 0, right: 0, left: 0, zIndex: 10}}
                >
                    <Menu.Item key="5" style={{float:'right'}}>Contact</Menu.Item>
                    <Menu.Item key="4" style={{float:'right'}}>Speakers</Menu.Item>
                    <Menu.Item key="3" style={{float:'right'}}>Tickets</Menu.Item>
                    <Menu.Item key="2" style={{float:'right'}}>TEDxMMU '18</Menu.Item>
                    <Menu.Item key="1" style={{float:'right'}}>Home</Menu.Item>
                </Menu>
                <img src = "./src/Assets/DSC_0605.jpg" style={{width: '100%', height: '100%', backgroundSize: "cover", 
                            backgroundPosition:'center', position: 'fixed', display: 'block', top: 0, left: 0, zIndex: -1}}/>
                
                {/* <div style={{backgroundColor: "white", height: '60vw', position: 'relative', top: '40vw'}}> */}
                <div style={{position: 'relative', height: '60vw', top: '40vw', background: '#111111', padding: '50px 30px 30px 50px'}}>
                <Row style={{marginTop: '5vw'}}>
                <h1 style={{margin: 'auto', marginBottom: '6vw', color:'#fff'}}>About the Event</h1>
                    <Col span={12}>
                    {/* <div style={{height: '470px', width: '650px', backgroundColor:'#364d79', padding: '25px'}}> */}
                    <Carousel autoplay effect="fade">
                        <div><img src="./src/Assets/TEDxMMU1.jpg" style={{margin: 'auto', width: 'auto', height: '400px', zIndex: '2'}} /></div>
                        <div><img src="./src/Assets/TEDxMMU2.jpg" style={{margin: 'auto', width: 'auto', height: '400px', zIndex: '2'}} /></div>
                        <div><img src="./src/Assets/TEDxMMU3.jpg" style={{margin: 'auto', width: 'auto', height: '400px', zIndex: '2'}} /></div>
                    </Carousel>
                    {/* </div> */}
                    </Col>
                    <Col span={12}>
                        <h1 style={{color: '#fff', marginTop: '30px'}}>TEDxMMU</h1>
                        <p style={{color: '#fff', fontFamily: 'serif', fontSize: '18px', margin: '30px'}}>TEDxMMU is an evening event, with an audience of about 100. 
                        Our goal is to bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration 
                        and wonder – and provoke conversations that matter.
                        <br/>TEDxMMU 2017 was held in MMU cyberjaya. It was very awesome. 
                        It attracted students from all over the region, to share ideas and dive in conversations
                        that bring about positive impact on society. </p>
                    </Col>
                </Row>
                </div>
                <div style={{position: 'relative', height: '60vw', top: '40vw', background: '#fff', padding: '50px 30px 30px 50px'}}>
                    <h1 style={{color: '#9c0331'}}>TEDxMMU 2018</h1>
                </div>
             </div>
        );
    }
}