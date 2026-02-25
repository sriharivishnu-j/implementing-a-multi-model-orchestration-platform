from fastapi import FastAPI

app = FastAPI()

@app.get('/model-status')
async def model_status():
    return {"status": "Model service is active"}
