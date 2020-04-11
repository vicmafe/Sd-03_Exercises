const calcs = require('./calcs')
const array = require('./array')

test.skip('soma 1 e 2 retorna 3', () => {
    expect(calcs.sum(1, 2)).toEqual(3)
});

test.skip('divide 5 por 2 retorna 2.5', () => {
    expect(calcs.div(5, 2)).toBeCloseTo(2.50)
});

test('verifica se os elementos do array1 é par', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8]
    let array2 = [2, 4, 6, 8]
    expect(array(array1)).toEqual(array2)
}) 