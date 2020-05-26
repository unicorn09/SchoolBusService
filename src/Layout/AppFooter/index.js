import React, {Fragment} from 'react';

class AppFooter extends React.Component {
    render() {


        return (
            <Fragment>
                <div className="app-footer">
                    
                        <div className="app-footer-right">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="http://www.harshraj.in.net/" className="nav-link" target="_blank">
                                        <div className="badge badge-success mr-1 ml-0">
                                            <small>Unicorn</small>
                                        </div>
                                        Made by Harsh Raj
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            
            </Fragment>
        )}
}

export default AppFooter;