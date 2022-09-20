def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    music.play_tone(523, music.beat(BeatFraction.SIXTEENTH))
    count += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

count = 0
datalogger.delete_log(datalogger.DeleteType.FAST)
datalogger.include_timestamp(FlashLogTimeStampFormat.MILLISECONDS)
tempLog = datalogger.create_cv("Temp", input.temperature())

def on_forever():
    basic.show_number(count)
    if count % 3 == 0:
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
