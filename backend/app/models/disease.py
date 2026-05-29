from sqlalchemy import Column, Integer, String, DateTime, Text, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
class Disease(Base):
    __tablename__='diseases'
    id=Column(Integer,primary_key=True,index=True); crop_type_id=Column(Integer,ForeignKey('crop_types.id')); name=Column(String(160)); scientific_name=Column(String(160),nullable=True); symptoms=Column(Text); causes=Column(Text); treatment=Column(Text); prevention=Column(Text); severity_default=Column(String(30)); status=Column(String(30),default='ACTIVE'); created_at=Column(DateTime,default=datetime.utcnow); crop_type=relationship('CropType')
