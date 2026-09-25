


from pypdf import PdfReader

from ai.ingestion import ingest_chunks
from ai.retrieval import retrieve_chunks
from ai.generation import generate_answer
# ============================================
# 1. CONFIGURATION
# ============================================




# ============================================
# 2. INITIALIZE MODELS / DATABASE
# ============================================







# ============================================
# 3. PDF TEXT EXTRACTION
# ============================================

# PDF extraction is handled by Node/pdf-parse.
# For this first combined test, we use the
# extracted text from our existing test PDF.

def extract_pdf_pages(pdf_path):
    reader = PdfReader(pdf_path)

    pages = []

    for page_number, page in enumerate(reader.pages, start=1):
        page_text = page.extract_text()

        if page_text:
            pages.append({
                "page": page_number,
                "text": page_text
            })

    print("PDF text extracted successfully!")
    print("Total pages:", len(pages))

    return pages

# ============================================
# 4. CHUNKING
# ============================================

def create_chunks(pages, document, chunk_size=300, overlap=50):
    chunks = []

    for page in pages:
        words = page["text"].split()
        start = 0
        chunk_number = 1

        while start < len(words):
            end = min(start + chunk_size, len(words))

            chunk_text = " ".join(words[start:end])

            chunks.append({"text": chunk_text,"page": page["page"],"chunk": chunk_number,"document": document})

            if end == len(words):
                break

            start = end - overlap
            chunk_number += 1

    return chunks

def process_pdf(pdf_path):
    print("\nProcessing PDF...")

    pages = extract_pdf_pages(pdf_path)

    chunks = create_chunks(
        pages,
        pdf_path
    )

    print("Total chunks:", len(chunks))

    stored_count = ingest_chunks(chunks)

    return pages, chunks





# ============================================
# 7. USER QUESTION
# ============================================

def answer_question(question):
    retrieved_chunks = retrieve_chunks(
        question,
        top_k=2
    )

    answer = generate_answer(
        question,
        retrieved_chunks
    )

    return {
        "answer": answer,
        "sources": retrieved_chunks
    }

# ============================================
# 9. RETRIEVE RELEVANT CHUNKS
# ============================================



# ============================================
# 12. FINAL ANSWER
# ============================================

