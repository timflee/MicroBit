input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    countA += 1
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    countB += 1
})
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
strip.showRainbow(1, 360)
let countB = 0
let countA = 0
datalogger.deleteLog(datalogger.DeleteType.Fast)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let tempLog = datalogger.createCV("Temp", input.temperature())
basic.forever(function () {
    basic.showNumber(countB)
    if (countB % 3 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    datalogger.log(tempLog)
})
