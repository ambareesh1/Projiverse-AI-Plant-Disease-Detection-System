from pydantic import BaseModel
from datetime import datetime
class PredictionResponse(BaseModel):
    id:int; cropType:str; diseaseName:str; confidence:float; severity:str; imageUrl:str; possibleCauses:list[str]; treatmentSuggestions:list[str]; preventionTips:list[str]; aiExplanation:str; notes:str|None=None; createdAt:datetime
