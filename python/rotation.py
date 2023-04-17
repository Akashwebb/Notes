# # Arrays
# arr = input().split(" ") 
# index = int(input())
# num = input()

# ans = [] 
# for i in range(0, len(arr)) :
#     if i == index :
#         ans.append(num)
#     ans.append(arr[i])
# print(ans)


# # Arrays
# arr = input().split(" ") 
# index = int(input())
# num = input()

# for i in range(index , len(arr)) :
#     temp = arr[i]
#     arr[i] = num
#     num= temp 
# arr.append(num)
# print(arr)



# # arr = [3 , 4 ,5 , 8] Rotate array clockwise for once
# arr = input().split(" ")
# num = arr[len(arr) - 1]
# for i in range(0, len(arr)) :
#     temp = arr[i] 
#     arr[i] = num 
#     num = temp 
# print(arr)


# arr = [3 , 4 ,5 , 8] Rotate array clockwise for once
arr = input().split(" ")
n = int(input())

for j in range(0, n):
    num = arr[len(arr) - 1]
    for i in range(0, len(arr)) :
        temp = arr[i] 
        arr[i] = num 
        num = temp 
print(arr)


# # arr = [3 , 4 ,5 , 8] Rotate array clockwise for n times 
# arr = input().split(" ")
# n = int(input()) % len(arr)

# for j in range(0, n):
#     num = arr[len(arr) - 1]
#     for i in range(0, len(arr)) :
#         temp = arr[i] 
#         arr[i] = num 
#         num = temp 
# print(arr)
  