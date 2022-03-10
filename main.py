def muestraNumero2Cifras(numero: number):
    if numero == 17:
        basic.show_leds("""
            # . # # #
                        # . . . #
                        # . . # .
                        # . . # .
                        # . . # .
        """)
    elif numero == 19:
        basic.show_leds("""
            # . # # #
                        # . # . #
                        # . # # #
                        # . . . #
                        # . . . #
        """)
    elif numero == 18:
        basic.show_leds("""
            # . . # .
                        # . # . #
                        # . . # .
                        # . # . #
                        # . . # .
        """)
    elif numero == 10:
        basic.show_leds("""
            # . . # .
                        # . # . #
                        # . # . #
                        # . # . #
                        # . . # .
        """)
    elif numero == 11:
        basic.show_leds("""
            # . . # .
                        # . . # .
                        # . . # .
                        # . . # .
                        # . . # .
        """)
    else:
        basic.show_leds("""
            # # # # #
                        # # # . #
                        # # # # #
                        . # . . #
                        . # . . #
        """)

def on_forever():
    muestraNumero2Cifras(18)
basic.forever(on_forever)
