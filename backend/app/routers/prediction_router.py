from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from pathlib import Path
from ..database import get_db
from ..utils.file_utils import save_upload
from ..services.prediction_service import analyze, to_response
from ..models import Prediction

router = APIRouter(prefix='/predictions', tags=['Predictions'])

@router.post('/analyze')
async def analyze_route(image: UploadFile = File(...), crop_type: str = Form(...), notes: str | None = Form(None), db: Session = Depends(get_db)):
    image_url = await save_upload(image, Path('uploads'))
    return analyze(db, crop_type, image_url, notes)

@router.get('')
def list_route(db: Session = Depends(get_db)):
    return [to_response(p) for p in db.query(Prediction).order_by(Prediction.created_at.desc()).all()]

@router.get('/user/{user_id}')
def user_route(user_id: int, db: Session = Depends(get_db)):
    return [to_response(p) for p in db.query(Prediction).filter(Prediction.user_id == user_id).all()]

@router.get('/{prediction_id}')
def get_route(prediction_id: int, db: Session = Depends(get_db)):
    return to_response(db.query(Prediction).get(prediction_id))

@router.delete('/{prediction_id}')
def delete_route(prediction_id: int, db: Session = Depends(get_db)):
    p = db.query(Prediction).get(prediction_id)
    db.delete(p)
    db.commit()
    return {'deleted': True}
