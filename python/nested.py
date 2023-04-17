# a=int(input())
# for i in range(1,a+1):
#     for j in range(1,i+1):
#         print(j,end=" ")  #end make to print next output in same line
#     print(" ")    

# 
#               1  
#               1 2  
#               1 2 3
#               1 2 3 4   
# n=4
# for i in range(0,n):
#     for j in range(1,i+1):
#         print(j,end=" ")
        
#     print(" ") 
# 
# -------------------------------------------------------------------------------------------   

#               1
#               2 3
#               4 5 6
#               7 8 9 10

# a=int(input())
# num=1                 #take this variable to increase after each iteration
# for i in range(0,a):
#     for j in range(0,i+1):
#         print(num,end=" ")
#         num=num+1
#     print(" ")  
# 
# -------------------------------------------------------------------------------------------------
# 
#        1
#       1 2
#      1 2 3
#     1 2 3 4


# n=4
# for i in range(1,n+1):
#     for j in range(i,n+1):
#         print(end=" ")
#     for k in range(1,i+1):
#         print(k,end=" ")
#     print(" ")     
# 
# -------------------------------------------------------------------------------------
# 
#        1
#      1 2
#    1 2 3
#  1 2 3 4 
#    
# n=4
# k=2*n-2                #coz total 8 space in last line including *number and *blankspace
# for i in range(1,n+1):
#     for j in range(1,k+1):
#         print(end=" ")
#     k=k-2    
#     for j in range(1,i+1):
#         print(j,end=" ")
#     print(" ")   