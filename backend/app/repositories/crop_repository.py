from ..models import CropType
def get_or_create_crop(db,name):
    crop=db.query(CropType).filter(CropType.name==name).first()
    if not crop:
        crop=CropType(name=name,description=f'{name} crop type'); db.add(crop); db.commit(); db.refresh(crop)
    return crop
