### 📘 **Java Reflection API**

#### 🔍 What is Reflection API?

* A feature in Java that allows programs to **inspect and modify** the **runtime behavior** of classes, methods, fields, and objects.
* Helps in **achieving high-level polymorphism** by accessing class information and behavior dynamically.

---

### 🧠 **Why Use Reflection API?**

1. **To Examine Classes and Objects**

   * You can find out details like methods, fields, and constructors **while the program is running**.
   * Example: Eclipse’s auto-suggestions use reflection to list all possible methods dynamically.

2. **To Manipulate Classes and Objects**

   * You can **create objects**, **call methods**, and **access variables** at runtime.
   * Example: Servers like **Tomcat** use Reflection to call servlet methods dynamically based on the request URL.

---

### 📦 **Getting the Class Object**

To use Reflection, first get the `Class` object for the type:

```java
Class c1 = obj.getClass();                  // From an object
Class c2 = String.class;                    // From class name
Class c3 = Class.forName("java.lang.String"); // Using class name string
Class c4 = int.class;                       // For primitives
```

---

### 🧾 **Getting Class Information**

Once you have a `Class` object, you can get information like:

```java
Method[] methods = c.getMethods();             // Public methods
Constructor[] constructors = c.getConstructors(); // Public constructors
Field[] fields = c.getFields();                // Public fields
```

Also, you can get:

* Package info
* Superclass
* Implemented interfaces
* Annotations

---

### ⚙️ **Calling Methods Dynamically**

Example:

```java
class Calculator {
    public int add(int x, int y) {
        return x + y;
    }
}

Class<?> calcClass = Calculator.class;
Object calcObj = calcClass.newInstance();  // Create object
Method method = calcClass.getMethod("add", int.class, int.class);
Object result = method.invoke(calcObj, 10, 20);  // Call method
System.out.println(result);  // Output: 30
```

✅ This shows how to **call a method without knowing it at compile time**.

---

### 🔐 **Accessing Private Fields**

Example:

```java
Class<Employee> empClass = Employee.class;
Employee empObj = empClass.newInstance();

Field field = empClass.getDeclaredField("empno");
field.setAccessible(true);                   // Make private field accessible
field.setInt(empObj, 1001);                  // Set value

System.out.println(field.getInt(empObj));    // Read value
```

✅ You can read or modify **private fields**, but it's safer to make such fields `final` to avoid unwanted changes.
