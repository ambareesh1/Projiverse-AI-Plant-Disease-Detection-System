from pathlib import Path
from ..ml.model_loader import model_loader
from ..models import Prediction
from ..repositories.crop_repository import get_or_create_crop
from ..repositories.disease_repository import disease_by_name
def to_response(p, mock=None):
    d=p.disease; crop=p.crop_type
    causes=(d.causes.split('|') if d and d.causes else (mock or {}).get('possibleCauses',[]))
    treatment=(d.treatment.split('|') if d and d.treatment else (mock or {}).get('treatmentSuggestions',[]))
    prevention=(d.prevention.split('|') if d and d.prevention else (mock or {}).get('preventionTips',[]))
    return {'id':p.id,'cropType':crop.name if crop else 'Unknown','diseaseName':d.name if d else (mock or {}).get('diseaseName','Unknown'),'confidence':p.confidence,'severity':p.severity,'imageUrl':p.image_url,'possibleCauses':causes,'treatmentSuggestions':treatment,'preventionTips':prevention,'aiExplanation':p.ai_explanation,'notes':p.notes,'createdAt':p.created_at}
def analyze(db, crop_type, image_url, notes=None):
    mock=model_loader.predict(crop_type, image_url); crop=get_or_create_crop(db,crop_type); disease=disease_by_name(db,mock['diseaseName'])
    p=Prediction(crop_type_id=crop.id,disease_id=disease.id if disease else None,image_url=image_url,confidence=mock['confidence'],severity=mock['severity'],ai_explanation=mock['aiExplanation'],notes=notes)
    db.add(p); db.commit(); db.refresh(p); return to_response(p,mock)
