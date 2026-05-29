from pydantic import BaseModel
class Overview(BaseModel): total_predictions:int; total_users:int; total_crop_types:int; total_diseases:int; most_detected_disease:str; average_confidence:float; high_severity_cases:int; predictions_today:int
