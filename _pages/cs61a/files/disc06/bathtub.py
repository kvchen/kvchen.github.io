def bathtub(n):
    def ducky_annihilator(rate):
        def ducky():
            nonlocal n
            n -= rate
            print(str(n) + " rubber duckies left")

        return ducky
    return ducky_annihilator

