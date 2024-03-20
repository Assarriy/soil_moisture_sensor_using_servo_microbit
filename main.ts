let Soil = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Soil = Math.idiv(pins.analogReadPin(AnalogPin.P1), 10)
    serial.writeValue("Humid", Soil)
    if (Soil <= 98) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Sad)
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
