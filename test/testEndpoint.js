const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router')


test('testing the tape', assert=>{
  const num = 1;
    assert.equal(num, 1, "pass");
    assert.end();
});

test('testing / endpoint', assert=>{
 supertest(router)
   .get('/')
   .expect(200)
   .expect("content-type", /html/)
   .end((error, response) => {
       if (error) assert.error(error);
       assert.equal(response.text.includes('<title>Musify</title>'), true, 'pass true');
       assert.end();
})
});

test('testing statics endpoint', assert=>{
  supertest(router)
    .get('/public/css/style.css')
    .expect(200)
    .expect("content-type", /css/)
    .end((error, response) => {
        if (error) assert.error(error);
        assert.equal(response.text.includes('margin: 0%'), true, 'should return margin: 0%');
        assert.end();
    });
  });

// test('testing singup', assert => {
  
//   assert.end();
// })

// test('testing loginin', assert => {
//   assert.end();
// })

// test('testing get songs', assert => {
//   assert.end();
// })

// test('testing add songs', assert => {
//   assert.end();
// })

// test('testing addfavs', assert => {
//   assert.end();
// });

// test('testing showfavs', assert => {
//   assert.end();
// });
