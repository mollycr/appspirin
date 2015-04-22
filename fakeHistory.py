#we want our output to look like this:
# { "1428256251":1, "1428356251":2, "1428456251":3, "1428542651":4}

from random import randint

json = open("history.json", "w")

start = 1427846400
day = 86400
json.write("{")

x = 29
while(x>0):
	json.write('"' + str(start) + '":' + str(randint(0,5)) + ',')
	start = start + day
	x = x-1

json.write('"' + str(start) + '":' + str(randint(0,5)))

json.write("}")
json.close()
