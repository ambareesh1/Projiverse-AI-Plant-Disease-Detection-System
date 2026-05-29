from sqlalchemy import Column, Integer, String, DateTime, Text, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
class AIChatHistory(Base):
    __tablename__='ai_chat_history'
    id=Column(Integer,primary_key=True,index=True); user_id=Column(Integer,ForeignKey('users.id'),nullable=True); message=Column(Text); response=Column(Text); context_type=Column(String(60),default='general'); created_at=Column(DateTime,default=datetime.utcnow)
