console.log('util');

const  square = (x) => (x * x);
const  add = (a, b) => (a + b);
const  subtract = (a, b) => (a -b);


// exports - default , named
// export default subtract;
export {square, add, subtract as default};