/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    if (points.length == 2) return Math.abs(points[0][0] - points[1][0]);
    let sortedPoints = points.sort((a, b) => a[0] - b[0]);
    let maxVerticalArea = 0;
    for(let i = 0; i < sortedPoints.length - 1; i++) {
        let verticalArea = sortedPoints[i+1][0] - sortedPoints[i][0];
        maxVerticalArea = Math.max(maxVerticalArea, verticalArea);
    }
    return maxVerticalArea;
};
