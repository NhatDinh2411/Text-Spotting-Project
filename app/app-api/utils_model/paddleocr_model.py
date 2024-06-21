import mlflow
import numpy as np
from PIL import Image
import dagshub
dagshub.init(repo_owner='nhatminh297', repo_name='scenetext_mlops', mlflow=True)


mlflow.set_tracking_uri("https://dagshub.com/nhatminh297/scenetext_mlops.mlflow")
logged_model = 'runs:/97a1af2fa82a4d8c84af7b09bd136ef4/paddleocr'
loaded_model = mlflow.pyfunc.load_model(logged_model)

def predict(image: Image.Image):
    image = np.asarray(image.convert('RGB'))
    return loaded_model.predict(image)