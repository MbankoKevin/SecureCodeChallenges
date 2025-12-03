INSERT INTO posts (title, content)
VALUES
("Welcome", "This is a demo insecure blog."),
("Security", "<script>alert('XSS')</script>");
