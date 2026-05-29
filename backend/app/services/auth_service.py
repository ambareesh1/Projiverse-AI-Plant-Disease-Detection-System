from fastapi import HTTPException
from ..models import User
from ..utils.security import hash_password, verify_password, create_access_token
def signup(db, payload):
    if db.query(User).filter(User.email==payload.email).first(): raise HTTPException(400,'Email already registered')
    user=User(full_name=payload.full_name,email=payload.email,password_hash=hash_password(payload.password),role=payload.role); db.add(user); db.commit(); db.refresh(user); return user
def login(db, payload):
    user=db.query(User).filter(User.email==payload.email).first()
    if not user or not verify_password(payload.password,user.password_hash): raise HTTPException(401,'Invalid credentials')
    return {'access_token':create_access_token({'sub':user.email,'role':user.role}),'token_type':'bearer','role':user.role,'full_name':user.full_name}
