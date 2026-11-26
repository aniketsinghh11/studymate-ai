import os
from concurrent.futures import ThreadPoolExecutor, TimeoutError as FutureTimeout
from google import genai


gemini = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"]
)

MODELS = [
    "gemini-3.5-flash-lite",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    
]


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

    def call_model(model_name):
        interaction = gemini.interactions.create(
            model=model_name,
            input=prompt
        )
        return interaction.output_text

    for model_name in MODELS:
        executor = ThreadPoolExecutor(max_workers=1)
        future = executor.submit(call_model, model_name)

        try:
            return future.result(timeout=15)
        except FutureTimeout:
            print(f"Gemini model {model_name} timed out after 15 seconds")
        except Exception as error:
            print(f"Gemini model {model_name} failed: {error}")
        finally:
            executor.shutdown(wait=False)

    return "The AI service is busy right now. Please try again in a minute."