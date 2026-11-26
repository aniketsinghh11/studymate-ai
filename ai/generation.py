import os
from google import genai


gemini = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"]
)


def generate_answer(question, retrieved_chunks):
    """
    Generate an answer using only the retrieved study material.
    """

    if not retrieved_chunks:
        return "I could not find the answer in the uploaded study material."

    study_material = []

    for item in retrieved_chunks:
        metadata = item["metadata"]

        study_material.append(
            f"[Page {metadata['page']}, "
            f"Chunk {metadata['chunk']}]\n"
            f"{item['text']}"
        )

    context = "\n\n".join(study_material)

    prompt = f"""
You are StudyMate AI.

Answer the user's question ONLY using the study
material provided below.

Do not use outside knowledge.

If the answer is not present in the study material,
say exactly:

"I could not find the answer in the uploaded study material."

Study Material:
{context}

Question:
{question}

Answer:
"""

    interaction = gemini.interactions.create(
        model="gemini-3.6-flash",
        input=prompt
    )

    return interaction.output_text