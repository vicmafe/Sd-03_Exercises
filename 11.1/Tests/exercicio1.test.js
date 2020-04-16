const caixa = require('./exercicio1');

test ('verifica se letra é maiúscula', () => {
    caixa(testanto, (result) => {
        expect(result).tobe('TESTANDO');
    });
});




// const SumNumbers = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b;
//       callback(result);
//     }, 500)
//   }
  
//   test('Testando SumNumbers, soma 5 mais 10', done => {
//     SumNumbers(5, 10, (result) => {
//       expect(result).toBe(15);
//       done();
//     });
//   })
  