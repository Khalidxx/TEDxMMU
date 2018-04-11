import React, { Component } from 'react';
import ScrollableAnchor, { goToAnchor, configureAnchors } from 'react-scrollable-anchor'
import { Avatar, Button, Card, Carousel, Divider, Layout, Menu, Icon, Tooltip, Row, Col} from 'antd';
const { Header, Content, Footer } = Layout

import Clock from './clock';

import '../CSS/main.css';

export default class MainApp extends Component {
    constructor(){
        super();
        this.state = {
            current: '1'
        }
    }
    handleClick(e){
        goToAnchor(e.key);
        console.log('click ', e);
      }
    scroll(position){
        goToAnchor(position);
    }
    render(){
        configureAnchors({offset: -60, scrollDuration: 500});
        return(
            <Layout className='layout'>      
                <Menu
                theme='light'
                onClick={this.handleClick.bind(this)}
                className='navBar'
                defaultOpenKeys={['1']}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{position: 'fixed', top: 0, right: 0, left: 0, zIndex: 10}}
                >
                    <Menu.Item key="5" style={{float:'right'}}>Partners</Menu.Item>
                    <Menu.Item key="4" style={{float:'right'}}>Tickets</Menu.Item>
                    <Menu.Item key="3" style={{float:'right'}}>Speakers</Menu.Item>
                    <Menu.Item key="2" style={{float:'right'}}>TEDxMMU '18</Menu.Item>
                    <Menu.Item key="1" style={{float:'right'}}>Home</Menu.Item>
                </Menu>
                <Content>
                <img src = "./src/Assets/DSC_0605.jpg" style={{width: '100%', height: '100%', backgroundSize: "cover", 
                            backgroundPosition:'center', position: 'fixed', display: 'block', top: 0, left: 0, zIndex: 0}}/>
                
                <Col span={12}><Button type="primary" style={{position: 'relative', top: '33vw', marginRight: '10px', float:'right'}} onClick={() => window.location = "https://goo.gl/7R2oHe"}>Get Tickets</Button></Col>
                <Col span={12}><Button style={{position: 'relative', top: '33vw', marginLeft: '10px', float:'left'}} onClick={() => window.location = "https://www.facebook.com/TEDxMMU/"}>Share</Button></Col>

                {/* <div style={{backgroundColor: "white", height: '60vw', position: 'relative', top: '40vw'}}> */}
                <ScrollableAnchor id={"1"}>
                <div style={{position:'relative', height: '900px', top: '40vw', background: '#111111', padding: '50px 30px 30px 50px'}}>
                <Row style={{marginTop: '2vw'}}>
                <h1 style={{margin: 'auto', marginBottom: '2vw', color:'#fff'}}>About the Event</h1>
                <Divider />
                    <Col span={12} style={{marginTop: '1vw'}}>
                    {/* <div style={{height: '470px', width: '650px', backgroundColor:'#364d79', padding: '25px'}}> */}
                    <Carousel autoplay effect="fade">
                        <div><img src="./src/Assets/TEDxMMU1.jpg" style={{margin: 'auto', width: 'auto', height: '30vw', zIndex: '2'}} /></div>
                        <div><img src="./src/Assets/TEDxMMU2.jpg" style={{margin: 'auto', width: 'auto', height: '30vw', zIndex: '2'}} /></div>
                        <div><img src="./src/Assets/TEDxMMU3.jpg" style={{margin: 'auto', width: 'auto', height: '30vw', zIndex: '2'}} /></div>
                    </Carousel>
                    {/* </div> */}
                    </Col>
                    <Col span={12}>
                        <h1 style={{color: '#fff', marginTop: '1vw'}}>TEDxMMU</h1>
                        <p style={{color: '#fff', fontFamily: 'serif', fontSize: '18px', margin: '5vw'}}>TEDxMMU is an evening event, with an audience of about 100. 
                        Our goal is to bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration 
                        and wonder – and provoke conversations that matter.
                        <br/>TEDxMMU 2017 was held in MMU cyberjaya. It was very awesome. 
                        It attracted students from all over the region, to share ideas and dive in conversations
                        that bring about positive impact on society. </p>
                    </Col>
                </Row>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"2"}>
                <div style={{position: 'relative', top: '40vw', height: '900px', background: '#fff', padding: '50px 30px 30px 50px'}}>
                    <h1 style={{color: '#9c0331', margin: '20px'}}>TEDxMMU 2018</h1>
                    <Divider>When</Divider>
                    <Row style={{alignContent:'center'}}>
                    <Col span={12}><Icon type="calendar" style={{fontSize: '80px', margin: 'auto', display:'block'}}/></Col>
                    <Col span={12}><h1 style={{fontSize: '30px', float:'left', marginLeft:'30px', marginTop: '20px'}}>20th April 2018</h1></Col>
                    </Row>
                    <Divider>Where</Divider>
                    <Row style={{alignContent:'center'}}>
                    <Col span={12}><Icon type="environment-o" style={{fontSize: '80px', margin: 'auto', display:'block'}}/></Col>
                    <Col span={12}><h1 style={{fontSize: '20px', float:'left', display:'block', marginLeft:'30px', marginTop: '20px'}}>Multimedia University - Cyberjaya</h1></Col>
                    </Row>
                    <Divider>Countdown</Divider>
                    <Row style={{alignContent:'center'}}>
                        <Clock deadline={Date.parse(new Date(2018, 3, 20, 17, 0, 0))}/>
                    </Row>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"3"}>
                <div style={{position: 'relative', top: '40vw', height: '2000px', background: '#000', padding: '50px 30px 30px 50px'}}>
                    <h1 style={{color: '#fff', marginTop: '1vw'}}>Speakers</h1>
                    <Row> {/* First row for the first two speakers */}
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/PraveenWaldakar.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Praveen Waldakar</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Praveen is a Co-founder and CEO of Techizer Tech Solution Pvt. Ltd. (www.techizerindia.com), a highly
                                        specialized healthcare digital consulting firm, providing strategic technological solutions to more than 75
                                        pharmaceutical companies in Asia.As a business storyteller he loves to convert real life experiences and observations into stories. Aside
                                        from having delivered 2 TEDx talks, he loves to explore life as a solo traveller and mountaineer (A-GRADE HMI certified mountaineer). 
                                        As a storyteller he believes whenever we share a story there isalways someone sitting in the audience who wanted that story more than oxygen.
                                        </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/UsamahZaid.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Usamah Zaid</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Usamah Zaid Yasin is a malaysian animator. He is the founder and managing director of WAU
                                        Animation and is the creator and director of the animated series Ejen Ali. Prior to starting Wau, Zaid was
                                        also a founding member of Les’ Copaque Productions in 2005. The company is behind the
                                        successful Upin dan Ipin series and the movie, Geng: Pengembaraan Bermula.
                                        Zaid says he stumbled into animation by chance as he was unsure of what he wanted to do after Form
                                        Five. “Animation is a labour of love. It is not going to get you rich or famous, so what keeps you going is
                                        your passion for creating characters and showing your artwork to the world, then seeing the reaction of
                                        your audience,” he said.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row> {/* Second row */}
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/PraveenWaldakar.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Praveen Waldakar</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Praveen is a Co-founder and CEO of Techizer Tech Solution Pvt. Ltd. (www.techizerindia.com), a highly
                                        specialized healthcare digital consulting firm, providing strategic technological solutions to more than 75
                                        pharmaceutical companies in Asia.As a business storyteller he loves to convert real life experiences and observations into stories. Aside
                                        from having delivered 2 TEDx talks, he loves to explore life as a solo traveller and mountaineer (A-GRADE HMI certified mountaineer). 
                                        As a storyteller he believes whenever we share a story there isalways someone sitting in the audience who wanted that story more than oxygen.
                                        </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/UsamahZaid.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Usamah Zaid</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Usamah Zaid Yasin is a malaysian animator. He is the founder and managing director of WAU
                                        Animation and is the creator and director of the animated series Ejen Ali. Prior to starting Wau, Zaid was
                                        also a founding member of Les’ Copaque Productions in 2005. The company is behind the
                                        successful Upin dan Ipin series and the movie, Geng: Pengembaraan Bermula.
                                        Zaid says he stumbled into animation by chance as he was unsure of what he wanted to do after Form
                                        Five. “Animation is a labour of love. It is not going to get you rich or famous, so what keeps you going is
                                        your passion for creating characters and showing your artwork to the world, then seeing the reaction of
                                        your audience,” he said.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row> {/* Third row for the last speaker */}
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/PraveenWaldakar.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Praveen Waldakar</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Praveen is a Co-founder and CEO of Techizer Tech Solution Pvt. Ltd. (www.techizerindia.com), a highly
                                        specialized healthcare digital consulting firm, providing strategic technological solutions to more than 75
                                        pharmaceutical companies in Asia.As a business storyteller he loves to convert real life experiences and observations into stories. Aside
                                        from having delivered 2 TEDx talks, he loves to explore life as a solo traveller and mountaineer (A-GRADE HMI certified mountaineer). 
                                        As a storyteller he believes whenever we share a story there isalways someone sitting in the audience who wanted that story more than oxygen.
                                        </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row style={{margin: '5vw'}}>
                                <Col span={12}>
                                    <Avatar style={{width:'120px', height:'120px', borderRadius: '50%', float: 'right', marginRight: '50px'}} src='./src/Assets/UsamahZaid.jpg'/>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{color: '#fff'}}>Usamah Zaid</h2>
                                    <Divider />
                                    <p style={{color: '#fff'}}>Usamah Zaid Yasin is a malaysian animator. He is the founder and managing director of WAU
                                        Animation and is the creator and director of the animated series Ejen Ali. Prior to starting Wau, Zaid was
                                        also a founding member of Les’ Copaque Productions in 2005. The company is behind the
                                        successful Upin dan Ipin series and the movie, Geng: Pengembaraan Bermula.
                                        Zaid says he stumbled into animation by chance as he was unsure of what he wanted to do after Form
                                        Five. “Animation is a labour of love. It is not going to get you rich or famous, so what keeps you going is
                                        your passion for creating characters and showing your artwork to the world, then seeing the reaction of
                                        your audience,” he said.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                </ScrollableAnchor>
                {/* <div style={{backgroundImage: 'url(\'./src/Assets/workspace2.jpg\')'}}> */}
                <ScrollableAnchor id={"4"}>
                <div style={{position: 'relative', top: '40vw', height: '900px', padding: '50px 30px 30px 50px', backgroundImage: 'url(\'./src/Assets/workspace2.jpg\')'}}>
                    {/* <img src='./src/Assets/workspace2.jpg' style= {{width: '100%', height: '100%', backgroundSize: "cover", 
                            backgroundPosition:'center', position: 'fixed', display: 'block', top: 0, left: 0, zIndex: -2}}/> */}
                    <h1 style={{color: '#fff', margin: '20px'}}>Tickets</h1>
                    <Row>
                        <Col span={12}><Button type="danger" size='large' icon='tag' onClick={() => window.location = "https://goo.gl/7R2oHe"} style={{width: '200px', height: '65px', fontSize:'20px', float: 'right', marginRight:'80px'}}>Get Ticket</Button></Col>
                        <Col span={12}><Button type="danger" size='large' icon='tags-o' onClick={() => window.location = "https://goo.gl/7R2oHe"} style={{width: '220px', height: '65px', fontSize:'20px', float: 'left', marginLeft: '80px'}}>Reserve Multiple</Button></Col>
                    </Row>
                    <Row>
                        <Card style={{marginLeft:'auto', marginRight:'auto', marginTop:'80px', width: '600px'}}>
                        <h1 style={{color: '#9c0331', margin: '20px'}}>Contact:</h1>
                        <h2>Ahmed Sherbini: +60 11 2366 8660</h2>
                        <h2>Mohammed Bouras: +60 10 270 9917</h2>
                        </Card>
                    </Row>
                    <Row>
                        <Col span={12}><Button type="danger" size='large' icon='facebook' onClick={() => window.location = "https://www.facebook.com/TEDxMMU/"} style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'right', marginRight:'80px'}} /></Col>
                        <Col span={12}><Button type="danger" size='large' icon='twitter' onClick={() => window.location = "https://twitter.com/tedxmmu?lang=en"} style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'left', marginLeft: '80px'}} /></Col>
                        
                        {/* <Col span={6}><Button type="danger" size='large' icon='facebook' style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'right', marginLeft:'80px'}} /></Col>
                        <Col span={6}><Button type="danger" size='large' icon='twitter' style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'right', marginLeft: '100px'}} /></Col>
                        <Col span={6}><Button type="danger" size='large' icon='mail' style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'left', marginRight: '100px'}} /></Col>
                        <Col span={6}><Button type="danger" size='large' icon='instagram' style={{width: '100px', height: '100px', fontSize:'40px', borderRadius: '50%', float: 'left', marginRight: '80px'}} /></Col> */}
                    </Row>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"5"}>
                <div style={{position: 'relative', top: '40vw', height: '500px', padding: '50px 30px 30px 50px', backgroundColor: '#fff'}}>
                    <h1 style={{color: '#9c0331', margin: '20px'}}>Sponsors</h1>
                    <Row style={{marginTop: '40px'}}>
                        <Col span={8}><span style={{height: '100px', width: 'auto', margin: '30px', fontWeight: 'bold'}}>Organised By: </span></Col>
                        <Col span={8}><span style={{height: '110px', width: 'auto', margin: '30px', fontWeight: 'bold'}}>Platinum Sponsor: </span></Col>
                        <Col span={8}><span style={{height: '100px', width: 'auto', margin: '30px', fontWeight: 'bold'}}>Silver Sponsor: </span></Col>
                    </Row>
                    <Row>
                        <Col span={8}><img src="./src/Assets/IEEEBlue.png" style={{height: '100px', width: 'auto', margin: '30px'}} /></Col>
                        <Col span={8}><img src="./src/Assets/SetiaHarumanLogo.png" style={{height: '100px', width: 'auto', margin: '30px'}} /></Col>
                        <Col span={8}><img src="./src/Assets/cyberviewLogo.png" style={{height: '100px', width: 'auto', margin: '30px'}} /></Col>
                    </Row>
                </div>
                </ScrollableAnchor>
            </Content>
            <Footer style={{ textAlign: 'center', zIndex: 0, position: 'relative', top: '40vw'}}>
                All rights reserved ©2018 TEDxMMU
            </Footer>
            </Layout>
        );
    }
}