from fastapi import APIRouter
from ..schemas.ai_schema import ChatRequest
from ..services.ai_service import chat
router=APIRouter(prefix='/ai',tags=['AI'])
@router.post('/chat')
def chat_route(payload:ChatRequest): return chat(payload.message)
@router.post('/explain-prediction')
def explain(payload:ChatRequest): return chat('Explain this prediction: '+payload.message)
@router.post('/generate-viva')
def viva(): return chat('Generate viva questions')
@router.post('/generate-project-abstract')
def abstract(): return chat('Generate project abstract')
@router.post('/explain-model')
def model(): return chat('Explain CNN model workflow')
