from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from pydantic import BaseModel
from ai.rag_pipeline import answer_question

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
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

class ChunkData(BaseModel):
    text: str
    page: int
    chunk: int
    document: str

class EmbedRequest(BaseModel):
    chunks: list[ChunkData]

@app.post("/embed")
def embed_chunks(request: EmbedRequest):
    from ai.ingestion import ingest_chunks

    chunks_list = [chunk.dict() for chunk in request.chunks]
    stored_count = ingest_chunks(chunks_list)

    return {
        "stored": stored_count
    }