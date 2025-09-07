// Get all the chunks of content
const chunks = document.querySelectorAll('.chunk');

// Shuffle function for random order
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Reveal chunks in random order with random delay
const shuffled = shuffle([...chunks]);
let delay = 0;

shuffled.forEach(chunk => {
  delay += Math.random() * 1000 + 500; // between 0.5s and 1.5s extra delay
  setTimeout(() => {
    chunk.style.opacity = 1;
  }, delay);
});
