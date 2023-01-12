# //Google Question
# //Given an array = [2,5,1,2,3,5,1,2,4]:
# //It should return 2

# //Given an array = [2,1,1,2,3,5,1,2,4]:
# //It should return 1

# //Given an array = [2,3,4,5]:
# //It should return undefined

# def firstRecurringCharacter(array):
    # recurring = {}
    # recurring = []
    # for i in array:
    #     if i not in recurring:
    #         recurring.append(i)
    #     elif i in recurring:
    #         return i
    #         break
    # else:
    #     return "undefined"
    # for i in range(len(array)):
    #     if array[i] not in recurring:
    #         recurring[array[i]] = i
    #     elif array[i] in recurring:
    #         return array[i]
    #         break
    # return "undefined"


# array = [2,5,1,2,3,5,1,2,4]
# array = [2,1,1,2,3,5,1,2,4]
# array = [2,3,4,5]
# array = [2,5,5,2,3,5,1,2,4]
# print(firstRecurringCharacter(array))
