let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn');

const quotes = [{
    quote: `"Just be good and kind to your children. Not only are they the future of
    the world, they're the ones who can sign you into a home."`,
    author: 'Dennis Miller'
}, {
    quote: `"The older you get the more you realize that kindness is synonymous with happiness."`,
    author: 'Lionel Barrymore'
}, {
    quote: `"I don't know why people are so keen to put the details of their private life in public; they forget that invisibility is a superpower."`,
    author: 'Banksy'
}, {
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    author: 'Maya Angelou'
}, {
    quote: `"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only good for wallowing."`,
    author: 'Katherine Mansfield'
}, {
    quote: `"Don't go around saying the world owes you a living. The world owes you nothing. It was here first."`,
    author: 'Mark Twain'
}, {
    quote: `"There are no hopeless situations; there are only people who have grown hopeless about them."`,
    author: 'Claire Boothe Luce'
}, {
    quote: `"Each generation imagines itself to be more intelligent than the one that went before it and wiser than the one that comes after it."`,
    author: 'George Orwell'
}, {
    quote: `"I wish I could tell you it gets better, but it doesn't get better. You get better."`,
    author: 'Joan Rivers'
}, {
    quote: `"If you are too careful, you are so occupied in being careful that you are sure to stumble over something."`,
    author: 'Gertrude Stein'
}, {
    quote: `"Anyone can do any amount of work, provided it isn't the work he is supposed to be doing at that moment."`,
    author: 'Robert Benchley'
}, {
    quote: `"Experience is not what happens to you; it is what you do with what happens to you."`,
    author: 'Aldous Huxley'
}, {
    quote: `"You only have to do a very few things right in your life-so long as you don't do too many things wrong."`,
    author: 'Warren Buffet'
}, {
    quote: `"It is a funny thing about life; if you refuse to accept anything but the best, you very often get it."`,
    author: 'W. Somerset'
}
];

btn.addEventListener('click', function () {
    let x = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[x].quote;
    author.innerText = quotes[x].author;
})