import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import queryString from 'query-string'
import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    DropdownMenu,DropdownToggle,UncontrolledButtonDropdown,DropdownItem,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.png';
import avatar2 from '../../../assets/utils/images/avatars/1.png';
import avatar3 from '../../../assets/utils/images/avatars/1.png';
import avatar4 from '../../../assets/utils/images/avatars/1.png';




export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            students: [
                   { id: 1, name: 'Harsh', dues: 2100, standard: '1A',stoppage:"kankarbagh" },
                   { id: 2, name: 'Raj', dues: 1500, standard: '5B',stoppage:"kankarbagh" },
                   { id: 3, name: 'Shubham Raj', dues: 2100, standard: '1A',stoppage:"kankarbagh" },
                   { id: 4, name: 'Shubham Gupta', dues: 1500, standard: '5B',stoppage:"kankarbagh" },
                   { id: 5, name: 'Harsh Verma', dues: 2100, standard: '1A',stoppage:"kankarbagh" },
                   { id: 6, name: 'Shahrukh Khan', dues: 1500, standard: '5B',stoppage:"kankarbagh" }
                ],
                dropDownValue:'Route 1'
        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.changeValue=this.changeValue.bind(this);
        this.notify=this.notify.bind(this);
    }

    changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent})
      }

    notify = () => this.toastId = toast("Message Send Successfully", {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, standard, stoppage,dues } = student 
           return (
            <tr key="id">
            <td className="text-center text-muted">{id}</td>
            <td>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                            </div>
                        </div>
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{name}</div>
           <div className="widget-subheading opacity-7">{standard}</div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{stoppage}</td>
           <td className="text-center">{dues}</td>
            <td className="text-center">
                <div className="badge badge-warning">Pending</div>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={this.notify}>Send Reminder</button>
            </td>
        </tr>
           )
        })
     }

    render() {
  
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                   
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">St. Michael's High School
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                            <UncontrolledButtonDropdown direction="left" className="mb-2 mr-2">
                                            <Button className="btn-wide" color="primary">{this.state.dropDownValue}</Button>
                                            <DropdownToggle className="dropdown-toggle-split" caret color="primary"/>
                                            <DropdownMenu>
                                                <DropdownItem><div onClick={this.changeValue}>Route 1</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 2</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 3</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 4</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 5</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 6</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 7</div></DropdownItem>
                                                <DropdownItem><div onClick={this.changeValue}>Route 8</div></DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th className="text-center">Number</th>
                                                <th>Name</th>
                                                <th className="text-center">Stoppage</th>
                                                <th className="text-center">Dues Amount</th>
                                                <th className="text-center">Dues Status</th>
                                                <th className="text-center">Actions</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.renderTableData()}
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#347</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Ruben Tillman</div>
                                                                <div className="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Berlin</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-success">Completed</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#345</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#321</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Elliot Huber</div>
                                                                <div className="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">London</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-danger">In Progress</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#55</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar1} alt="Avatar" /></div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>
                                                                <div className="widget-subheading opacity-7">UI Designer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Amsterdam</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">
                                                    <div className="badge badge-info">On Hold</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Send Reminder</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                   
                                </Card>
                            </Col>
                        </Row></ReactCSSTransitionGroup></Fragment>
        )
    }
}
