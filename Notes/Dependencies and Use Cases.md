## Common Dependencies that will be used in the project!
### 1. **`spring-webmvc`**

* **Provides:** Spring Web MVC framework
* **Purpose:** Enables building web applications using the Model-View-Controller pattern. It handles URL routing, controller mapping, REST APIs, and integrates with JSP or Thymeleaf views.

---

### 2. **`spring-context`**

* **Provides:** Spring ApplicationContext and core bean management
* **Purpose:** Supports dependency injection, resource loading, event propagation, and annotation-based configuration. It’s the backbone of the Spring container.

---

### 3. **`spring-data-jpa`**

* **Provides:** JPA repository abstractions for Spring Data
* **Purpose:** Simplifies data access using repositories (like `CrudRepository`, `JpaRepository`) and removes the need for boilerplate code in database operations.

---

### 4. **`mysql-connector-j`**

* **Provides:** MySQL JDBC Driver
* **Purpose:** Allows your application to connect and interact with MySQL databases using JDBC (Java Database Connectivity).

---

### 5. **`hibernate-core`**

* **Provides:** Hibernate ORM framework
* **Purpose:** Manages object-relational mapping between Java classes and database tables, handles transactions, caching, and lazy loading.

---

### 6. **`commons-dbcp2`**

* **Provides:** Apache Commons Database Connection Pooling (DBCP)
* **Purpose:** Manages a pool of database connections to avoid repeatedly opening/closing connections, improving performance and scalability.

---

### 7. **`apache-jstl` (from Jetty)**

* **Provides:** JSTL (JavaServer Pages Standard Tag Library)
* **Purpose:** Adds standard tags (like `c:forEach`, `c:if`, formatting, etc.) to JSP pages, making view development more powerful and easier to maintain.

---

### 8. **`jackson-databind`**

* **Provides:** Core Jackson JSON mapper
* **Purpose:** Converts Java objects to JSON and vice versa. Essential for building RESTful APIs where data exchange is done in JSON format.

---

### 9. **`jackson-datatype-jsr310`**

* **Provides:** Jackson module for Java 8 Date/Time API support
* **Purpose:** Allows Jackson to correctly serialize and deserialize `LocalDate`, `LocalDateTime`, and other `java.time` classes.
