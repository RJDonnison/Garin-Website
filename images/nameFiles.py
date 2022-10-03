import os

folderPath = r'D:/Websites/School/schoolwebsite/images/backgrounds/'

fileSequence = 1

for filename in os.listdir(folderPath):
    os.rename(folderPath + filename, folderPath + str(fileSequence) + ".jpg")
    print("File renamed")
    fileSequence += 1
