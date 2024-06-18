from fastapi import FastAPI
import schemas.Predictor as Predictor
app = FastAPI()

app.add_api_route(Predictor.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}




