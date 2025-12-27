from antlr4 import *
from antlr4.error.ErrorListener import ErrorListener
from MeownageLexer import MeownageLexer
from MeownageParser import MeownageParser
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

class MeownageErrorListener(ErrorListener):
    def __init__(self):
        super(MeownageErrorListener, self).__init__()
        self.errors = []

    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        self.errors.append(f"Line {line}:{column} - {msg}")

def check_script(input_text):
    input_stream = InputStream(input_text)
    
    # Lexer
    lexer = MeownageLexer(input_stream)
    lexer.removeErrorListeners()
    error_listener = MeownageErrorListener()
    lexer.addErrorListener(error_listener)
    
    # Parser
    token_stream = CommonTokenStream(lexer)
    parser = MeownageParser(token_stream)
    parser.removeErrorListeners()
    parser.addErrorListener(error_listener)
    
    # Parse from Meownage grammar's rule
    tree = parser.program()

    # Result
    return {
        "accepted": len(error_listener.errors) == 0,
        "errors": error_listener.errors
    }

@app.route('/check', methods=['POST'])
def check_endpoint():
    data = request.get_json()
    script = data.get('script', '')
    result = check_script(script)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)