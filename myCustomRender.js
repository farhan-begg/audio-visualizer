
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
	var gradient = ctx.createLinearGradient(0, 0, 170, 0);
	gradient.addColorStop("0", "pink");
	gradient.addColorStop("0.5" ,"teal");
	gradient.addColorStop("1", "purple");
	// gradient.addColorStop("0.5", "white");

	ctx.lineWidth = 10;

	ctx.beginPath()
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
	ctx.strokeStyle = gradient;
		// ctx.stroke()
    // ctx.strokeStyle = `rgb(
    //     0,
    //     ${Math.floor(255 - 42.5 )},
    //     ${Math.floor(255 - 42.5   )})`

	const bars = frequencyArray.length 
	const barMaxLength = (600 - radius) / 2
	const step = Math.PI * 40 / bars 




	
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
