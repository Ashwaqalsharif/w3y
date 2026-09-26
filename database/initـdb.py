import sqlite3
from pathlib import Path

db_path = Path(__file__).parent / "w3y.db"

with sqlite3.connect(db_path) as connection:
    connection.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL
        )
    """)

print("تم إنشاء قاعدة البيانات وجدول المستخدمين بنجاح")