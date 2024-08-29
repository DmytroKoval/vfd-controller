class vfd {
    constructor(mosi_pin: number, clock_pin: number, cs_pin: number, reset_pin: number){
        pins.spiFrequency(4000000)
        pins.spiFormat(8, 3)
        pins.spiPins(mosi_pin, 0, clock_pin)
    }
}
let display = new vfd(DigitalPin.P11, DigitalPin.P13, DigitalPin.P10, DigitalPin.P8)
basic.forever(function () {
	
})
