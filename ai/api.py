from fastapi import FastAPI
from pydantic import BaseModel

from ai.rag_pipeline import answer_question


app = FastAPI()


class QuestionRequest(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "StudyMate AI API is running"
    }


@app.post("/ask")
def ask_question(request: QuestionRequest):

    result = answer_question(
        request.question
    )

    return result