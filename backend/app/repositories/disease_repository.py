from ..models import Disease
def disease_by_name(db,name): return db.query(Disease).filter(Disease.name==name).first()
