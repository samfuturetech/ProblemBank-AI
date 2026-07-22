from fastapi import FastAPI

app = FastAPI(title="ProblemBank AI")

@app.get("/")
def root():
    return {
        "message": "Welcome to ProblemBank AI 🚀"
    }
