# Reading a file
with open("names.txt", "r") as file:
    for line in file:
        print(line.strip())

# Operation in numeric data file
total=0
with open("nums.txt", "r") as file:
    for line in file:
        total+=int(line.strip())
print("Total: ",total)

# Counting the lines
with open("names.txt", "r") as file:
    students = file.readlines()
print("Total students: ",len(students))

# Writing in a file
# write() overwrites everything in the file
with open("names.txt", "w") as file:
    file.write("Sam\n")
    file.write("Bob\n")
    file.write("Mary\n")

# append
with open("names.txt", "a") as file:
    file.write("Alex\n")

# write multiple lines
languages = ["Python\n", "Ruby\n", "Java\n"]
with open("names.txt", "w") as file:
    file.writelines(languages)