from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/methodology")
def methodology():

    return render_template("methodology.html")

@app.route("/model-basic")
def basic_model():

    return "Basic Model"

if __name__ == "__main__":
    app.run(debug=True)