import requests
from ..config import settings

SYSTEM_PROMPT = """You are PlantCare AI Assistant inside the AI Plant Disease Detection System.
Do not guarantee disease diagnosis. Do not replace agriculture expert advice. Provide simple practical guidance.
For severe disease or large crop loss, recommend consulting a local agriculture expert. Explain AI/ML concepts in student-friendly language.
Avoid unsafe or excessive chemical recommendations."""

def mock_response(message: str) -> str:
    m = message.lower()
    if 'viva' in m:
        return 'Sample viva: What is CNN? A CNN is a neural network that learns image features using convolution filters. Why use it? Leaf disease detection depends on color, texture, and spot patterns. Always mention predictions are advisory.'
    if 'architecture' in m or 'api' in m:
        return 'Architecture: React + TypeScript frontend calls FastAPI REST APIs. FastAPI validates uploads, stores records in SQLite/PostgreSQL-ready SQLAlchemy models, calls mock ML service, and returns advisory results. OpenRouter is backend-only.'
    if 'treatment' in m:
        return 'Suggested safe steps: isolate affected plants if possible, remove infected leaves, avoid overhead watering, improve airflow, and consult a local agriculture expert before chemical treatment.'
    return 'PlantCare AI demo response: upload a clear leaf image, review confidence and severity, follow prevention tips, and consult a local agriculture expert for serious crop damage. This is educational advisory information only.'

def chat(message: str):
    if not settings.openrouter_api_key:
        return {'response': mock_response(message), 'mode': 'mock', 'safety_note': 'AI assistant is running in demo mode because API key is not configured.'}
    try:
        r = requests.post(
            'https://openrouter.ai/api/v1/chat/completions',
            headers={'Authorization': f'Bearer {settings.openrouter_api_key}'},
            json={'model': settings.openrouter_model, 'messages': [{'role': 'system', 'content': SYSTEM_PROMPT}, {'role': 'user', 'content': message}]},
            timeout=20,
        )
        r.raise_for_status()
        return {'response': r.json()['choices'][0]['message']['content'], 'mode': 'openrouter', 'safety_note': 'Advisory only; consult an agriculture expert for severe damage.'}
    except Exception:
        return {'response': mock_response(message), 'mode': 'mock', 'safety_note': 'AI API failed, so demo fallback was used.'}
