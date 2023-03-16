# id = 0
# for row in range(15):
#     for col in range(15):
#         print(f"<div data-row='{row}' data-col='{col}' data-id='{id}'>{id}</div>")
#         id+=1

# id = 0
# for row in range(20):
#     for col in range(20):
#         print(f"<img data-row='{row}' data-col='{col}' data-id='{id}'/>")
#         id+=1


# import required module
import os
# assign directory
directory = './assets/Tiles'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        print(f"<img src='{f}'/>")