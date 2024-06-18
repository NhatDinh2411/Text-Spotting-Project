from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
import io
from PIL import Image
import utils.glass_model as glass_model

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type.")
    try:
        image = Image.open(io.BytesIO(await file.read()))
        prediction = glass_model.predict(image)  
        return {"prediction": prediction.tolist()} 
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {e}")
