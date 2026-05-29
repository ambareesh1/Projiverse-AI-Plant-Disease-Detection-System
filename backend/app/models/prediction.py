from sqlalchemy import Column, Integer, String, DateTime, Text, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
class Prediction(Base):
    __tablename__='predictions'
    id=Column(Integer,primary_key=True,index=True); user_id=Column(Integer,ForeignKey('users.id'),nullable=True); crop_type_id=Column(Integer,ForeignKey('crop_types.id')); disease_id=Column(Integer,ForeignKey('diseases.id'),nullable=True); image_url=Column(String(255)); confidence=Column(Float); severity=Column(String(30)); ai_explanation=Column(Text); notes=Column(Text,nullable=True); created_at=Column(DateTime,default=datetime.utcnow); crop_type=relationship('CropType'); disease=relationship('Disease')
class AuditLog(Base):
    __tablename__='audit_logs'
    id=Column(Integer,primary_key=True); action=Column(String(80)); entity_type=Column(String(80)); entity_id=Column(Integer); description=Column(Text); created_at=Column(DateTime,default=datetime.utcnow)
