import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ConnectedLineGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    // Set up dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Append SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Set up scales
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.date))
      .padding(0.1);

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => Math.max(d.averageaction, d.ensemble))]);

    // Draw lines
    const lineAverageAction = d3.line()
      .x(d => x(d.date) + x.bandwidth() / 2)
      .y(d => y(d.averageaction));

    const lineEnsemble = d3.line()
      .x(d => x(d.date) + x.bandwidth() / 2)
      .y(d => y(d.ensemble));

    const lineDji = d3.line()
      .x(d => x(d.date) + x.bandwidth() / 2)
      .y(d => y(d.dji));

    const lineMinvar = d3.line()
      .x(d => x(d.date) + x.bandwidth() / 2)
      .y(d => y(d.minvar));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", lineAverageAction);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 1.5)
      .attr("d", lineEnsemble);

      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", lineDji);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .attr("d", lineMinvar);    

    // Add the X Axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
      .call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ConnectedLineGraph;
