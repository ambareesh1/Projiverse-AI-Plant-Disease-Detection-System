from pydantic import BaseModel

class SignupRequest(BaseModel):
    full_name: str
    email: str
    password: str
    role: str = 'USER'

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = 'bearer'
    role: str
    full_name: str
