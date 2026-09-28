from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
import sqlite3
import json
import hashlib
import hmac
import secrets
import os
BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "database" / "w3y.db"

def get_db_connection():
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection
def init_database():
    with get_db_connection() as connection:
        connection.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
        """)
        connection.commit()
def hash_password(password, salt=None):
    if salt is None:
        salt = secrets.token_bytes(16)
    password_hash = hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), salt, 600_000
    )
    return salt.hex() + ":" + password_hash.hex()

def verify_password(password, stored_hash): 
    try:
        salt_hex, hash_hex = stored_hash.split(":", 1)
        salt = bytes.fromhex(salt_hex)
        expected_hash = bytes.fromhex(hash_hex)
        actual_hash = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt, 600_000
        )
        return hmac.compare_digest(actual_hash, expected_hash)
    except (ValueError, TypeError):
        return False
class W3YHandler(BaseHTTPRequestHandler):
    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
    def do_GET(self):
        from http import HTTPStatus
        from mimetypes import guess_type
        from urllib.parse import urlsplit, unquote

        requested = unquote(urlsplit(self.path).path).lstrip("/")
        if not requested:
            requested = "index.html"

        file_path = (BASE_DIR / requested).resolve()

        if not file_path.is_relative_to(BASE_DIR) or not file_path.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        page = file_path.read_bytes()
        content_type = guess_type(file_path.name)[0] or "application/octet-stream"

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(page)))
        self.end_headers()
        self.wfile.write(page)

    def do_POST(self):
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length)
        data = json.loads(body.decode("utf-8"))
        username = data.get("username", "").strip()
        password = data.get("password", "")
        if not username or not password:
           self.send_json(400, {"error": "اسم المستخدم وكلمة المرور مطلوبان"}) 
           return
        if self.path == "/api/login":
            db_path = BASE_DIR / "database" / "w3y.db"
            
            with sqlite3.connect(db_path) as connection:
                user = connection.execute(
                    "SELECT password_hash FROM users WHERE username = ?",
                    (username,)
                ).fetchone()
            if user is None or not verify_password(password, user[0]):
                self.send_json(401, {"error": "اسم المستخدم أو كلمة المرور غير صحيحة"})
                return 
            self.send_json(200, {"message": "تم تسجيل الدخول بنجاح"}) 
            return    
        if self.path != "/api/register":
            self.send_json(404, {"error": "المسار غير موجود"})
            return
        db_path = BASE_DIR / "database" / "w3y.db"
        password_hash = hash_password(password)
        with sqlite3.connect(db_path) as connection:
            connection.execute(
                "INSERT INTO users (username, password_hash) VALUES (?, ?)",
                (username, password_hash)
            )
        self.send_json(201, {"message": "تم إنشاء الحساب بنجاح"})
if __name__ == "__main__":
    init_database()
    port = int(os.environ.get("PORT", 8000))
    server = HTTPServer(("0.0.0.0", port), W3YHandler)
    server.serve_forever()

     

     
            