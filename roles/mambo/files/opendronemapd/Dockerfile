FROM opendronemap/opendronemap:latest

COPY wait-for.py /code/wait-for.py

# Entry point
ENTRYPOINT ["python", "/code/wait-for.py", "--project-path", "/code/"]
