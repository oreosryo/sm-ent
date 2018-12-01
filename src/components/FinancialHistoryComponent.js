import React, {Component} from 'react';

/* import modules */
import charts from '../data/chartsData';

/* import styles */
import '../css/FinancialHistoryComponent.css';

class FinancialHistoryComponent extends Component {
    componentDidMount() {
        var xAxisLabel = "Companies";
        var yAxisLabel = "Net Income (Million $)";
        
        const margin = 60; 
        const width = 600 - 2 * margin;
        const height = 300 - 2 * margin;

        for (var i = 0; i < charts.length; i++)
        {
            let chartDetails = charts[i];
            let svgChart = window.d3.select(chartDetails.chartSelector);
            const chart = svgChart.append('g')
            .attr('transform', `translate(${margin},${margin})`);

            /* using percentages here */
            const yScale = window.d3.scaleLinear() 
                .range([height, 0])
                .domain(chartDetails.chartDomain);
            
            chart.append('g')
                .attr('id', 'y-axis')
                .call(window.d3.axisLeft(yScale));


            const xScale = window.d3.scaleBand()
                .range([0,width])
                .domain(["2015", "2016", "2017"])
                .padding(0.2);

            chart.append('g')
                .attr('transform', `translate(0, ${height})`)
                .call(window.d3.axisBottom(xScale));

            const makeYLines = () => window.d3.axisLeft()
                .scale(yScale);
            
            chart.append('g')
                .attr('class', 'grid')
                .call(makeYLines()
                    .tickSize(-width, 0, 0)
                    .tickFormat(''));
                                
            const barGroups = chart.selectAll()
                .data(chartDetails.chartData)
                .enter()
                .append('g');

            barGroups
                .append('rect')
                .attr('class', 'bar')
                .attr('x', (g) => xScale(g.name))
                .attr('y', (g) => yScale(g.netIncome))
                .attr('height', (g) => height - yScale(g.netIncome))
                .attr('width', xScale.bandwidth())
                .on('mouseenter', function (actual, i) {
                window.d3.selectAll('.value')
                    .attr('opacity', 0)
        
                window.d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 0.6)
                    .attr('x', (a) => xScale(a.name) - 5)
                    .attr('width', xScale.bandwidth() + 10);
        
                const y = yScale(actual.netIncome),
        
                    line = chart.append('line')
                    .attr('id', 'limit')
                    .attr('x1', 0)
                    .attr('y1', y)
                    .attr('x2', width)
                    .attr('y2', y);
        
                barGroups.append('text')
                    .attr('class', 'value')
                    .attr('x', (a) => xScale(a.name) + xScale.bandwidth() / 2)
                    .attr('y', (a) => yScale(a.netIncome) - 10)
                    .attr('fill', '#939393')
                    .attr('text-anchor', 'middle')
                    .text((a, idx) => {
                    let text = '';
                    text += `${a.netIncome}`
        
                    return idx === i ? text : '';
                    })
        
                })
                .on('mouseleave', function () {
                window.d3.selectAll('.value')
                    .attr('opacity', 1)
        
                window.d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 1)
                    .attr('x', (a) => xScale(a.name))
                    .attr('width', xScale.bandwidth())
        
                chart.selectAll('#limit').remove()
                chart.selectAll('.divergence').remove()
                })
        
            /* label for values of bars */
            barGroups 
                .append('text')
                .attr('class', 'value')
                .attr('x', (a) => xScale(a.name) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.netIncome) - 10)
                .attr('text-anchor', 'middle')
                .text((a) => a.netIncome)
            
            /* y-axis label */
            svgChart
                .append('text')
                .attr('class', 'label')
                .attr('x', -(height / 2) - margin)
                .attr('y', margin / 2.4)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .text(yAxisLabel)
        
            /* x-axis label */
            svgChart.append('text')
                .attr('class', 'label')
                .attr('x', width / 2 + margin)
                .attr('y', height + margin * 1.7)
                .attr('text-anchor', 'middle')
                .text(xAxisLabel)
        
            /* Title of chart */
            svgChart.append('text')
                .attr('class', 'chart-title')
                .attr('x', width / 2 + margin)
                .attr('y', 40)
                .attr('text-anchor', 'middle')
                .text(chartDetails.chartTitle)
        }
    }

    render() {
        return (
            <div id="financial-history">
                <div className="title">Financial History</div>
                <svg id="data-viz-1" />
                <svg id="data-viz-2" />
            </div>
        );
    }
}

export default FinancialHistoryComponent;