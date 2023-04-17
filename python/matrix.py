# n = ["123","234"]
# arr = []

# for j in range(len(n)):
    
#     for i in n[j] :
#        arr.append(i)
      
# print(arr)  

#-------------------------------------------------------------------------------


# #input take of a matrix 

# n = int(input()) # number of input lines 
# matrix = []
# for i in range(0, n) :
#     arr = input().split(" ") 
#     for j in range(0, len(arr)):      #just to convert arr element into int type
#         arr[j] = int(arr[j])         
    
#     matrix.append(arr)
# print(matrix)
#
#-----------------------------------------------------------------------------------------------------

# #print matrix data line by line 

# matrix = [
#     [3 , 4 , 5 , 6],
#     [2, 3 ],
#     [7, 8 , 9]
# ]
# for arr in matrix :
#     for i in arr :
#         print(i , end = " ")
#     print("")

#---------------------------------------------------------------------------------------------------

# # Q1.Finding sum of main & cross diagonals

# # n = no of rows in the matrix
# # next n lines will have n space seperated numbers

# """
# 4
# 3 5 2 1
# 1 1 1 1
# 8 9 6 1
# 7 7 3 4
# """
# #Taking Input
# n = int(input())
# matrix = [] 
# for i in range(n):
#     arr = input().split(" ")
#     for j in range(len(arr)):
#         arr[j] = int(arr[j])
#     matrix.append(arr)
# # Solving
# sum1 = 0 
# sum2 = 0
# for i in range(n):
#     sum1 += matrix[i][i] 
#     sum2 += matrix[i][n-i-1]
# #Output
# print("Main Diagonal: ", sum1 , " Cross Diagonal: ", sum2)

#----------------------------------------------------------------------------------------------------------

# """
# 2 3 5
# 4 5 8

# 2 4
# 3 5
# 5 8
# """
# n = int(input())
# matrix = []
# transponse = []
# #Input taking
# for i in range(n) :
#     arr = input().split(" ")
#     matrix.append(arr)
# #solve
# for j in range(len(matrix[0])):  #print output in array brackets and comas
#     row = [] 
#     for i in range(len(matrix)):
#         row.append(matrix[i][j])
#     transponse.append(row)
# print(transponse)


# for i in range(0,len(matrix[0])):   #print output without array brackets and comas
#     a=[]
#     for j in range(0,n):
#         print(matrix[j][i],end=" ")
#     print("")    

#------------------------------------------------------------------------------------------

# #Q2. Sum of odd places element

# n=int(input())                          
# matrix=[]
# sum=0
# for i in range(0,n):
#     arr=input().split(" ")
#     for  j in range(0,len(arr)):
#         if(j %2==1):
#             sum=sum+int(arr[j])
            
# print(sum)  

#----------------------------------------------------------------------------------------

# #Q1.Change in diagonal of a matrix

# n=int(input())
# matrix=[]
# for i in range(n):
#     arr=input().split(" ")
#     for j in range(len(arr)):
#         arr[j]=int(arr[j])
#     matrix.append(arr)

# for i in range(0,len(matrix)):
#     if(matrix[i][i]<0):
#         matrix[i][i]=0
#     else:
#         matrix[i][i]=1
# print(matrix)    
# 
# --------------------------------------------------------------------------------------------
# x=[2,3,4]
# a=[1,2,3]
# x=a.copy()
# print(x)

