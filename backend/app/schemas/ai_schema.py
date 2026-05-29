from pydantic import BaseModel
class ChatRequest(BaseModel): message:str; context_type:str='general'; prediction_id:int|None=None
class ChatResponse(BaseModel): response:str; mode:str='mock'; safety_note:str
