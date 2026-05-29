from ..models import Prediction
def list_predictions(db): return db.query(Prediction).order_by(Prediction.created_at.desc()).all()
