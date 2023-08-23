from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from Functions import load_data, preprocess_data_kw
from TextConverter import convert_pdf_to_txt
def extract_keywords(pdf_path,txt_path, num_keywords=5):
    """
    Input: Text with the number of keywords
    Purpose: Extracting keywords from the text
    Output: Keywords
    
    """
    convert_pdf_to_txt(pdf_path, txt_path)
    document_list = load_data("",txt_path)
    text = preprocess_data_kw(document_list)
    tokens = [token for sublist in text for token in sublist ]
    
    tf_vectorizer = CountVectorizer()
    tfidf_transformer = TfidfTransformer()
    
    tf_matrix = tf_vectorizer.fit_transform([' '.join(tokens)])
    tfidf_matrix = tfidf_transformer.fit_transform(tf_matrix)
    
    feature_names = tf_vectorizer.get_feature_names_out()
    tfidf_scores = tfidf_matrix.toarray()[0]
    
    keywords = [feature_names[idx] for idx in tfidf_scores.argsort()[-num_keywords:][::-1]]
    
    return keywords