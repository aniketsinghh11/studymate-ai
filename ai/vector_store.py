import chromadb

COLLECTION_NAME = "study_documents"

client = chromadb.PersistentClient(
    path="./chroma_data"
)


def get_collection():
    """
    Get or create the ChromaDB collection.
    """

    collection = client.get_or_create_collection(
        name=COLLECTION_NAME
    )

    return collection


def store_chunks(chunks, embeddings):
    """
    Store text chunks, embeddings and metadata in ChromaDB.
    """

    collection = get_collection()

    ids = [
    f"{chunk['document']}_chunk_{i + 1}"
    for i, chunk in enumerate(chunks)
]

    documents = [
        chunk["text"]
        for chunk in chunks
    ]

    metadatas = [
        {
            "document": chunk.get("document", "unknown"),
            "page": chunk.get("page", 0),
            "chunk": chunk.get("chunk", i + 1)
        }
        for i, chunk in enumerate(chunks)
    ]

    collection.add(
        ids=ids,
        documents=documents,
        embeddings=embeddings,
        metadatas=metadatas
    )

    return collection.count()