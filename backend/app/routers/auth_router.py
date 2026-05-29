from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..schemas.auth_schema import SignupRequest, LoginRequest
from ..services.auth_service import signup, login
router=APIRouter(prefix='/auth',tags=['Auth'])
@router.post('/signup')
def signup_route(payload:SignupRequest, db:Session=Depends(get_db)): return signup(db,payload)
@router.post('/login')
def login_route(payload:LoginRequest, db:Session=Depends(get_db)): return login(db,payload)
@router.get('/me')
def me(): return {'full_name':'Demo User','email':'demo@plantcare.com','role':'USER'}
