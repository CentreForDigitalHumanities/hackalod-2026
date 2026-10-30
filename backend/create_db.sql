CREATE user hackalod WITH createdb PASSWORD 'hackalod';
CREATE DATABASE hackalod;
GRANT ALL ON DATABASE hackalod TO hackalod;
GRANT ALL ON SCHEMA public TO hackalod;
ALTER DATABASE hackalod OWNER TO hackalod;
