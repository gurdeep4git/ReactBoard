import React, { Component, Fragment } from 'react';

import Card from "../../components/shared/card/Card";
import Dropdown from "../../components/shared/dropdown/Dropdown";
import Chart from "../../components/shared/chart/Chart";

import { getCountries, getStatistics } from "./api";
export class CoronaReport extends Component {
    state = {
        statistics: [],
        selectedStatistics: {},
        countries: [],
        loading: true
    }

    async componentDidMount() {
        const countries = await getCountries();
        const statistics = await getStatistics();
        const selectedStatistics = statistics[0];
        this.setState({ statistics, selectedStatistics, countries, loading: false })

    }

    changeHandler = (country: string) => {
        let selectedStatistics = this.state.statistics.filter((stat) => {
            //@ts-ignore
            return stat.country === country
        });
        selectedStatistics = Object.assign({}, ...selectedStatistics);
        this.setState({ selectedStatistics });
    }


    render() {
        const { selectedStatistics, countries }: { selectedStatistics: {}, countries: string[] } = this.state;
        return (
            <div>
                <Card>
                    {this.state.loading ? (<p>Loading...</p>) :
                        <Fragment>
                            <Dropdown label={"Select Country"} options={countries} changeHandler={this.changeHandler} />
                            <Chart selectedStatistics={selectedStatistics} />
                        </Fragment>
                    }
                </Card>
            </div>
        )
    }
}

export default CoronaReport;
