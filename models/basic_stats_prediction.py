import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.compose import ColumnTransformer, make_column_transformer
from sklearn.multiclass import OneVsRestClassifier
from sklearn.dummy import DummyClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_validate, cross_val_score, train_test_split, RandomizedSearchCV
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import StandardScaler

def mean_std_cross_val_scores(model, X_train, y_train, **kwargs):
    """
    Returns mean and std of cross validation

    Parameters
    ----------
    model :
        scikit-learn model
    X_train : numpy array or pandas DataFrame
        X in the training data
    y_train :
        y in the training data

    Returns
    ----------
        pandas Series with mean scores from cross_validation
    """

    scores = cross_validate(model, X_train, y_train, **kwargs)

    mean_scores = pd.DataFrame(scores).mean()
    std_scores = pd.DataFrame(scores).std()
    out_col = []

    for i in range(len(mean_scores)):
        out_col.append((f"%0.3f (+/- %0.3f)" % (mean_scores[i], std_scores[i])))

    return pd.Series(data=out_col, index=mean_scores.index)

college_players_df = pd.read_csv("./data/DraftedCollegePlayersDataset.csv")

basic_college_stats_df = college_players_df[["player_name", "pts", "treb", "ast", "blk", "stl", "player_tier"]]

train_df, test_df = train_test_split(basic_college_stats_df, test_size=0.33, random_state=42, stratify=basic_college_stats_df["player_tier"])

numeric_features = ["pts", "treb", "ast", "blk", "stl"]
target = "player_tier"

X_train, y_train = train_df.drop(columns=["player_name", "player_tier"]), train_df["player_tier"]
X_test, y_test = test_df.drop(columns=["player_name", "player_tier"]), test_df["player_tier"]

preprocessor = make_column_transformer(
    (StandardScaler(), numeric_features),
)

preprocessor.fit_transform(X_train)

results_dict = {}

models = {
    "dummy": DummyClassifier(),
    "decision tree": DecisionTreeClassifier(),
    "RBF SVM": SVC(),
    "logistic regression": LogisticRegression(),
    "random forest": RandomForestClassifier()
}

for key, value in models.items():
    
    pipe = make_pipeline(preprocessor, OneVsRestClassifier(value))
    results_dict[key] = mean_std_cross_val_scores(pipe, X_train, y_train, return_train_score=True)

print(pd.DataFrame(results_dict))