input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    count += -1
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    count += 1
})
let count = 0
datalogger.deleteLog(datalogger.DeleteType.Fast)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let tempLog = datalogger.createCV("Temp", input.temperature())
basic.forever(function () {
    basic.showNumber(count)
    if (count % 3 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    datalogger.log(tempLog)
})
