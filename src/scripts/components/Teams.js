import React, { Component } from 'react';
import API from './api';

export default class Teams extends Component {
    constructor() {
        super();
        this.state = {
            sales: [],
            keyAccountAndFirm: [],
            igs: []
        };
    }

    componentDidMount() {
        API.get().then(res => {
            const { teams } = res.data;
            this.setState({
                sales: teams.sales,
                keyAccountAndFirm: teams.keyAccountAndFirm,
                igs: teams.igs
            });
        });
    }

    renderTeams(data) {
        console.log(data);
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
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">Sales</h5>
                        </div>
                        {this.state.sales.map(this.renderTeams)}
                    </div>
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">
                                Key Accounts & Firms
                            </h5>
                        </div>
                        {this.state.keyAccountAndFirm.map(this.renderTeams)}
                    </div>
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">ISG</h5>
                        </div>
                        {this.state.igs.map(this.renderTeams)}
                    </div>
                </div>
            </div>
        );
    }
}
