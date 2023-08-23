import sys
import os
from Keywords import extract_keywords

pdf_path = sys.argv[1]  
pdf_base_name = os.path.basename(pdf_path)
txt_path = pdf_base_name.replace('.pdf', '.txt')
try:
    keywords = extract_keywords(pdf_path, txt_path)
    print(keywords)
except Exception as e:
    print("Error generating keywords:", str(e))
