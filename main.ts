input.onButtonPressed(Button.A, function () {
    countB += -5
})
input.onButtonPressed(Button.B, function () {
    countB += 5
})
let countB = 20
let countA = 0
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(countB % 255)
strip.showRainbow(1, countB % 360)
datalogger.deleteLog(datalogger.DeleteType.Fast)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let tempLog = datalogger.createCV("Temp", input.temperature())
basic.forever(function () {
    strip.setBrightness(countB % 64)
    strip.showRainbow(1, Math.round(Math.map(countB % 64, 0, 64, 0, 360)))
    if (countB % 3 == 0) {
    	
    } else {
    	
    }
})
basic.forever(function () {
	
})
