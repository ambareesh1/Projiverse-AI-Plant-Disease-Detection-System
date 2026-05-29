from sqlalchemy import Column, Integer, String, DateTime, Text, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
class User(Base):
    __tablename__='users'
    id=Column(Integer,primary_key=True,index=True); full_name=Column(String(120)); email=Column(String(180),unique=True,index=True); password_hash=Column(String(255)); role=Column(String(30),default='USER'); created_at=Column(DateTime,default=datetime.utcnow); updated_at=Column(DateTime,default=datetime.utcnow,onupdate=datetime.utcnow)
