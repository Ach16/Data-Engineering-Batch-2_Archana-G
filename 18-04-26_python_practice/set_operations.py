# Set
numbers=[1,2,3,4,5,6,7,8,9]
print(numbers)

# Removes duplicate values and contains only unique values
numbers={1,2,4,3,2,5,3,6}
print(numbers)

# List to set
numbers=[10,20,30,20,40,30]
unique_set=set(numbers)
print(unique_set)

# Update
numbers={10,20}
numbers.update([30,40,50])
print(numbers)

set1={10,20,30}
set2={30,40,50}

# union
result=set1.union(set2)
print(result)

# difference
result=set1.difference(set2)
print(result)

# intersection
result=set1.intersection(set2)
print(result)