let randomNumber = () => Math.floor(Math.random() * 100) + 1;

const isDivisible = (number) => (randomNumber() % number) === 0;

test('quando aleatorio é divisivel pelo numero do paramentro', () => {
    randomNumber = jest.fn();
    isDivisible(2);
    expect(randomNumber).toHaveBeenCalled();
});
