def initVFD(mosi_pin: number, clock_pin: number, cs_pin: number, reset_pin: number):
    pins.spi_pins(mosi_pin, 0, clock_pin)
pins.spi_frequency(4000000)
pins.spi_format(8, 3)
initVFD(DigitalPin.P12,
    DigitalPin.P13,
    DigitalPin.P10,
    DigitalPin.P8)

def on_forever():
    pass
basic.forever(on_forever)
