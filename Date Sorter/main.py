from datetime import date

today = date.today()
strToday = str(today)
big = strToday.split("-")
d = big[2] + big[1] +big[0]

print("today is " + d)

