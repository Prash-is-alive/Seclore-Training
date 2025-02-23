import java.sql.*;

class Main {
    public static void main(String[] args) throws Exception {

        String url = "jdbc:mysql:localhost:3306/traildb";
        String uname = "root";
        String pass = "Pass@123";
        String query = "select * from students";
        Connection con = DriverManager.getConnection(url, uname, pass);
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery(query);
        while (rs.next())
            System.out.println(rs.getInt("roll") + " " + rs.getString("name"));

        con.close();
        st.close();
        rs.close();
    }
}