import { startSpinner, stopSpinner } from './animations/spinner.js';

// Demo all animations
console.log('Terminal Animations Demo');
console.log('=======================\n');

// Demo the spinner
console.log('Spinner Animation:');
startSpinner('Loading ');

// Stop after 5 seconds
setTimeout(() => {
  stopSpinner();
  console.log('Animation completed!\n');
}, 5000);