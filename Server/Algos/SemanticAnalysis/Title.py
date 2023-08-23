def find_title(pdf_path):
    
    pdf_title = pdf_path.split('\\')[-1].split('.')[0]
    return pdf_title