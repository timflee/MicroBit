def on_button_pressed_a():
    global count
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
    count += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    music.play_tone(523, music.beat(BeatFraction.SIXTEENTH))
    count += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

count = 0
music.play_melody("C5 G B A F A C5 B ", 1000)

def on_forever():
    basic.show_number(count)
    if count % 3 == 0:
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
