from ai.embeddings import create_embeddings
from ai.vector_store import get_collection


def retrieve_chunks(question, top_k=2):
    """
    Find the most relevant chunks for the user's question.
    """

    # Question ko embedding mein convert karo
    question_embedding = create_embeddings([question])[0]

    # ChromaDB collection lo
    collection = get_collection()

    # Similar chunks search karo
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=top_k
    )

    retrieved_chunks = []

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]

    for document, metadata in zip(documents, metadatas):
        retrieved_chunks.append({
            "text": document,
            "metadata": metadata
        })

    return retrieved_chunks