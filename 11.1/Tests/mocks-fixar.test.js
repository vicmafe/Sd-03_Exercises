function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function isDivisible (number) {
    return (randomNumber() % number) === 0;
}

test('quando aleatorio é divisivel pelo numero do paramentro', () => {
    randomNumber = jest.fn();
    isDivisible(1);
    expect(randomNumber).toHaveBeenCalled();
});
