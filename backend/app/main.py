from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from .config import settings
from .database import Base, engine, SessionLocal
from .models import User, CropType, Disease, Prediction
from .utils.security import hash_password
from .routers import auth_router, crop_router, disease_router, prediction_router, ai_router, analytics_router
app=FastAPI(title='AI Plant Disease Detection System', version='1.0.0')
app.add_middleware(CORSMiddleware, allow_origins=[x.strip() for x in settings.cors_origins.split(',')], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])
app.mount('/uploads', StaticFiles(directory='uploads'), name='uploads')
for r in [auth_router.router,crop_router.router,disease_router.router,prediction_router.router,ai_router.router,analytics_router.router]: app.include_router(r, prefix='/api')
@app.on_event('startup')
def startup():
    Base.metadata.create_all(bind=engine); db=SessionLocal(); seed(db); db.close()
@app.get('/')
def root(): return {'message':'AI Plant Disease Detection System API','disclaimer':'Advisory and educational information only.'}
def seed(db):
    crops=['Tomato','Potato','Corn','Rice','Wheat','Grape','Apple','Cotton']
    for c in crops:
        if not db.query(CropType).filter_by(name=c).first(): db.add(CropType(name=c,description=f'{c} crop disease monitoring',status='ACTIVE'))
    db.commit(); crop_map={c.name:c for c in db.query(CropType).all()}
    rows=[('Tomato','Tomato Leaf Blight','Alternaria solani','Brown concentric spots|Yellow halos','Fungal infection|High humidity|Poor air circulation','Remove infected leaves|Avoid overhead watering|Use recommended fungicide after expert consultation','Maintain spacing|Use disease-free seeds|Monitor leaves regularly','Medium'),('Potato','Potato Late Blight','Phytophthora infestans','Water-soaked lesions|White fungal growth','Cool wet weather|Infected seed tubers','Destroy severely infected plants|Improve drainage','Certified seed|Crop rotation','High'),('Corn','Corn Leaf Spot',None,'Oval tan lesions|Brown borders','Residue-borne fungi|Humidity','Remove residue|Balanced nutrition','Rotate crops|Resistant hybrids','Medium'),('Rice','Rice Blast',None,'Diamond lesions|Gray centers','Fungal spores|Excess nitrogen','Manage nitrogen|Drain fields briefly','Resistant varieties|Seed treatment','High'),('Wheat','Wheat Rust',None,'Orange pustules|Yellow streaks','Rust fungus|Wind spread spores','Remove volunteer wheat|Expert-approved fungicide','Resistant cultivars|Field monitoring','Medium'),('Grape','Grape Black Rot',None,'Circular spots|Black fruit lesions','Wet canopy|Fungal overwintering','Prune infected parts|Improve airflow','Sanitation|Monitoring','High'),('Apple','Apple Scab',None,'Olive spots|Scabby lesions','Wet spring|Fungal inoculum','Remove fallen leaves|Expert spray plan','Pruning|Resistant varieties','Medium'),('Cotton','Cotton Leaf Curl',None,'Leaf curling|Vein thickening','Viral infection|Whitefly vector','Manage whiteflies|Remove infected plants','Resistant varieties|Vector monitoring','Critical'),('Tomato','Healthy Leaf',None,'Uniform green color|No lesions','Healthy growth','Continue monitoring','Balanced irrigation|Good hygiene','Low')]
    for crop,name,sci,sym,cau,treat,prev,sev in rows:
        if not db.query(Disease).filter_by(name=name).first(): db.add(Disease(crop_type_id=crop_map[crop].id,name=name,scientific_name=sci,symptoms=sym,causes=cau,treatment=treat,prevention=prev,severity_default=sev,status='ACTIVE'))
    users=[('Admin User','admin@plantcare.com','Admin@123','ADMIN'),('Student User','student@plantcare.com','Student@123','STUDENT'),('Farmer User','farmer@plantcare.com','Farmer@123','USER')]
    for full,email,pw,role in users:
        if not db.query(User).filter_by(email=email).first(): db.add(User(full_name=full,email=email,password_hash=hash_password(pw),role=role))
    db.commit()
    if db.query(Prediction).count()<10:
        diseases=db.query(Disease).all()
        for i,d in enumerate(diseases[:10]): db.add(Prediction(crop_type_id=d.crop_type_id,disease_id=d.id,image_url='/uploads/demo-leaf.jpg',confidence=[91.4,86.2,78.8,66.5,93.1,82.9,74.3,58.2,96.0][i%9],severity=d.severity_default,ai_explanation=f'Mock AI detected symptoms similar to {d.name}.',notes='Seed demo record'))
        db.commit()
