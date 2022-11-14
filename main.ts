pins.digitalWritePin(DigitalPin.P8, 1)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(6000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
