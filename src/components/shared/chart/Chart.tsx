import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ selectedStatistics }: { selectedStatistics: any }) => {
    const { cases } = selectedStatistics;
    const { country } = selectedStatistics;
    return (
        <div>
            {selectedStatistics ?
                (<Bar
                    data={{
                        legend: false,
                        labels: ['Active', 'Critical', 'New', 'Recovered', 'Total'],
                        datasets: [{
                            barThickness: 10,
                            backgroundColor: [
                                'red', 'yellow', 'green', 'pink', 'orange'
                            ],
                            data: [
                                cases.active,
                                cases.critical,
                                cases.new,
                                cases.recovered,
                                cases.total,
                            ]
                        }]
                    }}
                    options={{
                        legend: false,
                        fontColor: "#FFFFFF",
                        fontSize: 16,
                        title: { display: true, text: `Information of ${country}` },
                        // scales: {
                        //     yAxes: [{
                        //         ticks: {
                        //             min: 0,
                        //             max: 500,
                        //             stepSize: 20
                        //         }
                        //     }]
                        // }
                    }}
                />) : null}
        </div>
    )
}

export default Chart;
