const shapeFactory = (type, attribute) => {
	const shape = document.createElement(type);
	shape.setAttribute("class", `${attribute} element`);
	const div = document.getElementById("stage").appendChild(shape);
	move(shape);
  };

  let chooseElement;

  const move = function (element) {
	const elements = document.querySelectorAll(".element");
	elements.forEach((element) => {
	  element.addEventListener("mousedown", () => {
		element.style.position = "absolute";
		chooseElement = element;
		console.log(chooseElement);

		document.onmousemove = (e) => {
		  let x = e.pageX;
		  let y = e.pageY;

		  chooseElement.style.left = x + "px";
		  chooseElement.style.top = y + "px";
		  document.onmouseup = (e) => {
			chooseElement = 0;
		  };
		};
	  });
	});
  };