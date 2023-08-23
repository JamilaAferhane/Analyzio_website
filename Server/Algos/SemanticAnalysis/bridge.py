import sys
import os
from Summary import generate_summary

pdf_path = sys.argv[1]  # Get the PDF path from the command-line argument
pdf_base_name = os.path.basename(pdf_path)
txt_path = pdf_base_name.replace('.pdf', '.txt')
try:
    final_summary = generate_summary(pdf_path, txt_path)
    print(final_summary.encode('utf-8'))
except Exception as e:
    print("Error generating summary:", str(e))
