from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from ..config import settings
pwd_context=CryptContext(schemes=['bcrypt'], deprecated='auto')
def hash_password(password:str)->str: return pwd_context.hash(password)
def verify_password(password:str, hashed:str)->bool: return pwd_context.verify(password, hashed)
def create_access_token(data:dict, minutes:int=120):
    payload=data.copy(); payload['exp']=datetime.utcnow()+timedelta(minutes=minutes)
    return jwt.encode(payload, settings.jwt_secret_key, algorithm='HS256')
