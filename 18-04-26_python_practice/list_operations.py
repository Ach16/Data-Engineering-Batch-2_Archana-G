#list
numbers=[10,20,30,40,50]
print(numbers)

fruits=["apple","banana","mango","orange"]
print(fruits[0])
print(fruits[2])

#access from the end
print(fruits[-1])
print(fruits[-2])

#modify list
numbers[1]=200
print(numbers)

#add an element
numbers.append(40)
print(numbers)

#insert
numbers.insert(2,300)
print(numbers)

#remove
numbers.remove(30)
print(numbers)

#remove last element
numbers.pop()
print(numbers)

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

#reverse a list
numbers.reverse()
print(numbers)

#sort a list
numbers.sort()
print(numbers)

#aggregation
print(sum(numbers))
print(max(numbers))
print(min(numbers))
