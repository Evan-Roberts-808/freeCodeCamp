const quoteContainer = document.getElementById('quote-box');
const quoteText = document.getElementById('text');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('tweet-quote');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Quotes Array
const localQuotes = [
  {
    text: 'The most difficult thing is the decision to act. The rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process, is its own reward.',
    author: 'Amelia Earhart'
  },
  {
    text: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
    author: 'Neil Gaiman'
  },
  {
    text: 'No one should abandon duties because he sees defects in them. Every action, every activity, is surrounded by defects as a fire is surrounded by smoke.',
    author: 'Krishna'
  },
  {
    text: 'Man, whose teacher is nature, should not be a piece of wax on which an elevated image of some professor is to be carved. ',
    author: 'George Lichtenberg'
  },
  {
    text: 'Don’t be the person who says yes with their mouth but no with their actions.',
    author: 'Ryan Holiday'
  },
  {
    text: 'Every prophet has to come from civilization, but every prophet has to go into the wilderness. He must have a strong impression of a complex society and all that it has to give, and then he must serve periods of isolation and meditation. This is the process by which psychic dynamite is made.',
    author: 'Winston Churchill'
  },
  {
    text: 'The secret of being miserable is to have the leisure to bother about whether you are happy or not.',
    author: 'George Bernard Shaw'
  },
  {
    text: 'You will never change your life until you change something you do daily.',
    author: 'John Maxwell'
  },
  {
    text: 'Almost everything will work again if you unplug it for a few minutes, including you.',
    author: 'Anne Lamott'
  },
  {
    text: 'Select your purpose … selfless, without any thought of personal pleasure or personal profit, and then use selfless means to attain your goal.',
    author: 'Ghandi'
  },
  {
    text: 'The biggest problem we run into is going, ‘This is who I am, this is what I’m like, this is how I function’ while failing to notice that you don’t do that anymore.',
    author: 'Neil Gaiman'
  },
  {
    text: "There are a whole lot of things in this world of ours you haven't even started wondering about yet.",
    author: 'Roald Dahl'
  },
  {
    text: 'The illiterates of the 21st century will not be those who cannot read and write but those who cannot learn, unlearn, and relearn.',
    author: 'Alvin Toffler'
  },
  {
    text: 'Between two evils, I generally like to pick the one I never tried before.',
    author: 'Mae West'
  },
  {
    text: 'The whole trick is keeping the truth up front in daily consciousness.',
    author: 'David Foster Wallace'
  },
  {
    text: 'No man can serve two masters. Your life is shaped by the end you live for. You are made in the image of what you desire.',
    author: 'Thomas Merton'
  },
  {
    text: 'Learning to let go should be learned before learning to get. Life should be touched, not strangled. You’ve got to relax, let it happen at times, and at others move forward with it.',
    author: 'Ray Bradbury'
  },
  {
    text: 'We have two lives, and the second begins when we realize we only have one.',
    author: 'Confuscius'
  },
  {
    text: 'Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakens.',
    author: 'C.G. Jung'
  },
  {
    text: 'Be who you needed when you were younger.',
    author: 'T.S. Elliot'
  }
]

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote

function newQuote() {
    loading();
    // Pick a random Quote from Quote array

    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;

    // Check quote length to determine styling

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Tweet Quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
newQuote();