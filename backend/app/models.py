import uuid
from datetime import datetime
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Date, Text, Enum, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.database import Base
import enum


class UserRole(str, enum.Enum):
    customer = "customer"
    admin = "admin"
    employee = "employee"


class RequestStatus(str, enum.Enum):
    sent = "sent"
    company_viewed = "company_viewed"
    payment_booking = "payment_booking"
    in_progress = "in_progress"


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    mobile = Column(String, unique=True, nullable=False, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="customer", nullable=False)
    department = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    requests = relationship("ServiceRequest", back_populates="user")
    assignments = relationship("RequestAssignment", back_populates="employee")

class RequestAssignment(Base):
    __tablename__ = "request_assignments"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    request_id = Column(String, ForeignKey("service_requests.id"), nullable=False)
    employee_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    assigned_at = Column(DateTime, default=datetime.utcnow)
    
    request = relationship("ServiceRequest", back_populates="assignments")
    employee = relationship("User", back_populates="assignments")


class Service(Base):
    __tablename__ = "services"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    description = Column(Text)
    icon = Column(String, default="Wrench")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    requests = relationship("ServiceRequest", back_populates="service")


class ServiceRequest(Base):
    __tablename__ = "service_requests"

    id = Column(String, primary_key=True)  # REQ-2026-XXXX
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    service_id = Column(UUID(as_uuid=True), ForeignKey("services.id"), nullable=False)
    property_type = Column(String, nullable=False)
    location = Column(String, nullable=False)
    pincode = Column(String, nullable=True)
    built_up_area = Column(Float, nullable=True)
    preferred_date = Column(Date, nullable=True)
    notes = Column(Text, nullable=True)
    media_urls = Column(Text, nullable=True)
    professional_charge = Column(Float, nullable=True)
    message = Column(Text, nullable=True)
    status = Column(String, default="sent", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="requests")
    service = relationship("Service", back_populates="requests")
    assignments = relationship("RequestAssignment", back_populates="request", cascade="all, delete-orphan")
