let temp = 0
let celsisus = 0
let farenhight = 0
basic.forever(function () {
    temp = input.temperature()
    celsisus = input.temperature()
    farenhight = celsisus * (1.8 + 32)
    led.plotBarGraph(
    input.temperature(),
    50
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(temp)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(farenhight)
    }
})
