from app.services.pdf_loader import load_pdf
from app.services.text_splitter import split_text
from app.services.vector_store import get_vector_store

text = load_pdf("uploads/49ca65f0-0352-4fe3-b6d9-5fc4be8af0b0_FaizaKhan_Resume_.pdf ")
chunks = split_text(text)
vector_store = get_vector_store()
vector_store.add_texts(chunks)

print("Stored", len(chunks), "chunks in ChromaDB")