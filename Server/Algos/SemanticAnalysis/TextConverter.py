import PyPDF2
def convert_pdf_to_txt(pdf_path, txt_path):
    
    with open(pdf_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        text_content =''
        
        # Determine the presence of sections like abstract, introduction, conclusion, or references in the file
        start_page = None
        end_page = None
        
        for i, page in enumerate(pdf_reader.pages):
            page_text = page.extract_text()
            if not start_page :
                for section in [ 'Abstract\n', 'ABSTRACT','Abstract:', 'Abstract :', 'Abstract', 'Introduction\n', 'INTRODUCTION', 'Introduction :', 'Introduction:']:
                    if section in page_text:
                        start_page = i
                        start_section = section
                        # print(f'An {start_section} section is founded in the {start_page} th page')

            if not end_page:
                for section in ['References\n', 'REFERENCES','References:', 'References :', 'Bibliography\n', 'BIBLIOGRAPHY', 'Bibliography :', 'Bibliography:', 'Conclusion\n', 'CONCLUSION', 'Conclusion :', 'Conclusion:']:
                    if section in page_text:
                        end_page = i
                        end_section = section
                        # print(f'A {end_section} section is founded in the {i} th page')
                
        next_title = None     
        for i, page in enumerate(pdf_reader.pages):
            
            if i== start_page:
                text_content += page.extract_text().split(start_section, 1)[1]
                # print(f'Everything before the {start_section} section is not included')
            
            elif (start_page is None or i>start_page) and (end_page is None or i<end_page):
                text_content += page.extract_text()
                # print('An entire page is added')
            

            elif i==end_page:
                page_text = page.extract_text()
                if end_section in ['Conclusion\n', 'CONCLUSION', 'Conclusion:', 'Conclusion :']:
                    conclusion_start_index = page_text.index(end_section)
                    next_title_index = -1
                    for title in ['Acknowledgements','ACKNOWLEDGEMENTS','Acknowledgement','ACKNOWLEDGEMENT', 'Acknowledgments'
                                  ,'ACKNOWLEDGMENTS','Acknowledgment','ACKNOWLEDGMENT', 'Appendix', 'APPENDIX','References',
                                  'REFERENCES', 'Bibliography', 'BIBLIOGRPHY', 'Works Cited', 'WORKS CITED', 'Appendices',
                                  'APPENDICES', 'Glossary', 'GLOSSARY','Index', 'List of Figures', 'List of Tables',
                                  'About the Author(s)', 'Notes', 'INDEX', 'LIST OF FIGURES', 'LIST OF TABLES',
                                  'ABOUT THE AUTHOR(S)', 'NOTES', 'About the author', 'ABOUT THE AUTHOR',
                                  'acknowledgements', 'acknowledgements', 'acknowledgement', 'acknowledgement',
                                  'acknowledgments','acknowledgments', 'acknowledgment', 'acknowledgment', 'appendix',
                                  'appendix', 'references','references', 'bibliography', 'bibliography', 'works cited',
                                  'works cited', 'appendices', 'appendices', 'glossary', 'glossary', 'index',
                                  'list of figures', 'list of tables', 'about the author(s)', 'notes', 'index',
                                  'list of figures', 'list of tables', 'about the author(s)', 'notes', 'about the author']:
                        #conclusion_start_index: The starting index from which the search should begin within
                        title_index = page_text.find(title, conclusion_start_index)
                        if title_index != -1 and (next_title_index == -1 or title_index < next_title_index):
                            next_title_index = title_index
                            next_title = title
                    # print (f'The next title after the conclusion is {next_title}')
                    if next_title_index != -1:
                        text_content += page_text[:next_title_index].strip()
                    else:
                        text_content += page_text
                elif (end_section is None):
                    text_content += page_text
                else:
                    text_content += page_text.split(end_section, 1)[0]
                    # print(f'Everything after {end_section} title is not included')

        text_content = text_content.strip()
        text_content = text_content.replace('\n', ' ')
        text_content = text_content.replace('.', '.\n')
        with open(txt_path, 'w', encoding='utf-8') as txt_file:
            txt_file.write(text_content)
            