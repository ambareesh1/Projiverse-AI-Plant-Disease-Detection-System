from sqlalchemy import Column, Integer, String, DateTime, Text, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
class CropType(Base):
    __tablename__='crop_types'
    id=Column(Integer,primary_key=True,index=True); name=Column(String(80),unique=True,index=True); description=Column(Text); status=Column(String(30),default='ACTIVE'); created_at=Column(DateTime,default=datetime.utcnow)
