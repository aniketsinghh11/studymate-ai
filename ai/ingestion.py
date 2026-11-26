from ai.embeddings import create_embeddings
from ai.vector_store import store_chunks


def ingest_chunks(chunks):
    """
    Receive document chunks, create embeddings,
    and store them in ChromaDB.
    """

    if not chunks:
        print("No chunks received.")
        return 0

    print("Creating embeddings...")

    embeddings = create_embeddings(
        [chunk["text"] for chunk in chunks]
    )

    print(
        "Embedding dimensions:",
        len(embeddings[0])
    )

    stored_count = store_chunks(
        chunks,
        embeddings
    )

    print(
        "Stored chunks:",
        stored_count
    )

    return stored_count