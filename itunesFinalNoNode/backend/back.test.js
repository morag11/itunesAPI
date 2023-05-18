import chai from 'chai'
import fetch from 'isomorphic-fetch'

//this test check the backend connects to the front end
const expect = chai.expect
describe('Status check', function (done) {
    it('Backend and front end connected', function () {
        fetch('http://localhost:3000', function (res) {
            expect(res.statusCode).toEqual(200);
            done;
        })
    })
})