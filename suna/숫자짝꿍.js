function solution(X, Y) {
    let nums = "";
    let x = X.split("")
    let y = Y.split("")
    for (let i = 9; i >= 0; i--) {
        filterX = x.filter(a => i == a).length;
        filterY = y.filter(a => i == a).length
        if (filterX + filterY > 0) {
            nums += String(i).repeat(Math.min(filterX, filterY))
        }
    }
    return nums == "" ? "-1" : nums[0] == "0" ? "0" : nums;
}