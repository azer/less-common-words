var extract = require('./');
var test = require("prova");

test('extracting less common words', function (t) {
  var keywords = extract("I'm from Iceland and I make goat cheese. How about you? Do you work?");
  t.plan(1);
  t.deepEqual(keywords, ["iceland", "goat", "cheese"]);
});
