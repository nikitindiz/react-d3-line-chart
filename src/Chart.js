import React from 'react';
import * as d3 from "d3";

class LineChart extends React.Component {
    width = 500;
    height = 300;

    render() {
        // const buildLine = d3.line();
        // const { data = [] } = this.props;

        return (
            <svg
                className="chart-svg"
                width={this.width}
                height={this.height}
                viewBox={`0 0 ${this.width} ${this.height}`}
            >
                <g className="chart-svg__x-axis"></g>
                <g className="chart-svg__y-axis"></g>
                <g className="chart-svg__path-group">
                    {/* <path d={buildLine(data)} /> */}
                    <path className="chart-svg__path" />
                </g>
            </svg>
        );
    }

    redrawTheChart = () => {
        const { data } = this.props;
        const minAndMaxDates = d3.extent(data, (d) => d.x_date);

        const xScale = d3.scaleTime()
            .domain(minAndMaxDates)
            .range([0, this.width]);

        d3.select('.chart-svg__x-axis')
            .attr("transform", "translate(0," + (this.height - 20) + ")")
            .call(d3.axisBottom(xScale));

        const minAndMaxValues = [0, d3.max(data, (d) => d.y_last)];

        const yScale = d3.scaleLinear()
            .domain(minAndMaxValues)
            .range([this.height, 0]);

        d3.select('.chart-svg__y-axis')
            .attr("transform", "translate(30, 0)")
            .call(d3.axisLeft(yScale));


        d3.select('.chart-svg__path')
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x((d) => xScale(d.x_date))
                .y((d) => yScale(d.y_last))
            )
    }

    componentDidMount() {
        this.redrawTheChart();
    }

    componentDidUpdate() {
        this.redrawTheChart();
    }
}

export default LineChart;
