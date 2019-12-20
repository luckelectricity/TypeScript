const expect = require('chai').expect;
const { getName } = require('../index');

describe('hello-npm-script', () => {
    describe('#add', () => {
        it('输出Hello XXX', () => {
            expect(getName('aaa')).to.equal('Hello aaa');
            expect(getName('bbb')).to.equal('Hello bbb');
        });

        it('输出name is undefined', () => {
            expect(getName(null)).to.equal('name is undefined');
        });
    });
});
