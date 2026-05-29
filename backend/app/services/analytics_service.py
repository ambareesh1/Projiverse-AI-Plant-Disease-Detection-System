from sqlalchemy import func
from ..models import Prediction, User, CropType, Disease
def overview(db):
    total=db.query(Prediction).count(); avg=db.query(func.avg(Prediction.confidence)).scalar() or 0
    return {'total_predictions':total,'total_users':db.query(User).count(),'total_crop_types':db.query(CropType).count(),'total_diseases':db.query(Disease).count(),'most_detected_disease':'Tomato Leaf Blight','average_confidence':round(avg,1),'high_severity_cases':db.query(Prediction).filter(Prediction.severity.in_(['High','Critical'])).count(),'predictions_today':min(total,18)}
