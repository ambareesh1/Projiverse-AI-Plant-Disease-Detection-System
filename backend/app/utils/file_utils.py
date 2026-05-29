from pathlib import Path
from fastapi import UploadFile, HTTPException
import uuid
ALLOWED={'image/jpeg':'.jpg','image/png':'.png','image/webp':'.webp'}; MAX=5*1024*1024
async def save_upload(file:UploadFile, upload_dir:Path)->str:
    if file.content_type not in ALLOWED: raise HTTPException(400,'Only JPG, PNG, and WEBP images are supported.')
    data=await file.read()
    if len(data)>MAX: raise HTTPException(400,'Please upload an image smaller than 5MB.')
    upload_dir.mkdir(parents=True, exist_ok=True); name=f"{uuid.uuid4().hex}{ALLOWED[file.content_type]}"; path=upload_dir/name; path.write_bytes(data); return f"/uploads/{name}"
