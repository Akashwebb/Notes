# arr= map(int,input().split())  #input as array with space separated
# sum=0
# print(arr)

#-----------------------------------------------------------------------------------------

# a=["loveislove" , "lovehurts"]
# for j in range(len(a)):
#     arr=[]
#     for i in a[j]:
#         arr.append(i)
#     print(arr)


# ---------------------------------------------------------------------------------------

# for i in arr:
#     if(int(i)%2==0):       #      **checking element ,not the index**
#         sum=sum+int(i)
# print(sum) 
# 
# ---------------------------------------------------------------------------------------------------  

# for i in range(0,len(arr)):  
#     x=int(arr[i])           #       **taking index now , not element**
#     if(x%2==0):
#         sum=sum+x
# print(sum) 
# 
# ---------------------------------------------------------------------------------------------------- 
# 
# arr=[1,2,3,4,5,2]
# arr.append(6)        #add element at last , 
# print(arr)  
# arr.insert(2,9)      #add element at particular index i.e  at 2nd index,insert 9
# print(arr) 

# arr.remove(2)
# arr.remove(2)         #remove particular element i.e  remove 2 element from arr
# print(arr)
# arr.pop(3)            #remove element from particular index if argument is given
# print(arr)
# arr.pop()             #remove element from last if no argument
# print(arr)
#
#----------------------------------------------------------------------------------------------------
#
# Q1. Add val=54  at 2nd index and no value from a[] should lose :

# a=[3,5 ,8, 9, 4]
# index=2
# val=54
# n=len(a)
# for i in range(index,n):
#     temp=a[i]
#     a[i]=val
#     val=temp
# a.append(val)
# print(a)   
# 
# ------------------------------------------------------------------------------------------------------
# 
# arr=[2,3,"akash",2.16]
# print(arr) 

#----------------------------------------------------------------------------------------------
# #Q1. Reverse string for palindrome

# a= input()
# b=a [::-1]       #THIS IS USE TO REVERSE A STRING
# print(a)
# print(b)

#-------------------------------------------------------------------------------------

#TO PRINT NUMBER OF LINES IN STRING

# a = '''Lorem ipsum dolor sit amet,
# consectetur adipiscing elit,
# sed do eiusmod tempor incididunt
# ut labore et dolore magna aliqua.'''
# print(a)

#-------------------------------------------------------------------------------------------

# a="hello my name is "akash""        # error and we cant print it coz akash in double quotes
# a="hello my name is \"akash\""      #use \"  \"   to print double quote in string
# print(a)

#----------------------------------------------------------------------------------------------

#looping through string

# for x in "ana":            #o/p     #a
#     print(x)                        #n
#                                      #a

#---------------------------------------------------------------------------------------------
#
#SLICING

# a="hello world"
# x=len(a)                     
# print(x)                        #11
# print(a[1:4])                   #ell
# print(a[2:])                    #llo world
# print(a[::-1])                  #dlrow olleh

#---------------------------------------------------------------------------------------------------

# a="hello world"
# print(a.count("l"))                     #count() --> count number of same characters in string

# print(a.find("o"))                      #find() --> find the index of any particular character , 
#                                              return -1 if not exist

# print(a.replace("hello","akash"))        #replace()--> replace string 

# print(a.replace("l","z"))                #replace character

# print(a[2])                              #print element of 2nd index          
# a[2]="j"                                  #we cant replace character of string in this way
# print(a)                                  #error

#------------------------------------------------------------------------------------------------------









