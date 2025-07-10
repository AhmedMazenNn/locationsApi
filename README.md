# 🌍 Tourist Destinations API

A lightweight Node.js REST API that provides information about unique tourist and historical locations around the world.  
Built using **Node.js core HTTP module** with no frameworks, just clean code and modular design.

---

## 🚀 Features

- Get all locations
- Filter by:
  - `continent`
  - `country`
  - `location`
  - `is_open_to_public` (true / false)
- Custom error responses for invalid routes or query keys

---


---

## 📡 API Endpoints

### `GET /api`  
🔍 Filter using query params:

#### Query Parameters Supported:
| Key                | Example                          |
|--------------------|----------------------------------|
| `continent`        | `/api?continent=Asia`            |
| `country`          | `/api?country=Japan`             |
| `location`         | `/api?location=Waitomo`          |
| `is_open_to_public`| `/api?is_open_to_public=true`    |

> ✅ Combine multiple:
/api?continent=Oceania&is_open_to_public=true


---

## 🧪 Sample Data Format

```json
{
  "name": "Waitomo Glowworm Caves",
  "location": "Waitomo",
  "country": "New Zealand",
  "continent": "Oceania",
  "is_open_to_public": true,
  "uuid": "550e8400-e29b-41d4-a716-446655440001",
  "details": [
    {
      "fun_fact": "The glowworms create a star-like effect on the cave ceiling using bioluminescence."
    },
    {
      "description": "A subterranean network of limestone caverns famous for its magical boat rides under twinkling glowworm-lit ceilings."
    }
  ]
}


