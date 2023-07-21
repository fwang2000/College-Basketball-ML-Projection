from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)

@app.route("/")
def home():

    df = pd.read_csv("./data/DraftedCollegePlayersDataset.csv")
    return df.head().to_html()

if __name__ == "__main__":
    app.run(debug=True)