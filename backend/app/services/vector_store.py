from langchain_chroma import Chroma

from app.services.embedding_service import get_embeddings

vector_db = Chroma(
    collection_name="brainops",
    persist_directory="chroma",
    embedding_function=get_embeddings(),
)

def get_vector_store():
    return vector_db