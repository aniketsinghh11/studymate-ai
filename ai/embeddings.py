from sentence_transformers import SentenceTransformer

print("Loading embedding model...")

model = SentenceTransformer("all-MiniLM-L6-v2")


def create_embeddings(texts):
    """
    Convert a list of text chunks into embedding vectors.
    """

    embeddings = model.encode(texts)

    return embeddings.tolist()