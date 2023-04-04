from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/item")
def read_root():
    response = app.get("https://pokeapi.co/api/v2/pokemon/ditto")
    return response