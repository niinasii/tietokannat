--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

-- Started on 2020-02-12 10:55:07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2821 (class 1262 OID 16394)
-- Name: kurssi; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE kurssi WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Finnish_Finland.1252' LC_CTYPE = 'Finnish_Finland.1252';


ALTER DATABASE kurssi OWNER TO postgres;

\connect kurssi

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16405)
-- Name: oppilas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.oppilas (
    id integer NOT NULL,
    nimi character varying(255) NOT NULL,
    ika integer
);


ALTER TABLE public.oppilas OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16403)
-- Name: oppilas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.oppilas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oppilas_id_seq OWNER TO postgres;

--
-- TOC entry 2823 (class 0 OID 0)
-- Dependencies: 202
-- Name: oppilas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.oppilas_id_seq OWNED BY public.oppilas.id;


--
-- TOC entry 2687 (class 2604 OID 16408)
-- Name: oppilas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oppilas ALTER COLUMN id SET DEFAULT nextval('public.oppilas_id_seq'::regclass);


--
-- TOC entry 2689 (class 2606 OID 16410)
-- Name: oppilas oppilas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oppilas
    ADD CONSTRAINT oppilas_pkey PRIMARY KEY (id);


--
-- TOC entry 2822 (class 0 OID 0)
-- Dependencies: 203
-- Name: TABLE oppilas; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.oppilas TO nodeclient;


--
-- TOC entry 2824 (class 0 OID 0)
-- Dependencies: 202
-- Name: SEQUENCE oppilas_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.oppilas_id_seq TO nodeclient;


-- Completed on 2020-02-12 10:55:07

--
-- PostgreSQL database dump complete
--

