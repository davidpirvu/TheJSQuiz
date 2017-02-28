import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';
import Card from '../components/Card';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <Header/>

                    <div className="container">
                      <div className="android-card-container mdl-grid">
                          <Card
                            replace={this.props.replace}
                            title="BEGINNER"
                            description="For JavaScript developers who are less experienced (< 6 months). Or who are not completely comfortable with the language."
                            difficulty="beginner" />

                          <Card
                            replace={this.props.replace}
                            title="INTERMEDIATE"
                            description="For seasoned JavaScript developers who are comfortable with the language and have been exposed to it for at least 6 months."
                            difficulty="intermediate" />

                          <Card
                            replace={this.props.replace}
                            title="ADVANCED"
                            description="For the advanced JavaScript developer who know the language like the back of their hand (Warning - May hurt your feelings)."
                            difficulty="advanced" />
                      </div>
                    </div>
                </div>
            </main>
        );
    }
}
