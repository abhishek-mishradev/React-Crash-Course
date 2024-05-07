//  <div id="parent">
//     <div id="child">
//         <h1>Iam h1 tag</h1>
//     </div>
//  </div>


//  <div id="parent">
//     <div id="child">
//         <h1>Iam h1 tag</h1>
//     </div>
//  </div>


const heading = React.createElement("div", { id: "parent" },
 React.createElement("div", { id: "child" }, 
 [React.createElement("h1", {}, "i am h1 tag"),
  React.createElement("h2", {}, "i am h2 tag")]))








const headingg = React.createElement(
    "h1",
     {id:"heading"}, 
     "hello world from React");

     console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
