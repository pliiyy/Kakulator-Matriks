import React, { useState } from 'react';

const MatrixCalculator = () => {
  const [matrix1, setMatrix1] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [matrix2, setMatrix2] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [operation, setOperation] = useState('add');

  const updateMatrix1 = (row, col, value) => {
    const newMatrix = [...matrix1];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrix1(newMatrix);
  };

  const updateMatrix2 = (row, col, value) => {
    const newMatrix = [...matrix2];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrix2(newMatrix);
  };

  const calculateResult = () => {
    let calculatedResult = [
      [0, 0],
      [0, 0],
    ];

    switch (operation) {
      case 'add':
        calculatedResult = matrix1.map((row, i) =>
          row.map((val, j) => val + matrix2[i][j])
        );
        break;
      case 'subtract':
        calculatedResult = matrix1.map((row, i) =>
          row.map((val, j) => val - matrix2[i][j])
        );
        break;
      case 'multiply':
        calculatedResult = [
          [
            matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0],
            matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1],
          ],
          [
            matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0],
            matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1],
          ],
        ];
        break;
      default:
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-800 via-blue-800 to-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-all">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-white tracking-widest drop-shadow-lg">
        MATRIKS CALCULATOR
      </h1>
      <h2 className="text-4xl font-bold mb-8 text-center text-white tracking-widest drop-shadow-lg">
        By Rafly Andrian
      </h2>
      

      <div className="grid grid-cols-3 gap-12 items-center mb-8">
        {/* Matrix 1 */}
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <h3 className="text-center text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Matrix A
          </h3>
          {matrix1.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-4">
              {row.map((value, colIndex) => (
                <input
                  key={colIndex}
                  type="number"
                  value={value}
                  onChange={(e) => updateMatrix1(rowIndex, colIndex, e.target.value)}
                  className="w-20 h-20 p-4 text-center text-xl font-semibold bg-gray-50 text-gray-800 rounded-lg shadow-inner border-4 border-blue-500 focus:ring-4 focus:ring-pink-400 focus:outline-none transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Operation Selector */}
        <div className="text-center">
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="p-4 mb-6 text-lg font-bold text-gray-800 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full shadow-lg focus:ring-4 focus:ring-yellow-400 transition-all transform hover:scale-110"
          >
            <option value="add">Tambah (+)</option>
            <option value="subtract">Kurangi (-)</option>
            <option value="multiply">Kalikan (×)</option>
          </select>
          <button
            onClick={calculateResult}
            className="w-32 py-3 bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-all focus:ring-4 focus:ring-pink-300"
          >
            Hitung
          </button>
        </div>

        {/* Matrix 2 */}
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <h3 className="text-center text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Matrix B
          </h3>
          {matrix2.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-4">
              {row.map((value, colIndex) => (
                <input
                  key={colIndex}
                  type="number"
                  value={value}
                  onChange={(e) => updateMatrix2(rowIndex, colIndex, e.target.value)}
                  className="w-20 h-20 p-2 text-center text-xl font-semibold bg-gray-50 text-gray-800 rounded-lg shadow-inner border-4 border-pink-500 focus:ring-4 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="p-6 rounded-xl shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <h3 className="text-center text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
          Hasil
        </h3>
        {result.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4">
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className="w-40 h-20 p-2 text-center text-4xl font-semibold bg-yellow-100 text-yellow-800 rounded-lg shadow-lg border-4 border-yellow-500 transform hover:scale-110 transition-all"
              >
                {Number.isInteger(value) ? value : value.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixCalculator;
