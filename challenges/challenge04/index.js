function fitsInOneBox(boxes) {
return boxes.every(({l,w,h},index) => {
    if(index === boxes.length -1 )return true
    const next=boxes[index+1] || {};
    return (next.l > l && next.w > w && next.h > h) || (next.l < l && next.w < w && next.h < h)
    })
}

module.exports = fitsInOneBox 