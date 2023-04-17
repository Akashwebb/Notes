# def func():         #function define by  *def*  keyword
#     print("hello")
# func()               #calling a functing func

#-------------------------------------------------------------------------------------------

# def add(a,b):         #parameter paaing
#     return a+b
# add(20,30)
# print(add(10,20))    #argument

#----------------------------------------------------------------------------------------------
# #Q1.Search element in array
#  
# a = [3 , 8 , 10, 23 ]
# b = [5 ,7 , 2 ]
# c = [100, 345 , 657, 890]
# n = int(input()) 
# def  search(arr , n ):            #function starts
#     for i in arr :
#         if n == i :
#             return True 
#     return False 
# if(search(a , n)) :               #calling function with a array and search element
#     print("One")
# elif(search(b , n)):               #calling function with b array and search element
#     print("two")
# elif(search(c, n)) :
#     print("Three")
# else :
#     print("Not found")

#-------------------------------------------------------------------------------------------

#In JS only non primitive data type are store in heap memory 
#primitive data type are store in call stack
# store data can be changed

# a=10
# function fun(){
#     a=90
#     print(a)
# }
# fun()             //90 
# console.log(a)    //90   coz value of a changed from 10 to 90

#In PYTHON , all data are store in heap
# a=10
# def fun(){
#     a=90
#     print(a)
# }
# fun()             //90 
# print(a)          //10    coz value store in heap 

#we have "id" in PYTHON which give memory location of element
# not in JS

#JS is scripting language
#PYTHON is high level programming language


