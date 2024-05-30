const path = require('path');

module.exports = {
  mode: 'development', // หรือ 'production' หรือ 'none'
  entry: './src/index.js', // จุดเริ่มต้นของไฟล์โค้ด
  output: {
    filename: 'bundle.js', // ชื่อไฟล์ที่ได้จากการบิลด์
    path: path.resolve(__dirname, 'dist') // โฟลเดอร์ที่ไฟล์จะถูกบิลด์ลงไป
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // ใช้ Babel เพื่อแปลงโค้ด JavaScript
        }
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
};
