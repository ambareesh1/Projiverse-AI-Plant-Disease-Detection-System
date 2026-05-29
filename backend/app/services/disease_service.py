from ..models import Disease
def list_diseases(db): return db.query(Disease).all()
