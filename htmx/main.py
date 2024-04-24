from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
def home():
    return "./static/"


@app.get("/catalog", response_class=HTMLResponse)
def catalog():
    pass


@app.get("/blog", response_class=HTMLResponse)
def blog():
    pass


@app.get("/blogposts", response_class=HTMLResponse)
def no_blog_post():
    pass


@app.get("/blogposts/{markdownName}", response_class=HTMLResponse)
def blogpost(markdownName: str):
    pass
