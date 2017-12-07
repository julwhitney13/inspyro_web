from flask import Flask, render_template, jsonify
import socket
import time
import random


app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World!"

# create a socket object
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# get local machine name
host = socket.gethostname()

port = 43541

# connection to hostname on the port.
s.connect(('192.168.2.2', port))


@app.route('/api/v1.0/probability', methods=['GET'])
def get_prob():
    tm = s.recv(1024)
    probs = tm.decode('utf-8')
    p = random.uniform(0, 1)
    print(p, probs)
    return jsonify({'probability': probs})



if __name__ == "__main__":
    app.run()
    s.close()
