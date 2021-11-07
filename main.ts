function SetArryDisp (テキスト: string) {
    for (let カウンター = 0; カウンター <= 5; カウンター++) {
        m = テキスト.charAt(カウンター)
        if (m == "0") {
            val = 0
        } else if (m == "1") {
            val = 1
        } else if (m == "2") {
            val = 2
        } else if (m == "3") {
            val = 3
        } else if (m == "4") {
            val = 4
        } else if (m == "5") {
            val = 5
        } else if (m == "6") {
            val = 6
        } else if (m == "7") {
            val = 7
        } else if (m == "8") {
            val = 8
        } else if (m == "9") {
            val = 9
        } else if (m == "a") {
            val = 10
        } else if (m == "b") {
            val = 11
        } else if (m == "c") {
            val = 12
        } else if (m == "d") {
            val = 13
        } else if (m == "e") {
            val = 14
        } else if (m == "f") {
            val = 15
        } else if (m == "g") {
            val = 16
        } else if (m == "h") {
            val = 17
        } else if (m == "i") {
            val = 18
        } else if (m == "j") {
            val = 19
        } else if (m == "k") {
            val = 20
        } else if (m == "l") {
            val = 21
        } else if (m == "m") {
            val = 22
        } else if (m == "n") {
            val = 23
        } else if (m == "o") {
            val = 24
        } else if (m == "p") {
            val = 25
        } else if (m == "q") {
            val = 26
        } else if (m == "r") {
            val = 27
        } else if (m == "s") {
            val = 28
        } else if (m == "t") {
            val = 29
        } else if (m == "u") {
            val = 30
        } else {
            val = 0
        }
        arryDisp[カウンター] = val
    }
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
})
radio.onReceivedString(function (receivedString) {
    SetArryDisp(receivedString)
    LED_Disp(arryDisp)
})
input.onButtonPressed(Button.B, function () {
    SetArryDisp("00000")
    LED_Disp(arryDisp)
})
function LED_Disp (list: any[]) {
    for (let x = 0; x <= 4; x++) {
        b = list[x]
        for (let y = 0; y <= 4; y++) {
            if (b % 2 == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            b = Math.trunc(b / 2)
        }
    }
}
let b: any = null
let val = 0
let m = ""
let arryDisp: number[] = []
radio.setGroup(1)
radio.setFrequencyBand(7)
radio.setTransmitSerialNumber(true)
serial.redirectToUSB()
arryDisp = [
0,
0,
0,
0,
0
]
LED_Disp(arryDisp)
basic.forever(function () {
	
})
