
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof (matrix) === 'undefined')
        return [];

    for(let i = 0;i<matrix.length;i++){
        if(i%2!==0 || i ===1){
            matrix[i].reverse();
        }
    }
    return matrix.flat(Infinity);
}
