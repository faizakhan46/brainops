from app.services.vector_store import get_vector_store


def search_documents(query: str, k: int = 5):
    vector_db = get_vector_store()

    docs = vector_db.similarity_search(
        query,
        k=k
    )

    return docs