from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Disease
from ..schemas.disease_schema import DiseaseCreate

router = APIRouter(prefix='/diseases', tags=['Diseases'])

@router.get('')
def list_diseases(db: Session = Depends(get_db)):
    return db.query(Disease).all()

@router.get('/by-crop/{crop_type_id}')
def by_crop(crop_type_id: int, db: Session = Depends(get_db)):
    return db.query(Disease).filter(Disease.crop_type_id == crop_type_id).all()

@router.get('/{id}')
def get_disease(id: int, db: Session = Depends(get_db)):
    return db.query(Disease).get(id)

@router.post('')
def create(payload: DiseaseCreate, db: Session = Depends(get_db)):
    d = Disease(**payload.dict())
    db.add(d)
    db.commit()
    db.refresh(d)
    return d

@router.put('/{id}')
def update(id: int, payload: DiseaseCreate, db: Session = Depends(get_db)):
    d = db.query(Disease).get(id)
    for k, v in payload.dict().items():
        setattr(d, k, v)
    db.commit()
    return d

@router.delete('/{id}')
def delete(id: int, db: Session = Depends(get_db)):
    d = db.query(Disease).get(id)
    db.delete(d)
    db.commit()
    return {'deleted': True}
