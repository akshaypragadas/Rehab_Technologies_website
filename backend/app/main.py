from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

from app.database import Base, engine
from app.routers import auth, services, requests, users, employees
from app import models

load_dotenv()

from app.database import Base, engine, SessionLocal

# Create DB tables on startup
Base.metadata.create_all(bind=engine)

def seed_services():
    db = SessionLocal()
    try:
        default_services = [
            {"name": "Condition Survey & Health Monitoring", "description": "Data-driven insights for informed decisions on structural health.", "icon": "ClipboardCheck"},
            {"name": "Investigation & Diagnosis", "description": "Advanced NDT, material & structural investigation.", "icon": "Search"},
            {"name": "Repair Engineering & Design", "description": "Advanced solutions for durable results and restoration.", "icon": "Wrench"},
            {"name": "Rehabilitation & Refurbishment", "description": "Scientific solutions for enhancing load-carrying capacity & safety.", "icon": "Shield"},
            {"name": "Waterproofing & Protection", "description": "Protecting structures against severe seepage and extending life.", "icon": "HomeIcon"},
            {"name": "Project Management & Quality Control", "description": "Execution with sophisticated machinery and validated technicians.", "icon": "LineChart"},
        ]
        for ds in default_services:
            exists = db.query(models.Service).filter_by(name=ds["name"]).first()
            if not exists:
                db.add(models.Service(**ds))
        db.commit()
    finally:
        db.close()

seed_services()

app = FastAPI(
    title="Rehab Technologies API",
    description="Backend API for Rehab Technologies structural repair services portal.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth.router)
app.include_router(services.router)
app.include_router(requests.router)
app.include_router(users.router)
app.include_router(employees.router)


@app.get("/", tags=["health"])
def root():
    return {"status": "ok", "message": "Rehab Technologies API is running"}


@app.get("/health", tags=["health"])
def health():
    return {"status": "healthy"}
