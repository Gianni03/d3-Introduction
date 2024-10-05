const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA' },
  { id: 'd2', value: 11, region: 'India' },
  { id: 'd3', value: 12, region: 'China' },
  { id: 'd4', value: 6, region: 'Germany' },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

//basic d3.js code
// d3.select('div')
//   .selectAll('p')
//   .data([1, 2, 3]) // data generalmente es un array pero puede ser cualquier iterable.
//   .enter()
//   .append('p')
//   .text(dta => dta);

const container = d3
  .select('svg')
  .classed('container', true)
  .style('border', '2px solid black');

const bar = container
  .selectAll('.bar') // selecciona todos los elementos con la clase bar
  .data(DUMMY_DATA) // data generalmente es un array pero puede ser cualquier iterable.
  .enter() // selecciona los elementos que no tienen un elemento asociado
  .append('rect') // agrega un rectángulo por cada elemento del array
  .classed('bar', true) // le asigna la clase bar a cada rectángulo
  .attr('width', xScale.bandwidth()) // asigna el ancho de cada rectángulo
  .attr('height', (data) => 200 - yScale(data.value)) // asigna el alto de cada rectángulo
  .attr('x', (data) => xScale(data.region)) // asigna la posición en x de cada rectángulo
  .attr('y', (data) => yScale(data.value)); // asigna la posición en y de cada rectángulo


  setTimeout(() => {
    bar.data(DUMMY_DATA.slice(0, 2)).exit().remove();
  }, 2000); // Esto es para que el navegador no cierre la conexión y se pueda ver el resultado en el navegador.