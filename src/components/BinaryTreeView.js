import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BinaryTreeView = ({ data }) => {
  const svgRef = useRef();
console.log(data,"dd")
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.attr('width');
    const height = svg.attr('height');

    const treeData = d3.hierarchy(data);
    const treeLayout = d3.tree().size([height, width - 100]);
    const treeNodes = treeLayout(treeData);

    // Draw edges
    const edges = svg.selectAll('.edge')
      .data(treeNodes.links())
      .enter()
      .append('path')
      .attr('class', 'edge')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x));

    // Draw nodes
    const nodes = svg.selectAll('.node')
      .data(treeNodes.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y}, ${d.x})`);

    nodes.append('circle')
      .attr('r', 20)
      .attr('fill', '#fff')
      .attr('stroke', 'black');

    nodes.append('text')
      .attr('dy', 5)
      .attr('text-anchor', 'middle')
      .text(d => d.data.value);
  }, [data]);

  return (
    <svg ref={svgRef} width={800} height={600} style={{display:"flex",justifyContent:"center"}}>
      <g transform="translate(150, 150)"></g>
    </svg>
  );
};

export default BinaryTreeView;
