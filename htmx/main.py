import os
import csv
import uvicorn
from markdown2 import Markdown
from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/pages", StaticFiles(directory="pages"), name="pages")

blogs = [
    {
        "title": "Blog Template 1",
        "description": "Testing Images and Quotes",
        "sourcePath": "/templateBlog1.md",
    },
    {
        "title": "Blog Template 2",
        "description": "Testing Lists",
        "sourcePath": "/templateBlog2.md",
    },
    {
        "title": "Blog Template 3",
        "description": "Testing Tables and Code Blocks",
        "sourcePath": "/templateBlog3.md",
    },
]


def generate_page(title: str, content: str) -> str:
    with open(f"./components/template_page.html") as f:
        return f.read().replace("{{title}}", title).replace("{{content}}", content)


def get_component(filename: str, *argv) -> str:
    with open(f"./components/{filename}.html") as f:
        file = f.read()
        for arg in argv:
            file = file.replace(f"{{{{{arg[0]}}}}}", str(arg[1]))
        return file


def get_catalog_info() -> list[dict[str, str | list[str]]]:
    items = []
    tags = []
    with open("./data/items/mens_shoes.csv") as f:
        reader = csv.reader(f)
        count = 0
        for line in reader:
            if count > 100:
                break
            items.append(
                {
                    "name": line[19],
                    "price": line[20],
                    "tags": line[3].split(","),
                    "imageURL": line[13],
                }
            )
            tags.extend(filter(lambda tag: tag not in tags, line[3].split(",")))
            count += 1
    return items[1:-1], tags[1:-1]


items, tags = get_catalog_info()


def filter_catalog_items(
    query: str, tag: str, sort: str
) -> list[dict[str, str | list[str]]]:
    filtered_items = list(
        filter(
            lambda item: item["tags"].count(tag) > 0 or tag == "all",
            filter(lambda item: item["name"].lower().find(query.lower()) != -1, items),
        )
    )
    if sort != "none":
        filtered_items.sort(
            key=lambda item: float(item["price"]), reverse=sort == "htl"
        )
    print(filtered_items)
    return filtered_items


@app.get("/catalog/items", response_class=HTMLResponse)
async def render_catalog_items(query: str, tag: str, sort: str):
    filtered_items = filter_catalog_items(query, tag, sort)
    content = ""
    for item in filtered_items:
        tags_content = ""
        for tag in item["tags"]:
            tags_content += get_component("catalog_item_tag", ["tag", tag])
        content += get_component(
            "catalog_item",
            ["name", item["name"]],
            ["price", item["price"]],
            ["tags", tags_content],
            ["imageURL", item["imageURL"]],
        )
    return content


@app.get("/catalog/tags", response_class=HTMLResponse)
def option_tags():
    tags_content = ""
    for tag in tags:
        tags_content += f"<option value='{tag}'>{tag}</option>"
    return tags_content


def filter_blog_posts(query: str):
    return list(
        filter(
            lambda blog_post: blog_post["title"].lower().find(query.lower()) != -1
            or blog_post["description"].lower().find(query.lower()) != -1,
            blogs,
        )
    )


@app.get("/blog/posts", response_class=HTMLResponse)
async def render_blog_posts(query: str):
    filtered_blogs = filter_blog_posts(query)
    blogs_content = ""
    for index, blog in enumerate(filtered_blogs):
        blogs_content += get_component(
            "blog_block",
            ["title", blog["title"]],
            ["description", blog["description"]],
            ["index", index],
        )
    return blogs_content


# Pages and Components


@app.get("/", response_class=HTMLResponse)
def root():
    return generate_page("Home", get_component("home"))


@app.get("/home", response_class=HTMLResponse)
def home():
    return get_component("home")


@app.get("/catalog", response_class=HTMLResponse)
def catalog():
    return get_component("catalog")


@app.get("/blog", response_class=HTMLResponse)
def blog():
    return get_component("blog")


@app.get("/blogposts", response_class=HTMLResponse)
def no_blog_post():
    return get_component("noblogpost")


@app.get("/blogposts/{index}", response_class=HTMLResponse)
def blogpost(index: int):
    markdowner = Markdown(extras=["tables", "fenced-code-blocks"])
    file = blogs[index]
    with open(f"./data/blogs{file['sourcePath']}") as f:
        # return get_component("blogpost", ["content", markdowner.convert(f.read())])
        return generate_page(
            file["title"],
            get_component("blogpost", ["content", markdowner.convert(f.read())]),
        )


@app.get("/navbar", response_class=HTMLResponse)
def navbar():
    return get_component("navbar")


@app.get("/footer", response_class=HTMLResponse)
def footer():
    return get_component("footer")


def serve():
    uvicorn.run(app)


def main():
    app.mount("/static", StaticFiles(directory="static"), name="static")
    app.mount("/", StaticFiles(directory="pages"), name="pages")
    # serve() # production
    os.system("uvicorn main:app --reload")


if __name__ == "__main__":
    main()
