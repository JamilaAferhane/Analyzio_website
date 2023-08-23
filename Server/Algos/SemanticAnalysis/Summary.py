from Functions import model, sort_vectors, selectTopSent,summary,preprocess_data_kw
# from Keywords import extract_keywords
# from Title import find_title

def generate_summary(pdf_path, txt_path):
    document_list, lsi_corpus = model(pdf_path, txt_path)
    vecsSort = sort_vectors(lsi_corpus)
    top_sentences = selectTopSent(8,2,sortedVec=vecsSort)
    final_summary = summary(document_list, top_sentences)
    return final_summary

# final_summary = generate_summary('../tests/test.pdf', '../tests/tejst.txt')
# print('Summary')
# print(final_summary)