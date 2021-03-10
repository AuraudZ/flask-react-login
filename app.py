from flask import Flask
from flask_cors import CORS
import flask_sqlalchemy
import flask_praetorian
import os


db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
app = Flask(__name__)
CORS(app)

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}

@app.route('/user')
def list():
    return{'result': "Fag"}

@app.route('/skeet')
def skeet():
    return