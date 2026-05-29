from pydantic import BaseModel

class CropCreate(BaseModel):
    name: str
    description: str = ''
    status: str = 'ACTIVE'

class CropResponse(CropCreate):
    id: int
    class Config:
        from_attributes = True
