let neuralNetwork;

function setup() {
  createCanvas(800, 600);
  neuralNetwork = new NeuralNetwork(undefined, undefined, 400, 500);
  neuralNetwork.createNeuralNetwork(3, 5 , 2);
  neuralNetwork.cheatingOutput();
   
}

function draw() {
  background(255);
  neuralNetwork.update();
  neuralNetwork.render();
}
