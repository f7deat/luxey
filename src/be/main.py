from fastapi import FastAPI

from controllers.crawl import do_crawl

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/crawl")
def crawl():
    return do_crawl()