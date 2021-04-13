import SudoRow1 from './../src/sudoku.js';

describe('SudoRow1', () => {
  let reusableSudoRow1;

  beforeEach(() => {
    reusableSudoRow1 = new SudoRow1(1, 2, 3, 4, 5, 6, 7, 8, 9);
  });

  it('should create an object with a row array containing nine keys', () => {
    expect(sudoRow1[0]).toEqual(1);
    expect(sudoRow1[1]).toEqual(2);
    expect(sudoRow1[2]).toEqual(3);
    expect(sudoRow1[3]).toEqual(4);
    expect(sudoRow1[4]).toEqual(5);
    expect(sudoRow1[5]).toEqual(6);
    expect(sudoRow1[6]).toEqual(7);
    expect(sudoRow1[7]).toEqual(8);
    expect(sudoRow1[8]).toEqual(9);
  });

  // it('should check to see that a row object has numbers in it', () => {

});

// describe('Sudoku', () => {

//   it('should create a Sudoku object', () => {
//     const sudoku = new sudoku

//   });
// });