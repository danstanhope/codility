function solution(X, Y, D) {
    var jumps = (Y - X) / D;
    
    return Math.ceil(jumps);
}
