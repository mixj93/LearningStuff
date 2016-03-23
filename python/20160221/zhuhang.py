#!/usr/bin/python
import re
file = open("3erd.pdb")

arr = []

while 1:
	line = file.readline()
	arr.append(line)

	if not line:
		break
	pass

# print arr

# search keyword in each line
def searchLine(keywords):
    for index in range(len(arr)):
        hasKeywords = True
        for i in range(len(keywords)):
            hasKeywords = hasKeywords and arr[index].find(keywords[i])>0

        if hasKeywords:
            infoArr = re.split('\s+', arr[index])
            # print ("line: ")
            # print (index + 1)
            # print (arr[index])
            s = [float(infoArr[6]), float(infoArr[7]), float(infoArr[8])]
            # print ("x: " + infoArr[6], "y: " + infoArr[7], "z: " + infoArr[8])
            return s

a = searchLine([" N ", " SER ", " 305 "])
b = searchLine([" A ", " HIS ", " 398 "])
print a, b
