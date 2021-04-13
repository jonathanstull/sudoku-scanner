import SudoRow1 from './../src/sudoku.js';

describe('SudoRow1', () => {

  it('should create a row object with nine keys', () => {
    const sudoRow1 = new SudoRow(1, 2, 3, 4, 5, 6, 7, 8, 9)
    expect(sudoRow1.obj11).toEqual(1);
    expect(sudoRow1.obj12).toEqual(2);
    expect(sudoRow1.obj13).toEqual(3);
    expect(sudoRow1.obj14).toEqual(4);
    expect(sudoRow1.obj15).toEqual(5);
    expect(sudoRow1.obj16).toEqual(6);
    expect(sudoRow1.obj17).toEqual(7);
    expect(sudoRow1.obj18).toEqual(8);
    expect(sudoRow1.obj19).toEqual(9);
  });
});

// describe('Sudoku', () => {

//   it('should create a Sudoku object', () => {
//     const sudoku = new sudoku

//   });
// });