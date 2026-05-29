from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..services.analytics_service import overview
router=APIRouter(prefix='/analytics',tags=['Analytics'])
@router.get('/overview')
def overview_route(db:Session=Depends(get_db)): return overview(db)
@router.get('/disease-distribution')
def disease_distribution(): return [{'name':'Tomato Leaf Blight','value':32},{'name':'Potato Late Blight','value':24}]
@router.get('/crop-distribution')
def crop_distribution(): return [{'name':'Tomato','value':28},{'name':'Potato','value':18}]
@router.get('/prediction-trends')
def trends(): return [{'day':'Mon','predictions':12},{'day':'Tue','predictions':19}]
@router.get('/severity-breakdown')
def severity(): return [{'name':'Low','value':35},{'name':'Medium','value':42},{'name':'High','value':18},{'name':'Critical','value':5}]
