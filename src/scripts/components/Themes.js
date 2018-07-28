import React, { Component } from 'react';
import API from './api';

export default class Themes extends Component {
    constructor() {
        super();
        this.state = {
            enterpriseThemes: [],
            clientThemes: [],
            thoughtLeadership: [],
            campaigns: []
        };
    }

    componentDidMount() {
        API.get().then(res => {
            const { themes } = res.data;
            this.setState({
                enterpriseThemes: themes.enterpriseThemes,
                clientThemes: themes.clientThemes,
                thoughtLeadership: themes.thoughtLeadership,
                campaigns: themes.campaigns
            });
        });
    }

    renderThemes(data) {
        return (
            <div key={data}>
                <div className="product-container">
                    <div className="product-name">{data}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container body-container">
                <div className="row">
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Enterprise Themes</h5>
                        </div>
                        {this.state.enterpriseThemes.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Client Themes</h5>
                        </div>
                        {this.state.clientThemes.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">
                                Thought Leadership
                            </h5>
                        </div>
                        {this.state.thoughtLeadership.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Campaigns</h5>
                        </div>
                        {this.state.campaigns.map(this.renderThemes)}
                    </div>
                </div>
            </div>
        );
    }
}
