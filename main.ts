function muestraNumero2Cifras (numero: number) {
    if (numero == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (numero == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (numero == 18) {
        basic.showLeds(`
            # . . # .
            # . # . #
            # . . # .
            # . # . #
            # . . # .
            `)
    } else if (numero == 10) {
        basic.showLeds(`
            # . . # .
            # . # . #
            # . # . #
            # . # . #
            # . . # .
            `)
    } else if (numero == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # . #
            # # # # #
            . # . . #
            . # . . #
            `)
    }
}
basic.forever(function () {
    muestraNumero2Cifras(18)
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # . # # #
        # . . . #
        # . # # #
        # . # . .
        # . # # #
        `)
    basic.showLeds(`
        # . # # #
        # . . . #
        # . . # #
        # . . . #
        # . # # #
        `)
    basic.showLeds(`
        # . # . .
        # . # . #
        # . # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . . . #
        # . # # #
        `)
    basic.showLeds(`
        # . # . .
        # . # . .
        # . # # #
        # . # . #
        # . # # #
        `)
    basic.showLeds(`
        # . # # #
        # . . . #
        # . . # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # . . # .
        # . # . #
        # . . # .
        # . # . #
        # . . # .
        `)
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . # # . #
        # # # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # . #
        # # # . #
        . # # . #
        # # # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # . #
        # # # . #
        . # # . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # . #
        . # # . #
        # # # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # . #
        # # # . #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # . #
        . # # . #
        . # # . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # . #
        . . # . #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # . #
        # # # . #
        . # # . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # . #
        # # # # #
        . # . . #
        . # . . #
        `)
})
