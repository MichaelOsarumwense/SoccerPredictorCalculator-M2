import os
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'some_secret'

# Set default values for IP and PORT
default_ip = '0.0.0.0'
default_port = 5000

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    # Retrieve IP and PORT from environment variables or use defaults
    host = os.environ.get('IP', default_ip)
    port = int(os.environ.get('PORT', default_port))

    app.run(host=host, port=port, debug=True)
