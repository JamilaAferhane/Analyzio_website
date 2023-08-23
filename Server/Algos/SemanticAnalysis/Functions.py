# Importing necessary libraries
from TextConverter import convert_pdf_to_txt
import os.path
import nltk
from nltk.tokenize import sent_tokenize
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
nltk.download('stopwords')
nltk.download('punkt') #it is a dataset that includes pre-trained models and data files from tokenization
from gensim import corpora
from gensim.models import LsiModel

#Load the document function
def load_data(path, file_name):
    """
    Input: Path and file name
    Purpose: Loading text file
    Output: List of sentences of the file
    """
    sentences_list = []
    with open (os.path.join(path, file_name), "r", encoding="utf-8") as fin:
        text = ""
        for line in fin:
            line = line.strip()
            text += line
            if line.endswith('.'):
                sentences_list.append(text)
                text = ""
    return sentences_list

#Preprocessing function for summary
def preprocess_data(sentences_set):
    """
    Input: Sentences list
    Purpose: Preprocess text ( tokenize, removing stopwords, and stemming)
    Output: Preprocessed text
    """
    
    tokenizer = RegexpTokenizer(r'\w+')
    en_stop = set(stopwords.words('english'))
    p_stemmer = PorterStemmer()
    
    texts = []
    
    for i in sentences_set:
        raw = i.lower()
        tokens = tokenizer.tokenize(raw)
        stopped_tokens = [i for i in tokens if not i in en_stop]
        stemmed_tokens = [p_stemmer.stem(i) for i in stopped_tokens]
        texts.append(stemmed_tokens)
    return texts
        
# Preprocessing function for keywords
def preprocess_data_kw(sentences_set):
    """
    Input: Sentences list
    Purpose: Preprocess text ( tokenize, and removing stopwords)
    Output: Preprocessed text for keywords extraction
    """
    
    tokenizer = RegexpTokenizer(r'\w+')
    en_stop = set(stopwords.words('english'))
    kw_texts = []
    
    for i in sentences_set:
        raw = i.lower()
        tokens = tokenizer.tokenize(raw)
        stopped_tokens = [i for i in tokens if not i in en_stop]
        kw_texts.append(stopped_tokens)

    return kw_texts

#Term frequency matrix of the text function
def prepare_corpus(clean_text):
    """ 
    Input: Clean text
    Purpose: Create term dictionary of our corpus and convert list of docs into Document Term Matrix
    Output: Term dictionary and Document Term Matrix    
    """
    dictionary = corpora.Dictionary(clean_text)
    doc_term_matrix = [dictionary.doc2bow(doc) for doc in clean_text]
    return dictionary, doc_term_matrix

#Lsa model  function 
def create_gensim_lsa_model(doc_clean, number_of_topics = 2):
    """ 
    Input: Clean  document, number of topics, and number of words in each topic
    Purpose: Create LSA model using gensim
    Output: return LSA model
    """
    
    dictionary, doc_term_matrix = prepare_corpus(doc_clean)
    
    lsamodel = LsiModel(doc_term_matrix, num_topics=number_of_topics, id2word=dictionary)
    return lsamodel

#Get it all together
def model(pdf_path, txt_path):
    convert_pdf_to_txt(pdf_path, txt_path)
    document_list = load_data("",txt_path)
    clean_text = preprocess_data(document_list)
    dictionary, doc_term_matrix = prepare_corpus(clean_text)
    model= create_gensim_lsa_model(clean_text)
    corpus_lsi = model[doc_term_matrix]
    return document_list, corpus_lsi
    
def takenext(elem):
    return elem[1]

# Sort vectors in descending order of weightage function
def sort_vectors(corpus_lsi):
    vecsSort = list(map(lambda i: list(), range(2))) #output: [[ ], [ ]]
    for i,docv in enumerate(corpus_lsi):
        for sc in docv:
            isent = (i, abs(sc[1]))
            vecsSort[sc[0]].append(isent)
    vecsSort = list(map(lambda x: sorted(x,key=takenext,reverse=True), vecsSort))
    return vecsSort

# Select the sentences for summary function
def selectTopSent(summSize, numTopics, sortedVec):
  topSentences = []
  sent_no = []
  sentInd = set()
  sCount = 0
  for i in range(summSize):
    for j in range(numTopics):
      vecs = sortedVec[j]
      si = vecs[i][0]
      if si not in sentInd:
        sent_no.append(si)
        topSentences.append(vecs[i])
        sentInd.add(si)
        sCount +=1
        if sCount == summSize:
          return sent_no
      
# Summary function
def summary(document_list, topSentences):
    topSentences.sort()
    summary = []
    cnt =0
    for sentence in document_list:
        if cnt in topSentences:
            summary.append(sentence)
        cnt += 1
    summary = " ".join(summary)
    return summary