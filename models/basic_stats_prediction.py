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
from sklearn.model_selection import cross_validate, cross_val_score, train_test_split, RandomizedSearchCV, GridSearchCV
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import StandardScaler
from scipy.stats import uniform, loguniform

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

pipe_dummy = make_pipeline(preprocessor, OneVsRestClassifier(DummyClassifier()))
results_dummy = mean_std_cross_val_scores(pipe_dummy, X_train, y_train, return_train_score=True)

'''
fit_time       0.007 (+/- 0.001)
score_time     0.003 (+/- 0.000)
test_score     0.349 (+/- 0.007)
train_score    0.349 (+/- 0.002)
'''

pipe_dt = make_pipeline(preprocessor, OneVsRestClassifier(DecisionTreeClassifier()))
param_dict_dt = {"onevsrestclassifier__estimator__max_depth": np.arange(1, 28, 2)}
best_model_dt = RandomizedSearchCV(pipe_dt, param_dict_dt, n_jobs=-1, cv=4, return_train_score=True, random_state=123)
best_model_dt.fit(X_train, y_train)

results_dt = pd.DataFrame(best_model_dt.cv_results_)[
    [
        "mean_test_score",
        "mean_train_score",
        "param_onevsrestclassifier__estimator__max_depth",
        "mean_fit_time",
        "rank_test_score",
    ]
].set_index("rank_test_score").sort_index().T

'''
rank_test_score                                        1         2         3   ...        8         9         10
mean_test_score                                  0.308738  0.303863   0.28504  ...  0.247058  0.244654  0.244632
mean_train_score                                 0.402208  0.519367       1.0  ...  0.802009   0.97227  0.917649
param_onevsrestclassifier__estimator__max_depth         1         3        23  ...         7        11         9
mean_fit_time                                     0.02422  0.028316  0.051658  ...   0.04403  0.059817   0.05212
'''

pipe_svm = make_pipeline(preprocessor, OneVsRestClassifier(SVC()))
param_dict_svm = {
    "onevsrestclassifier__estimator__C": loguniform(1e-3, 1e3),
    "onevsrestclassifier__estimator__gamma": loguniform(1e-3, 1e3)
}
best_model_svm = RandomizedSearchCV(pipe_svm, param_dict_svm, n_jobs=-1, cv=4, return_train_score=True, random_state=123)
best_model_svm.fit(X_train, y_train)
results_svm = pd.DataFrame(best_model_svm.cv_results_)[
    [
        "mean_test_score",
        "mean_train_score",
        "param_onevsrestclassifier__estimator__C",
        "param_onevsrestclassifier__estimator__gamma",
        "mean_fit_time",
        "rank_test_score",
    ]
].set_index("rank_test_score").sort_index().T

'''
rank_test_score                                    1          1           3   ...         8         9         10
mean_test_score                               0.33969    0.33969     0.31597  ...   0.242251  0.161478  0.130615
mean_train_score                                  1.0        1.0         1.0  ...   0.811563  0.209024   0.20426
param_onevsrestclassifier__estimator__C      0.114569   0.244492  766.628906  ...  20.740242  0.012444   0.42799
param_onevsrestclassifier__estimator__gamma  23.67545  26.789983   12.852228  ...   0.345652   0.01129  0.002281
mean_fit_time                                0.078559   0.086506    0.081414  ...   0.063902  0.038903  0.040432
'''

pipe_lr = make_pipeline(preprocessor, OneVsRestClassifier(LogisticRegression()))
param_dict_lr = {"onevsrestclassifier__estimator__C": loguniform(1e-3, 1e3)}
best_model_lr = RandomizedSearchCV(pipe_lr, param_dict_lr, n_jobs=-1, cv=4, return_train_score=True, random_state=123)
best_model_lr.fit(X_train, y_train)
results_lr = pd.DataFrame(best_model_lr.cv_results_)[
    [
        "mean_test_score",
        "mean_train_score",
        "param_onevsrestclassifier__estimator__C",
        "mean_fit_time",
        "rank_test_score",
    ]
].set_index("rank_test_score").sort_index().T

'''
rank_test_score                                1          2          2   ...        8         9         10
mean_test_score                          0.349236   0.344474   0.344474  ...  0.327853  0.325449  0.323068
mean_train_score                         0.372139   0.391928   0.391928  ...  0.383218  0.384803  0.384798
param_onevsrestclassifier__estimator__C  0.022967  15.094374  20.740242  ...    0.0521  0.345652  0.225271
mean_fit_time                            0.040408    0.04179   0.042996  ...  0.040655  0.039471   0.03516
'''

pipe_rf = make_pipeline(preprocessor, OneVsRestClassifier(RandomForestClassifier()))
rf_max_depth = [int(x) for x in np.linspace(10, 110, num = 11)]
rf_max_depth.append(None)
param_dict_rf = {
    'onevsrestclassifier__estimator__n_estimators': [int(x) for x in np.linspace(start = 200, stop = 2000, num = 10)],
    'onevsrestclassifier__estimator__max_features': ['sqrt', 'log2', None],
    'onevsrestclassifier__estimator__max_depth': rf_max_depth
}
best_model_rf = RandomizedSearchCV(pipe_rf, param_dict_rf, n_jobs=-1, cv=4, return_train_score=True, random_state=123)
best_model_rf.fit(X_train, y_train)
results_rf = pd.DataFrame(best_model_rf.cv_results_)[
    [
        "mean_test_score",
        "mean_train_score",
        "param_onevsrestclassifier__estimator__n_estimators",
        "param_onevsrestclassifier__estimator__max_features",
        "param_onevsrestclassifier__estimator__max_depth",
        "mean_fit_time",
        "rank_test_score",
    ]
].set_index("rank_test_score").sort_index().T

'''
rank_test_score                                            1          2          3   ...         8         9          10
mean_test_score                                      0.282682   0.282682   0.282659  ...    0.27792  0.277875     0.2708 
mean_train_score                                          1.0        1.0        1.0  ...        1.0       1.0        1.0 
param_onevsrestclassifier__estimator__n_estimators        400        800        600  ...       1000      1000        400 
param_onevsrestclassifier__estimator__max_features       log2       sqrt       sqrt  ...       log2      log2       log2 
param_onevsrestclassifier__estimator__max_depth            90         20        110  ...         50        60         20 
mean_fit_time                                       10.760844  31.583362  33.067003  ...  42.481819  53.12086  14.712059 
'''