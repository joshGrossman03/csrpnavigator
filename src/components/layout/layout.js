import React, { Component } from 'react';
import CsrpTitle from '../csrptitle';
import Navigator from '../navigation/navigator';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Button } from 'react-bootstrap';
import '../layout/layout.css';


class Layout extends Component {
    state = {
        showContent: false
    }

    handleCloseClick = () => {
        this.setState({ showContent: false })
    }

    showContentToggleHandler = () => {
        if (this.state.showContent === true) {
            return (
                this.setState((prevState) => {

                    return { showContent: prevState.showContent };
                })

            )
        }
        return (
            this.setState((prevState) => {

                return { showContent: !prevState.showContent };
            })

        )

    }

    render() {
        return (
            <div className="App" style={{ backgroundColor: '#ECEDED' }}>


                <div className="container-fluid" >
                    <AmplifySignOut style={{ backgroundColor: '#CC7B29' }}></AmplifySignOut>
                    {this.state.showContent ? null: <CsrpTitle />}
                    {this.state.showContent ? null:<Navigator navLinkClicked={this.showContentToggleHandler} /> }
                    


                    <main className="Content">
                        {this.state.showContent ? this.props.children : null}
                        {this.state.showContent ? <div className="row"><div className="col-lg" id="buttonDisplay"><Button onClick={this.handleCloseClick} variant="secondary">Home</Button></div></div> : null}
                    </main>



                </div>
      Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        )
    }

}

export default Layout;