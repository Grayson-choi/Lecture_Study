# Example Input
'''
Welcome to the tip calculator!
What was the total bill? $124.56
How much tip would you like to give? 10, 12, or 15? 12
How many people to split the bill? 7
'''
# Example Output
'''
Each person should pay: $19.93
'''

total_bill = float(input("What was the total bill? $"))
tip = int(input("How much tip would you like to give? 10, 12, or 15?"))
split_people = int(input("How many people to split the bill?"))
result = format((total_bill + tip)/split_people, ".2f")

print("Each person should pay: $" + result)