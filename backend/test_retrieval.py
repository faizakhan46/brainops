from app.services.retrieval import search_documents

results = search_documents(
    "What skills does Faiza have?"
)

print()

for i, doc in enumerate(results, 1):
    print("=" * 50)
    print(f"Chunk {i}")
    print("=" * 50)
    print(doc.page_content)
    print()