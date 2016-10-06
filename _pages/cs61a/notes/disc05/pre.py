def world(series):
    if len(series) % 2 == 0:
        series[0] = series[:2]
        return [series.pop(1)]
    else:
        return series[:2]


blue_jays = [1, 2, 3, 4]
cardinals = world(blue_jays)
cubs = world(blue_jays)
royals = world(cubs)
