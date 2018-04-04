import React, { Component } from 'react';
import { Col, Row, Progress } from 'antd';
import '../CSS/clock.css';
class Clock extends Component {
     constructor(props) {
     super(props);
     this.state = {
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
          };
     }
     componentWillMount() {
          this.getTimeUntil(this.props.deadline);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }  
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(deadline) {
          const time = deadline - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          
          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60))%24);
               const days = Math.floor(time/(1000*60*60*24));
               this.setState({ days, hours, minutes, seconds });
          }
     }
     render() {
          return(
               <div style={{margin: '5vw', padding: '20px'}}>
                   <Row>
                       <Col span={6}>
                            <div className="Clock-days">
                                <Progress 
                                type="circle" 
                                width={160} 
                                percent={this.leading0(this.state.days)} 
                                format={percent => <span style={{fontSize: '30px'}}>{this.leading0(this.state.days)} Days</span>} />
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Clock-days">
                                <Progress 
                                type="circle" 
                                width={160} 
                                percent={(this.state.hours/24)*100} 
                                format={percent => <span style={{fontSize: '30px'}}>{this.leading0(this.state.hours)} Hours</span>} />
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Clock-days">
                                <Progress 
                                type="circle" 
                                width={160} 
                                percent={(this.state.minutes/60)*100} 
                                format={percent => <span style={{fontSize: '25px'}}>{this.leading0(this.state.minutes)} Minutes</span>} />
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="Clock-days">
                                <Progress 
                                type="circle" 
                                width={160} 
                                percent={(this.state.seconds/60)*100} 
                                format={percent => <span style={{fontSize: '25px'}}>{this.leading0(this.state.seconds)} Seconds</span>} />
                            </div>
                        </Col>
                    {/* <div className="Clock-hours">
                         {this.leading0(this.state.hours)} Hours
                    </div>
                    <div className="Clock-minutes">
                         {this.leading0(this.state.minutes)} Minutes
                    </div>
                    <div className="Clock-seconds">
                         {this.leading0(this.state.seconds)} Seconds
                    </div> */}
                    </Row>
               </div>
          );
     }
}
export default Clock;