# UWRT Final Website

This is a website made for my UWRT 150 final. The idea of it is to test multiple different frameworks and see which one is the best.
Obviously, not one framework is the best, but towards the end of the paper, I'll start judging them based on what they're best at.

If you want to run any of these websites, make sure you have [node](https://nodejs.org/en) installed!

## Run React

You're just going to want to install all the dependencies and run the server in development mode.
To do this, run these commands (make sure you're in the `/react` directory!)

```bash
npm i
npm run serve
```

## Run Next

This process is the same for React, but make sure you're in the `/next` directory. Just run:

```bash
npm i
npm run start
```

## Run Svelte

Make sure you're in the `/svelte` directory and run:

```bash
npm i
npm run dev
```

Currently the way I have it set up, build doesn't work for Svelte. Which is why I'm using dev.

## Run HTMX

This one is running a python file. So whatever command you use for python, use that instead of the one here. Also when sourcing the virtual environment, make sure you're sourcing the corrent file corresponding to your shell. So if you're using zsh, for example, you're going to want to source activate.zsh

### Windows

```bash
python -m venv venv
./venv/Scripts/activate
pip install -r requirements.txt
python ./main.py
```

### Linux

Again, make sure to use you're python command. It could be `python`, `python3`, or someother one I don't know of.

```bash
python -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
python ./main.py
```
