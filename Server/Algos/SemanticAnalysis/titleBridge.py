import sys
from Title import find_title

pdf_path = sys.argv[1]  
try:
    title = find_title(pdf_path)
    print(title)
except Exception as e:
    print("Error finding title:", str(e))
