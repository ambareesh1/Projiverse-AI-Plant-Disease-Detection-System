import os
from dotenv import load_dotenv
load_dotenv()
class Settings:
    database_url = os.getenv('DATABASE_URL','sqlite:///./plantcare.db')
    jwt_secret_key = os.getenv('JWT_SECRET_KEY','change-this-secret')
    openrouter_api_key = os.getenv('OPENROUTER_API_KEY','')
    openrouter_model = os.getenv('OPENROUTER_MODEL','openai/gpt-4o-mini')
    cors_origins = os.getenv('CORS_ORIGINS','http://localhost:5173,http://127.0.0.1:5173')
settings = Settings()
