# Tuple
numbers=(10,20,30,40,50)
print(numbers)

fruits=("apple","banana","mango","orange")
print(fruits[0])
print(fruits[2])

#access from the end
print(fruits[-1])
print(fruits[-2])

# Tuples can't be modified as they are immutable
# numbers[1]=200
# print(numbers)

# Tuples can't be modified as they are immutable
# numbers.append(40)
# print(numbers)

# Tuples can't be modified as they are immutable
# numbers.insert(2,300)
# print(numbers)

# Tuples can't be modified as they are immutable
# numbers.remove(30)
# print(numbers)

# Tuples can't be modified as they are immutable
# numbers.pop()
# print(numbers)

#print by iterating
for num in numbers:
    print(num)

#check the existence of a value in a list
if "banana" in fruits:
    print("Banana exists")
if 200 in numbers:
    print("Exists")

#slicing
print(numbers[1:3])

# Tuples can't be modified as they are immutable
# numbers.reverse()
# print(numbers)

# Tuples can't be modified as they are immutable
# numbers.sort()
# print(numbers)

#aggregation
print(sum(numbers))
print(max(numbers))
print(min(numbers))

# packing
students=("Rahul",40,"Alen")
print(students)

# unpacking
name,age,course=students
print(name)
print(age)
print(course)

# Can store heterogeneous data
data=("Hello",23,True,244.22)
print(data)
