import SudoRow1 from './../src/sudoku.js';

describe('SudoRow1', () => {
  let reusableSudoRow1;

  beforeEach(() => {
    reusableSudoRow1 = new SudoRow1(1, 2, 3, 4, 5, 6, 7, 8, 9);
  });

  it('should create an object with a row array containing nine keys', () => {
    expect(reusableSudoRow1.row1[0]).toEqual(1);
    expect(reusableSudoRow1.row1[1]).toEqual(2);
    expect(reusableSudoRow1.row1[2]).toEqual(3);
    expect(reusableSudoRow1.row1[3]).toEqual(4);
    expect(reusableSudoRow1.row1[4]).toEqual(5);
    expect(reusableSudoRow1.row1[5]).toEqual(6);
    expect(reusableSudoRow1.row1[6]).toEqual(7);
    expect(reusableSudoRow1.row1[7]).toEqual(8);
    expect(reusableSudoRow1.row1[8]).toEqual(9);
  });

  it('should check to see that a row array contains numbers', () => {
    expect(reusableSudoRow1.row1[0]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[1]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[2]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[3]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[4]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[5]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[6]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[7]).toEqual(expect.any(Number));
    expect(reusableSudoRow1.row1[8]).toEqual(expect.any(Number));
  });

  
});

// describe('Sudoku', () => {

//   it('should create a Sudoku object', () => {
//     const sudoku = new sudoku

//   });
// });