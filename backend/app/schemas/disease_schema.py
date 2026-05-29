from pydantic import BaseModel

class DiseaseCreate(BaseModel):
    crop_type_id: int
    name: str
    scientific_name: str | None = None
    symptoms: str
    causes: str
    treatment: str
    prevention: str
    severity_default: str = 'Medium'
    status: str = 'ACTIVE'

class DiseaseResponse(DiseaseCreate):
    id: int
    class Config:
        from_attributes = True
