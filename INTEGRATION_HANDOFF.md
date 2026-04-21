# Resumise Integration Handoff (Frontend + AI)

Bu dokuman, frontend gelistiren ekip arkadasinin backend ve AI akisini hizli baglamasi icin hazirlandi.

## 1) System Architecture (Current)

- Frontend -> Backend (`/auth`, `/api/v1/*`)
- Backend -> AI API (`POST /get-advice`, multipart)
- Backend -> PostgreSQL
- CV dosyalari backend tarafinda tutulur (`uploads/cvs/...`)

> Not: AI servisi backend'den ayri bir servis. Frontend AI'yi direkt cagirmayacak. Frontend sadece backend'i cagirmali.

---

## 2) Base URLs

- Backend (local): `http://localhost:8080`
- AI API (local docker): `http://localhost:8000`

Backend config:
- `AI_BASE_URL` -> AI servis adresi
- `ai.api.get-advice-path` -> varsayilan `/get-advice`

---

## 3) Auth Model (Important)

Session-cookie modeli kullaniliyor (JWT degil).

- Login sonrasi `JSESSIONID` cookie set edilir.
- Frontend tum auth/protected requestlerde cookie gondermeli.

### Frontend request ayari

- fetch: `credentials: "include"`
- axios: `withCredentials: true`

---

## 4) Auth Endpoints

### Register
`POST /auth/register`

```json
{
  "email": "user@example.com",
  "password": "Password1234",
  "firstName": "Ali",
  "lastName": "Veli"
}
```

### Login
`POST /auth/login`

```json
{
  "email": "user@example.com",
  "password": "Password1234"
}
```

### Me
`GET /auth/me`

### Logout
`POST /auth/logout`

---

## 5) CV Endpoints

- `POST /api/v1/cvs/upload` (multipart: `file`, optional `title`)
- `GET /api/v1/cvs/list`
- `GET /api/v1/cvs/default`
- `GET /api/v1/cvs/default/content`
- `GET /api/v1/cvs/{cvId}`
- `GET /api/v1/cvs/{cvId}/content`
- `PATCH /api/v1/cvs/{cvId}`
- `POST /api/v1/cvs/{cvId}/default`
- `DELETE /api/v1/cvs/{cvId}`

Frontend analysis olusturmadan once `cvId`'yi buradan secmeli.

---

## 6) Analysis Endpoints

### Create analysis
`POST /api/v1/analyses`

```json
{
  "cvId": 1,
  "jobDescription": "Backend developer role. Spring Boot, PostgreSQL, Docker experience required.",
  "jobLink": "https://example.com/job/123"
}
```

### List analyses
`GET /api/v1/analyses`

### Get analysis detail
`GET /api/v1/analyses/{analysisId}`

---

## 7) Backend -> AI Contract (Current)

Backend AI'ye su sekilde istek atar:

- Method: `POST`
- Path: `/get-advice`
- Content-Type: `multipart/form-data`
- Fields:
  - `cv_file` (binary)
  - `job_description` (string)

AI response expected shape (ornek):

```json
{
  "status": "success",
  "data": {
    "strengths": "...",
    "skill_gap": "...",
    "cv_suggestions": ["..."],
    "interview_prep": ["..."]
  }
}
```

Backend mapping:
- `summary` <- `data.strengths` (fallback)
- `strengths` <- `data.strengths`
- `gaps` <- `data.skill_gap`
- `actionItems` <- `data.cv_suggestions` + `data.interview_prep`
- `matchScore` <- `data.match_score` (yoksa `0`)

---

## 8) Common Errors

### 401 Not authenticated
- Cookie yok veya gonderilmiyor.
- Frontend'de `credentials/include` yok.

### 502 AI API request failed
- AI servis ayakta degil
- `AI_BASE_URL` yanlis
- AI endpoint path yanlis
- AI 4xx/5xx donuyor

### JSON parse error (CTRL-CHAR)
- Analysis create body'de escape edilmemis satir sonu

---

## 9) Quick Frontend Integration Order

1. `auth/login` + `auth/me`
2. CV upload + CV list + CV secimi (`cvId`)
3. Analysis create
4. Analysis list/detail ekranlari
5. Logout + 401 handling

---

## 10) Demo Day Checklist

- [ ] Login/Register calisiyor
- [ ] CV yukleme calisiyor
- [ ] Analysis create sonucu donuyor
- [ ] Analysis detail ekranda gorunuyor
- [ ] Logout sonrasi protected endpointler 401 donuyor

---

## 11) Notes for Team

- Frontend AI'yi direkt cagirmasin; sadece backend'i cagirsin.
- AI ekibi sadece `/get-advice` kontratini sabit tutsun.
- Backend tarafi response mapping'i kontrata gore yonetiyor.

