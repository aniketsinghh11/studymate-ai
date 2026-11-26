from ai.embeddings import create_embeddings
from ai.vector_store import get_collection


def retrieve_chunks(question, top_k=2, document=None):
    """
    Find the most relevant chunks for the user's question.
    If a document name is given, search only that document.
    """

    question_embedding = create_embeddings([question])[0]

    collection = get_collection()

    query_args = {
        "query_embeddings": [question_embedding],
        "n_results": top_k,
    }

    if document:
        query_args["where"] = {"document": document}

    results = collection.query(**query_args)

    retrieved_chunks = []

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]

    for doc_text, metadata in zip(documents, metadatas):
        retrieved_chunks.append({
            "text": doc_text,
            "metadata": metadata
        })

    return retrieved_chunks