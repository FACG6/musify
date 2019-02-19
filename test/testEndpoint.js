const test = require('tape');
const router = require('../src/router')
test('testing the tape', assert=>{
    const num = 1;
    assert.equal(num, 1, "pass");
    assert.end();
});
test ('test sign-up endpoint',assert=>{
    supertest(router)
    .get('/signup')
    .expect(200)
    .expect('content-type','application/json')
    .end((err, res)=>{
        if(err) assert.error(err)
        assert.equal('','','pass sign up')
        assert.end();
    })
})

test ('test songs endpoint',assert=>{
    supertest(router)
    .get('/songs')
    .expect(200)
    .expect('content-type','application/json')
    .end((err, res)=>{
        if(err) assert.error(err)
        assert.equal('','','pass songs')
        assert.end();
    })
})
test ('test sign-up endpoint',assert=>{
    supertest(router)
    .get('/addsong')
    .expect(200)
    .expect('content-type','application/json')
    .end((err, res)=>{
        if(err) assert.error(err)
        assert.equal('','','pass addsong')
        assert.end();
    })
})

test ('test postfav endpoint',assert=>{
    supertest(router)
    .get('/postfav')
    .expect(200)
    .expect('content-type','application/json')
    .end((err, res)=>{
        if(err) assert.error(err)
        assert.equal('','','pass postfav')
        assert.end();
    })
})

test ('test myfav endpoint',assert=>{
    supertest(router)
    .get('/myfav')
    .expect(200)
    .expect('content-type','application/json')
    .end((err, res)=>{
        if(err) assert.error(err)
        assert.equal('','','pass myfav')
        assert.end();
    })
})

