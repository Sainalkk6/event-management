PGDMP                      |            event-management #   16.6 (Ubuntu 16.6-0ubuntu0.24.04.1) #   16.6 (Ubuntu 16.6-0ubuntu0.24.04.1) #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16388    event-management    DATABASE     ~   CREATE DATABASE "event-management" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
 "   DROP DATABASE "event-management";
                postgres    false                        2615    19234    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            �           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            �            1259    19260    Bookings    TABLE     �   CREATE TABLE public."Bookings" (
    id integer NOT NULL,
    "userId" text NOT NULL,
    "eventId" integer NOT NULL,
    count integer NOT NULL
);
    DROP TABLE public."Bookings";
       public         heap    postgres    false    5            �            1259    19282    Bookings_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Bookings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Bookings_id_seq";
       public          postgres    false    5    218            �           0    0    Bookings_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Bookings_id_seq" OWNED BY public."Bookings".id;
          public          postgres    false    219            �            1259    19253    Event    TABLE       CREATE TABLE public."Event" (
    title text NOT NULL,
    description text NOT NULL,
    date text NOT NULL,
    location text NOT NULL,
    "imageUrl" text NOT NULL,
    id integer NOT NULL,
    "createdBy" integer NOT NULL,
    "time" text NOT NULL,
    price integer NOT NULL
);
    DROP TABLE public."Event";
       public         heap    postgres    false    5            �            1259    19290    Event_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Event_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Event_id_seq";
       public          postgres    false    217    5            �           0    0    Event_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Event_id_seq" OWNED BY public."Event".id;
          public          postgres    false    220            �            1259    19244    User    TABLE     �   CREATE TABLE public."User" (
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false    5            �            1259    19300    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    5    216            �           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    221            �            1259    19235    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �           2604    19283    Bookings id    DEFAULT     n   ALTER TABLE ONLY public."Bookings" ALTER COLUMN id SET DEFAULT nextval('public."Bookings_id_seq"'::regclass);
 <   ALTER TABLE public."Bookings" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    19291    Event id    DEFAULT     h   ALTER TABLE ONLY public."Event" ALTER COLUMN id SET DEFAULT nextval('public."Event_id_seq"'::regclass);
 9   ALTER TABLE public."Event" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    217            �           2604    19301    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    216            �          0    19260    Bookings 
   TABLE DATA           D   COPY public."Bookings" (id, "userId", "eventId", count) FROM stdin;
    public          postgres    false    218   ^'       �          0    19253    Event 
   TABLE DATA           q   COPY public."Event" (title, description, date, location, "imageUrl", id, "createdBy", "time", price) FROM stdin;
    public          postgres    false    217   �'       �          0    19244    User 
   TABLE DATA           F   COPY public."User" (name, email, password, "isAdmin", id) FROM stdin;
    public          postgres    false    216   �/       �          0    19235    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    215   �0       �           0    0    Bookings_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Bookings_id_seq"', 17, true);
          public          postgres    false    219            �           0    0    Event_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Event_id_seq"', 11, true);
          public          postgres    false    220            �           0    0    User_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."User_id_seq"', 13, true);
          public          postgres    false    221            �           2606    19285    Bookings Bookings_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Bookings"
    ADD CONSTRAINT "Bookings_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Bookings" DROP CONSTRAINT "Bookings_pkey";
       public            postgres    false    218            �           2606    19293    Event Event_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Event"
    ADD CONSTRAINT "Event_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Event" DROP CONSTRAINT "Event_pkey";
       public            postgres    false    217            �           2606    19303    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    216            �           2606    19243 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    215            �           1259    19251    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    216            �           2606    19321    Bookings Bookings_eventId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Bookings"
    ADD CONSTRAINT "Bookings_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES public."Event"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."Bookings" DROP CONSTRAINT "Bookings_eventId_fkey";
       public          postgres    false    3309    217    218            �           2606    19340    Bookings Bookings_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Bookings"
    ADD CONSTRAINT "Bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(email) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public."Bookings" DROP CONSTRAINT "Bookings_userId_fkey";
       public          postgres    false    216    218    3305            �           2606    19311    Event Event_createdBy_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Event"
    ADD CONSTRAINT "Event_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public."Event" DROP CONSTRAINT "Event_createdBy_fkey";
       public          postgres    false    217    3307    216            �   +   x�34�,K�KNu�M���K���4�4�24G5�4����� j�N      �     x����r�8�����\Y	9U�-W2�f*�I%��L���HB<�!Q��o���썽Yd�h�$���n|5�A��Et~��/��o�g�A�1��L�E|���AÙ��n�5"�j�1�߭ѵAc�����4>E���2c:y�eru'd���H���M�^l&l��6#�G�^�!�p����bPnR����41���/_N����팍�Ƈ��-��E��nQ�P�?��ufz)�m�q"P'���씦˩�����{ݒ6�6o�ugw�;��eayt��s{��>����>��x��.����X�W�4�I�Up��3����/8����ׯ�����zH�h^�����)k��j�6:#ZˊUy�e.i�d^�Ҙ�@LQHC2k1��d����1�0|��Rt��z�P���6�)�.��-�}�4Rn0�x�3��L	 !@ǌ>�xe�u�,e?�@�zH��/Z x���SW�i��I���hR����Qt�5J�"����z����,���'t7��ӏb����s���|5?���r��l�nW�js������M�8�,���y�%Tk"2"�ᬐ��TK�	�����BkC0ͬ���l��f�*�$�e|��$�eg�wL0�
6w�@u�P��[�䤜?L	1��覕������h��5�>���I�hzt��r�1���)�N����ȇ+�i4k���[�pH�I��}�!vz�~��#�u�S�ݡv'�p6��S���Gӵ�cӺS/���ݡXڅ�Z�O@]�y���9-r�Ÿ֙Ɔ	Z"� 3���1^P�ǘ�yedip�/`|Cj�P㛷bj�����t��4~������9&��Y��^�W{�"/ȕ�:�.�WS�!? ]��!�B��`�,�u���1�'�l�|���G~%!8o�G3�� ?�k8��żHP4iƢ��2}fGJ�8/��ov�\�ԛCA�a��<�P�G���0�x��-ͅb��%e���򜒂�2�FTZ�Ls��,�U�ɪ��b�'���<a.fN��?��Wq>?2��W;7h�fx�����j��]�~�:1M�?LN91��3a܉Mf��D*�5��n�C*��j����<w�,���� ���#r���5�Cm�B:v���<g�$�������a{g�|yǒ��qd9��eX(��\T%�o�%��ei7�R�Q!KZq@:���<�v�ǵ ���N'!¼���vm��<� �U��	��A������6�����=ߢڈp/psŸ��w�n�;6�է�.���3u�1{�"չ^�AܢV,�]�[��C2z$]:yO?�f�����;]|����Z����
4��?9�x��h� )���s��а��l�r���u헧ȹb��iP��Z��Y*�<;/4� Z�1�D�sbyV�Qn#��(j/7�3�k����h��W1�%���xvw8A�L�8���B�)0^W����,�Wz\f�H�b�M���h��i�JsR(��01���$���{ӹG��~6߮wB�@��Z�}P+�i��]7b�υۑݙ��P�=9��t�2����ħ mk���[�� � s��g6`e)�,��X��R�P��XI���� �JLHY�?C�δ��9QvÓ��j��|s!B#�>�AQ�}�����{�4���G��ī�S��ze�^Y_��W��A�}ڡ��"��9]��>ub���� ���fN#E�`�_}Ǐм�����2(�����Ą��Z@}��C�؞r;�-у`������lٱ?)y�|�b��Z�H���� jh���A�%lЀ{�WQF����%#&��Se�q&m�q^i�rA�,�¦J�i�^@/���zhڋ�'����.�j��jl_��Wy� 	���/ӝW���Ѻ�׽����d����L��ր{���Pm'ݺ��'h��V�M���aqR���h����b�e�T�G;�uޝ6����[b��	T��yT�L�
�RR�k�	�te��hK��j��	ǰ�%l���n���9�z��Є������Ϳ�ﶀ      �   �   x�e̱R�0 ��9yf4Aڰ)�%��J9�M/�C��O�������ޙ��Ɔ�u �"@��ZR+N#�<�:�yT9��Ħ2����rI�i��1r�� hE/�9�B��y�?�Č+�����+z&�p%�3>.����X=~�n�\�z5�^M�|B.�g�gk�vMe�<![���MI:��f�p�Ow�kn��K�O�?�0|!�y�Qf      �   7  x���[j�1���U��(�}4YDW0�Fj%-����W.���
BH��t���t�ֆf�EҢ��D�~@�s�5��Mɵ�h�* v��MU�!�"I �+�E:����A��*#�{�l~|�H�
p<=�·��q�T��-�V7�@(�{�j���>��A=�]9�n�	�X'v��$u�������1�S��+p[�a�_F,�	Χ�}>������[0��x�A!�lc�H8��F7Lt�C��5��IZ6�V4�3���e�Vx�k;�<�4�)jVoqӨ������+5���K�����A}�L�z�Qm_��2ׁI�N��`��hJՈ�4��`l%HkmA�Ӻ-����4���t|K�;�^寺��)9�Wd+͹���kk�ʡ���\b_�x��
ɺ�L��+�3�̅1ŷW4���B�~����|���|9?����^��RY��(M��d��M�H'.�݋G_-!T��	���K�e�� ��N<�z��Yq,\������B�=���,��y8��}���=}��D��@�vEy������K!�     