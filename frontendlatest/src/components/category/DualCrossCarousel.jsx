.carousel-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 500px;
	perspective: 1000px;
	perspective-origin: center;
  }
  
  .carousel-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
  }
  
  .carousel {
	position: absolute;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 0.6s;
  }
  
  .carousel-inner {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: white;
	font-size: 2em;
	font-weight: bold;
	cursor: pointer;
  }
  
  .carousel-inner img {
	width: 100%;
	height: 100%;
	object-fit: cover;
  }
  
  .carousel-inner h2 {
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	margin: 0;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 5px;
  }
  
  .carousel-back {
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	cursor: pointer;
	z-index: 1;
  }
  
  .carousel-forward {
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	cursor: pointer;
	z-index: 1;
  }
  
  .carousel-left {
	transform: rotateY(90deg);
	transform-origin: right;
	left: 0;
	opacity: 0.5;
  }
  
  .carousel-right {
	transform: rotateY(-90deg);
	transform-origin: left;
	right: 0;
	opacity: 0.5;
  }
  
  .carousel-left:hover, .carousel-right:hover {
	opacity: 1;
  }
  