var test = require('tape');
var nlp = require('../lib/nlp');

test('addConjugations', function(t) {
  let conjugations = {
    woo: {
      PastTense: 'wood'
    }
  };
  nlp.addConjugations(conjugations);
  let doc = nlp('woo the crush');
  t.equal(doc.verbs().length, 1, 'has inf in lexicon');

  doc.verbs().toPastTense();
  t.equal(doc.out(), 'wood the crush', 'conjugated from infinitive');
  t.equal(doc.verbs().length, 1, 'still has 1 verb');

  console.log(doc.verbs().conjugate());
  doc.verbs().toInfinitive();
  t.equal(doc.out(), 'woo the crush', 'conjugated back tp infinitive');

  t.end();
});