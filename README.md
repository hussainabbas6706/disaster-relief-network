# ReliefNet

**Disaster Relief Resource Allocation & Routing Network**

A web application that helps people in Karachi find the nearest warehouse with the relief supplies they need, request them, and track the delivery on a map. Think of it as Google Maps for relief supplies.

Built as a DBMS project for BSCS 4th Semester (Evening), University of Karachi.

---

## The Problem

During floods, earthquakes, and fires, relief operations get delayed because of logistics:

- Coordinators check paperwork by hand to find which warehouse has what.
- Many teams request at the same time and end up claiming the same stock.
- Normal databases can't tell which warehouse is actually close, or which roads are blocked.
- Nobody can see where a shipment is while it is on the way.

## What ReliefNet Does

You say what you need and where you are. ReliefNet finds the closest working warehouse that has enough stock, reserves it safely, plans a route around blocked roads, and shows the delivery on a live map.

## Features

- **Nearest warehouse matching:** spatial queries find the closest operational warehouse that has the requested item in sufficient quantity.
- **No double-booking:** dispatches run as ACID transactions with row-level locking (`SELECT ... FOR UPDATE`), so two teams can never claim the same stock.
- **Routes around blocked roads:** road blockages are stored in the database and fed to OSRM, which returns a safe detour.
- **Live map:** warehouses, request destinations, blockages, and delivery routes shown on an interactive map.
- **Relief requests:** create a request, dispatch it, and follow it from Pending to Dispatched to Delivered.
- **Warehouse and inventory management:** keep track of stock levels and which warehouses are operational.
- **Role-based access:** Admin, Coordinator, and Field Operator, with secure JWT login.
- **AI relief assistant:** ask questions in plain English or Urdu, such as "Find the nearest warehouse with 100 Food Packs" or "Which roads are blocked?". The assistant queries live data and can open the answer on the map.

## Design Approach

- **Mobile-first:** designed for phones first because field operators use it outdoors, then scaled up for desktop.
- **Minimalist:** light theme, one accent color, plain language, few elements per screen. No dashboards crammed with widgets.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js, React, Tailwind CSS, shadcn/ui, Leaflet |
| Backend | FastAPI (Python), Pydantic |
| Database | MySQL with spatial indexing (SRID 4326), SQLAlchemy 2.0, Alembic |
| Routing | OSRM (Open Source Routing Machine) |
| AI | OpenAI LLM, Groq, function calling |

## Team

| Name | Role |
| --- | --- |
| Syed Muhammad Hussain Abbas | Full-stack and AI: spatial proximity engine, OSRM routing, AI chat, map UI |
| Muhammad Salman | Full-stack and AI: core REST APIs, authentication, AI context helpers, dashboard UI |
| Muhammad Fasih Dagia | Backend and database: schema, migrations, concurrency control, benchmarking |
| Muhammad Bin Abu Muhammad | Documentation and testing: report, ER diagrams, slides, QA |

## Presented To

- Sir Faiz
- Ma'am Ilsa Naeem

Department of Computer Science, University of Karachi
BSCS, 4th Semester (Evening)
