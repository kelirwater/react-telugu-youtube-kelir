function customRender(reactElement, container) {
  //------------------First Method ------------
  //HardCoding
  /*
  const domElement = document.createElement(reactElement.type);
  console.log(domElement);

  domElement.innerHTML = reactElement.children;
  console.log(domElement.innerHTML);

  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */

  // ----------------- second method -------------
  //looping using new elements

  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}*/

  //--------------direct Objects methods----------
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  Object.entries(reactElement.props).forEach(([key, value]) => {
    if (key === "children") return;
    domElement.setAttribute(key, value);
  });

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
