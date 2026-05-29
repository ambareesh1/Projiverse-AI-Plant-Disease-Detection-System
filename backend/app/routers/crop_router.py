from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import CropType
from ..schemas.crop_schema import CropCreate
router=APIRouter(prefix='/crops',tags=['Crops'])
@router.get('')
def list_crops(db:Session=Depends(get_db)): return db.query(CropType).all()
@router.post('')
def create(payload:CropCreate,db:Session=Depends(get_db)): c=CropType(**payload.dict()); db.add(c); db.commit(); db.refresh(c); return c
@router.put('/{id}')
def update(id:int,payload:CropCreate,db:Session=Depends(get_db)): c=db.query(CropType).get(id); [setattr(c,k,v) for k,v in payload.dict().items()]; db.commit(); return c
@router.delete('/{id}')
def delete(id:int,db:Session=Depends(get_db)): c=db.query(CropType).get(id); db.delete(c); db.commit(); return {'deleted':True}
