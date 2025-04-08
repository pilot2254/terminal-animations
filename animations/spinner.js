// Simple spinning pipe animation
// Usage: import { startSpinner, stopSpinner } from './animations/spinner.js'

// Different frames for the spinner animation
const frames = ['|', '/', '-', '\\'];
let currentFrame = 0;
let intervalId = null;

// Function to start the spinner
export function startSpinner(message = 'Loading ') {
  // Clear any existing spinner
  if (intervalId) clearInterval(intervalId);
  
  // Hide the cursor
  process.stdout.write('\x1B[?25l');
  
  // Start the animation
  intervalId = setInterval(() => {
    // Clear the current line
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    
    // Write the message and current frame
    process.stdout.write(`${message}${frames[currentFrame]}`);
    
    // Move to the next frame
    currentFrame = (currentFrame + 1) % frames.length;
  }, 100); // Update every 100ms
  
  return intervalId;
}

// Function to stop the spinner
export function stopSpinner(success = true) {
  if (!intervalId) return;
  
  // Clear interval
  clearInterval(intervalId);
  intervalId = null;
  
  // Clear the current line
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  
  // Show the cursor again
  process.stdout.write('\x1B[?25h');
  
  // Optionally show completion message
  if (success) {
    process.stdout.write('✓ Done!\n');
  }
}

// Example usage (if file is run directly)
if (process.argv[1] === new URL(import.meta.url).pathname) {
  console.log('Running spinner demo for 5 seconds...');
  startSpinner('Processing ');
  
  // Stop after 5 seconds
  setTimeout(() => {
    stopSpinner();
    console.log('Spinner demo completed!');
  }, 5000);
}