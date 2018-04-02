import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';

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
                >
                    <Menu.Item key="1" style={{float:'right'}}>Option 1</Menu.Item>
                    <Menu.Item key="2" style={{float:'right'}}>Option 2</Menu.Item>
                    <Menu.Item key="3" style={{float:'right'}}>Option 3</Menu.Item>
                    <Menu.Item key="4" style={{float:'right'}}>Option 4</Menu.Item>
                </Menu>
                <img src = "./src/Assets/fbBanner.jpg" style={{width: '100%', height: 'auto'}}/>
                <Button type = 'primary'> Hello </Button>
                <Button> Goodbye </Button>
            </div>
        );
    }
}