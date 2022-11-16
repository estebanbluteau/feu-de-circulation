input.onButtonPressed(Button.A, function () {
    etat_pieton = 1
})
let etat_pieton = 0
pins.digitalWritePin(DigitalPin.P16, 1)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (etat_pieton == 1) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        etat_pieton = 0
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    basic.pause(8000)
})
