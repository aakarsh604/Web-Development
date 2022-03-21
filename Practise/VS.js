function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  var mat = [];
  for (var i = 0; i < tc; i++) {
    var N = Number(input[line]);
    line++;
    for (var j = 0; j < N; j++) {
      mat.push(input[line].trim().split(" ").map(Number));
      line++;
    }
    rectMatrix(N,mat);
  }
}

function rectMatrix(N, mat) {
  for ( var i = 0; i < N ; i++)
  {
    var bag = "";
    for ( j = 0 ; j < N ; j++ )
    {
      bag += mat[i][j] + 1 + " ";
    }
    console.log(bag);
  }
}

if (process.env.USERNAME === "HP") {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  2
  1 2
  3 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
