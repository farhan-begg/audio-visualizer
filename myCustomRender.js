
/** Renders radial lines from the center of the canvas
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {Canvas context} ctx 
 * @param {number} canvas center x 
 * @param {number} canvas center y 
 * @param {number} inner radius 
 */



function render(frequencyArray, ctx, centerX, centerY, radius) {
    ctx.clearRect(0, 0, 300, 300)
  
	ctx.beginPath()
	ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI)
    ctx.stroke()
    let color =
    "rgb(" + 100 + ", " + (200 - Math.random()) + ", " + Math.random() + ")";
        
    ctx.strokeStyle = `rgb(
        0,
        ${Math.floor(255 - 42.5 )},
        ${Math.floor(255 - 42.5   )})`

	const bars = frequencyArray.length 
	const barMaxLength = (300 - radius) / 1
	const step = Math.PI * 4 / bars

	// Loop over the data
	frequencyArray.forEach((f, i) => {
		// normalize the value to the range
		const barLength = f / 255 * barMaxLength // 0.0 - 1.0 * barMaxLength
		
		// plot starting and ending points. Map these around a circle
		const x1 = (Math.cos(step * i) * radius) + centerX
		const y1 = (Math.sin(step * i) * radius) + centerY
		const x2 = (Math.cos(step * i) * (radius + barLength)) + centerX
		const y2 = (Math.sin(step * i) * (radius + barLength)) + centerY

		// Things to do
		// ctx.strokeStyle - stroke color
		// ctx.strokeWidth - stroke width
		// ctx.arc(x, y, radius, 0, Math.PI * 2) - draw a cricle at x, y of radius
		// ctx.rect(x, y, width, height) - draw rectangle 
		// ctx.fillStyle - fill color
        // ctx.fill() - fills with style 


		// draw the paths 
		ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2) 
	})
		
	// Stroke the paths
    ctx.stroke()
   
}

export default render
