import Person from '../app'

describe('Person', () => {
    let p = new Person('Simon')
    it('Should getName()', () => {
        expect(p.getName()).toBe('Simon')
    })
})
