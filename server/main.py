from flask import Flask
import pandas as pd


app = Flask(__name__)

@app.route("/")
def home():

    return "hello world"

@app.route("/methodology")
def methodology():

    return "Methodology"

@app.route("/model-basic")
def basic_model():

    return "Basic Model"

if __name__ == "__main__":
    app.run(debug=True)