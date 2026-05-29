from .mock_model import predict
class ModelLoader:
    def __init__(self): self.model=None; self.labels=[]
    def load_tensorflow_model(self, model_path:str):
        # Future-ready hook: import tensorflow/keras here when a trained model is added.
        raise NotImplementedError('TensorFlow/Keras integration is intentionally optional for MVP.')
    def predict(self, crop_type:str, image_path:str): return predict(crop_type)
model_loader=ModelLoader()
