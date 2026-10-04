import os
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import bcrypt

# Add the parent directory to sys.path so we can import app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.models import User, Service, Base

# The URL provided is internal. If running locally, you need the public URL.
DATABASE_URL = "postgresql://postgres:GMczbdKEqbXlGHmXwzcriFXTnxCQIFsR@postgres.railway.internal:5432/railway"

# For local testing if they swap to the public URL:
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def seed_db():
    print("Connecting to database...")
    try:
        # Create tables if they don't exist
        Base.metadata.create_all(bind=engine)
        
        db = SessionLocal()
        
        # 1. Add Services
        services = [
            {"name": "General Maintenance", "description": "Basic repair and maintenance", "icon": "Wrench"},
            {"name": "Electrical", "description": "Electrical repairs and installations", "icon": "Zap"},
            {"name": "Plumbing", "description": "Plumbing services and pipe repair", "icon": "Droplet"},
            {"name": "Cleaning", "description": "Deep cleaning and sanitization", "icon": "Sparkles"}
        ]
        
        print("Adding services...")
        for s in services:
            if not db.query(Service).filter_by(name=s["name"]).first():
                db.add(Service(**s))
        
        # 2. Add Admin
        print("Adding admin...")
        if not db.query(User).filter_by(mobile="9999999999").first():
            admin = User(
                name="Admin User",
                mobile="9999999999",
                email="admin@rehabtechnologies.com",
                password_hash=hash_password("Admin@123"),
                role="admin"
            )
            db.add(admin)

        # 3. Add 3 Team Members
        print("Adding team members...")
        team_members = [
            {"name": "Employee One", "mobile": "8888888881", "email": "emp1@rehab.com", "role": "employee", "department": "Maintenance"},
            {"name": "Employee Two", "mobile": "8888888882", "email": "emp2@rehab.com", "role": "employee", "department": "Electrical"},
            {"name": "Employee Three", "mobile": "8888888883", "email": "emp3@rehab.com", "role": "employee", "department": "Plumbing"}
        ]
        
        for tm in team_members:
            if not db.query(User).filter_by(mobile=tm["mobile"]).first():
                emp = User(
                    name=tm["name"],
                    mobile=tm["mobile"],
                    email=tm["email"],
                    password_hash=hash_password("Emp@123"),
                    role=tm["role"],
                    department=tm["department"]
                )
                db.add(emp)
        
        db.commit()
        print("Successfully seeded the database!")
        
    except Exception as e:
        print(f"Error seeding database: {e}")
    finally:
        if 'db' in locals():
            db.close()

if __name__ == "__main__":
    seed_db()
