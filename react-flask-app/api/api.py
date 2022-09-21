from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/message')
def hello_world():
    return ({'Message': 'Hello World'})

@app.route('/testMessage')
def TestMessage(testMessage):
    return testMessage


@app.route('/login', methods = ['POST', 'GET'])
def login():
    # postData = request.get_json()
    # newPost = PostTest(content=postData['content'])
    if request.method == 'POST':
        #user = request.form['testApi']
        return f"Posted!"
    else:
        return ({'GetTest' : "Got a GET request!"})

if __name__ == '__main__':
    app.run(debug=True)