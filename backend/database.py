import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:password@localhost:3306/disaster_relief_db",
)

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,  # Automatically tests connection health
    pool_recycle=3600,   # Prevents MySQL connection dropouts
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# FastAPI Dependency to inject db session into endpoints
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
