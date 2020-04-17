import React from "react";
import PropTypes from "prop-types";
import {VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer} from "victory";

const Chart = ({data, xAxis, lines}) => {
    return <VictoryChart
        containerComponent={
            <VictoryVoronoiContainer
                labels={({datum}) => {
                    return `${xAxis.name.toLowerCase()} ${datum[xAxis.key]}, ${datum[lines[0].key]} ${lines[0].unit}`;
                }}
            />
        }
    >
        <VictoryLine
            style={{
                data: {
                    stroke: lines[0].stroke
                },
                parent: {
                    border: "1px solid #ccc"
                }
            }}
            data={data}
            x={xAxis.key}
            y={lines[0].key}
        />
        <VictoryAxis
            tickValues={Array.from({length: xAxis.tick - 1}, (v, i) => i + 1)}
        />
        <VictoryAxis
            dependentAxis
            tickFormat={(t) => `${Math.round(t)}`}
        />
    </VictoryChart>
};

Chart.propTypes = {
    data: PropTypes.array,
    xAxis: PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        tick: PropTypes.number.isRequired
    }).isRequired,
    lines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        unit: PropTypes.string,
        stroke: PropTypes.string
    }).isRequired),
};

export default Chart;
