let wasser = 0
let Feuchte = 0
let Temperatur = 0
pins.servoWritePin(AnalogPin.P1, 180)
pins.servoWritePin(AnalogPin.P2, 180)
basic.showString("lala")
basic.forever(function () {
    Feuchte = 0
    Temperatur = 0
    if (Feuchte > 550) {
        wasser = 1
        basic.showIcon(IconNames.Chessboard)
    } else {
        wasser = 0
        basic.showIcon(IconNames.Happy)
    }
    if (Temperatur < 495) {
        pins.servoWritePin(AnalogPin.P1, 45)
    } else {
        pins.servoWritePin(AnalogPin.P1, 180)
    }
})
control.inBackground(function () {
    if (wasser != 0) {
        motors.motorPower(100)
        basic.setLedColor(0x007fff)
    } else {
        motors.motorCommand(MotorCommand.Coast)
        basic.turnRgbLedOff()
    }
})
