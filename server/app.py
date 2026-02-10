from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.post("/api/contact")
def contact():
    data = request.get_json(force=True)
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"ok": False, "error": "Missing fields"}), 400

    # Later you can:
    # - send email
    # - save to database
    # - save to a file
    print("CONTACT:", name, email, message)

    return jsonify({"ok": True})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
