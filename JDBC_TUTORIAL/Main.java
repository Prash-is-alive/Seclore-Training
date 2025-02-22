import java.sql.*;

class Main{
    public static void main(String[] args) throws Exception{

        String url = "";
        String uname = "";
        String pass = "";

        Class.forName("com.mysql.jsbc.Driver");
        Connection con = DriverManager.getConnection(url, uname, pass);
    }
}