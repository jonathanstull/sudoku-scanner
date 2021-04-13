import SudoRow1 from './../src/sudoku.js';

describe('SudoRow1', () => {
  let reusableSudoRow1;

  beforeEach(() => {
    reusableSudoRow1 = new SudoRow1(1, 2, 3, 4, 5, 6, 7, 8, 9);
  });

  it('should create an object with a row array containing nine keys', () => {
    expect(reusableSudoRow1.row1[0].toEqual(1));
  });

  it('should check to see that a row array contains numbers', () => {
    expect(reusableSudoRow1.verify).toEqual(expect.any(Number));
  });

  
});

// describe('Sudoku', () => {

//   it('should create a Sudoku object', () => {
//     const sudoku = new sudoku

//   });
// });